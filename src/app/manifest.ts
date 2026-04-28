import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Enterprise Insight',
    short_name: 'Entin',
    description:
      'The EA platform built for speed, clarity, and organisation-wide communication — powered by KeystoneEA™.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060b14',
    theme_color: '#060b14',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: '/icons/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
