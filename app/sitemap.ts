import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://resend-it.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    },
    {
      url: 'https://resend-it.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

   {
      url: 'https://resend-it.com/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
