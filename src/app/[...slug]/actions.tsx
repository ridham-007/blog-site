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
            `${process.env.NEXT_PUBLIC_API_URL}/common/slug-data/${categorySlug}`,
            {
              cache: 'no-store',
              next: { revalidate: 240 },
            }
          );
          const responseData = await res.json();
          const { type } = responseData?.data;
          if (type === "article") {
            const { article } = responseData?.data;
            return <ShowArticle article={article} />;
          } else {
            let { articles = [] } = responseData?.data?.category;
            articles = [...articles].filter(article=>article?.status);
            articles = [...articles].sort((a: any, b: any) => {
              const diff =
              new Date(b?.updatedAt).getTime() -
              new Date(a?.updatedAt).getTime();
              return diff;
            });
            return <CategoryWiseTopNews articles={articles} />;
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
      `${process.env.NEXT_PUBLIC_API_URL}/articles/recent`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { data } = responseData;
    if (Array.isArray(data) && data.length > 0) {
      return <DynamicNewsWall title="Recent Article" news={data} />;
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
      `${process.env.NEXT_PUBLIC_API_URL}/articles/popular`,
      {
        next: { revalidate: 60 },
      }
    );
    const responseData = await res.json();
    const { data } = responseData;
    if (Array.isArray(data) && data.length > 0) {
      return <DynamicNewsWall title="Popular Article" news={data} />;
    } else {
      return <DynamicNewsWallSkeleton label="Popular" />;
    }
  } catch (e) {
    return <DynamicNewsWallSkeleton label="Popular" />;
  }
}
