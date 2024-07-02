"use server";

import AboutUs from "@/components/about-us";
import CategoryWiseTopNews, { CategoryWiseTopNewsSkeleton } from "@/components/category-wise-top-news";
import ContactForm from "@/components/contact-form";
import Disclaimer from "@/components/disclaimer";
import DynamicNewsWall, { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import PrivacyPolicy from "@/components/privacy-policy";
import ShowArticle from "@/components/show-article";
import TermsConditions from "@/components/terms-conditions";
import { notFound } from 'next/navigation'

export async function LoadContentUsingSlug(slug: any) {
  try {
    const { slug: categorySlug } = slug;
    if (categorySlug === "_not-found") {
      return notFound();
    }
    switch (categorySlug) {
      case "about-us":
        return <AboutUs />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "contact-us":
        return <ContactForm />;
      case "terms-conditions":
        return <TermsConditions />;
      case "disclaimer":
        return <Disclaimer />;
      default: {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/common/${process.env.NEXT_PUBLIC_SITE_ID}/${categorySlug}/${1}/${30}`,
            {
              cache: 'no-store',
            }
          );
          const responseData = await res.json();
          const { type } = responseData;
          if (type === "article") {
            const { article } = responseData;
            return <ShowArticle article={article[0]} />;
          } else {
    
            let article = responseData?.article || [];
            article = [...article].filter(article=>article?.status);
            article = [...article].sort((a: any, b: any) => {
              const diff =
              new Date(b?.updatedAt).getTime() -
              new Date(a?.updatedAt).getTime();
              return diff;
            });
            return <CategoryWiseTopNews articles={article} />;
          }
        } catch (e) {
          return notFound();
        }
      }
    }
  } catch (e) {
    console.log(e);
    return notFound();
  }
}

export async function GetRecentNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/article/${process.env.NEXT_PUBLIC_SITE_ID}/recent`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { articles } = responseData;
    if (Array.isArray(articles) && articles.length > 0) {
      return <DynamicNewsWall title="Recent Article" news={articles} />;
    } else {
      return <DynamicNewsWallSkeleton label="Recent" />;
    }
  } catch (e) {
    console.log(e);
    return <DynamicNewsWallSkeleton label="Recent" />;
  }
}

export async function GetPopularNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/common/article/${process.env.NEXT_PUBLIC_SITE_ID}/popular`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { articles } = responseData;
    if (Array.isArray(articles) && articles.length > 0) {
      return <DynamicNewsWall title="Popular Article" news={articles} />;
    } else {
      return <DynamicNewsWallSkeleton label="Popular" />;
    }
  } catch (e) {
    return <DynamicNewsWallSkeleton label="Popular" />;
  }
}
