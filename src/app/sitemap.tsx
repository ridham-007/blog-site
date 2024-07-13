import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const revalidate = 30

type changeFrequency = | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

        const changeFrequency = 'daily' as changeFrequency

        const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/common/category-site-map/${process.env.NEXT_PUBLIC_SITE_ID}`, {
            next: { revalidate: 200 },
        });
        const data = await categoryResponse.json();

        const articleResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/common/article-site-map/${process.env.NEXT_PUBLIC_SITE_ID}`, {
          next: { revalidate: 200 },
      });
        const data1 = await articleResponse.json();

        const category = data?.categories?.map((item: any) => ({
            url: `${siteUrl}/${item.slug}`,
            lastModified: item.updatedAt,
            changeFrequency: changeFrequency,
            priority: 0.8,
        })) || []


        const article = data1?.articles?.map((item: any) => ({
          url: `${siteUrl}/${item.slug}`,
          lastModified: item.updatedAt,
          changeFrequency: changeFrequency,
          priority: 0.8,
      })) || []

  return [
    {
      url: `${siteUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
        url: `${siteUrl}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${siteUrl}/disclaimer`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      ...category,
      ...article
  ]
}