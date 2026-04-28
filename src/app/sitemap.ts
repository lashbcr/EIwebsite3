import type { MetadataRoute } from 'next';

const BASE = 'https://lashwebsitetwo.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'weekly', priority: 1.0, lastModified: new Date() },
    { url: `${BASE}/ai`, changeFrequency: 'monthly', priority: 0.9, lastModified: new Date() },
    { url: `${BASE}/pricing`, changeFrequency: 'monthly', priority: 0.9, lastModified: new Date() },
    { url: `${BASE}/platform`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/blog/orbus`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/blog/bizzdesign`, changeFrequency: 'monthly', priority: 0.8, lastModified: new Date() },
    { url: `${BASE}/blog/ardoq`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/blog/sap-leanix`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/use-cases/enterprise-architecture`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/use-cases/digital-transformation`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/use-cases/capability-mapping`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/use-cases/app-portfolio`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/industries/financial-services`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/industries/healthcare`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/industries/public-sector`, changeFrequency: 'monthly', priority: 0.7, lastModified: new Date() },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${BASE}/customers`, changeFrequency: 'monthly', priority: 0.6, lastModified: new Date() },
    { url: `${BASE}/customers/hercules`, changeFrequency: 'monthly', priority: 0.5, lastModified: new Date() },
    { url: `${BASE}/partners`, changeFrequency: 'monthly', priority: 0.5, lastModified: new Date() },
    { url: `${BASE}/resources`, changeFrequency: 'weekly', priority: 0.5, lastModified: new Date() },
    { url: `${BASE}/events`, changeFrequency: 'weekly', priority: 0.5, lastModified: new Date() },
    { url: `${BASE}/publisher`, changeFrequency: 'monthly', priority: 0.5, lastModified: new Date() },
    { url: `${BASE}/contact`, changeFrequency: 'yearly', priority: 0.4, lastModified: new Date() },
    { url: `${BASE}/demo`, changeFrequency: 'yearly', priority: 0.4, lastModified: new Date() },
  ];
}
