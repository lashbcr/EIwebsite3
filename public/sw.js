const CACHE = 'ei-v1';

const PRECACHE = ['/'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) return;

  // Network-first for HTML navigation
  if (request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(request)
        .then((r) => {
          const clone = r.clone();
          caches.open(CACHE).then((c) => c.put(request, clone));
          return r;
        })
        .catch(() => caches.match(request)),
    );
    return;
  }

  // Cache-first for static assets (_next/static, fonts, images, icons)
  if (
    url.pathname.startsWith('/_next/static') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.match(/\.(woff2?|ttf|otf|eot|ico|png|jpg|jpeg|svg|webp|avif|gif)$/)
  ) {
    e.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((r) => {
            if (r.ok) {
              const clone = r.clone();
              caches.open(CACHE).then((c) => c.put(request, clone));
            }
            return r;
          }),
      ),
    );
    return;
  }

  // Network-only for everything else (API, manifest, etc.)
});
