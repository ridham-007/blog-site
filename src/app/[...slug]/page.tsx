import { GetPopularNews, GetRecentNews, LoadContentUsingSlug } from "./actions";
import { Suspense } from "react";
import { CategoryWiseTopNewsSkeleton } from "@/components/category-wise-top-news";
import { ArticleSkeleton } from "@/components/show-article";
import { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { Metadata, ResolvingMetadata } from "next";

function getMetaDataOfAbout(): Metadata {
  return {
    title: "About Us | justreadinside.com",
    description: "Welcome to justreadinside, your go-to source for the latest news and articles on a wide range of topics",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "About Us | justreadinside.com",
      description: "Welcome to justreadinside, your go-to source for the latest news and articles on a wide range of topics",
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfPrivacyPolicy(): Metadata {
  return {
    title: "Privacy Policy | justreadinside.com",
    description: "Read justreadinside's Privacy Policy to understand how we protect and manage your data and privacy while using our services.",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Privacy Policy | justreadinside.com",
      description: "Read justreadinside's Privacy Policy to understand how we protect and manage your data and privacy while using our services."
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfTerms(): Metadata {
  return {
    title: "Terms and Conditions | justreadinside.com",
    description: "Review the Terms and Conditions for using justreadinside's services. Understand your rights and responsibilities as a user of our platform",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Terms and Conditions | justreadinside.com",
      description: "Review the Terms and Conditions for using justreadinside's services. Understand your rights and responsibilities as a user of our platform"
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfDisclaimer(): Metadata {
  return {
    title: "Disclaimer | justreadinside.com",
    description: "Disclaimer justreadinside",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Disclaimer | justreadinside.com",
      description: "Disclaimer justreadinside"
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}

function getMetaDataOfContact(): Metadata {
  return {
    title: "Contact | justreadinside.com",
    description: "Get in touch with justreadinside for inquiries about our services. Contact us today for more information and support.",
    openGraph: {
      url: process.env.NEXT_PUBLIC_SITE_URL,
      type: "website",
      title: "Contact | justreadinside.com",
      description: "Get in touch with justreadinside for inquiries about our services. Contact us today for more information and support."
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL
    }
  }
}


export async function generateMetadata(
  { params, searchParams }: {
    params: { slug: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug: [path] } = params;
  switch (path) {
    case "about-us":
      return getMetaDataOfAbout();
    case "privacy-policy":
      return getMetaDataOfPrivacyPolicy();
    case "contact-us":
      return getMetaDataOfContact();
    case "terms-conditions":
      return getMetaDataOfTerms();
    case "disclaimer":
      return getMetaDataOfDisclaimer();
    default: {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/common/meta-data/${process.env.NEXT_PUBLIC_SITE_ID}/${path}`,
          {
            cache: 'no-store',
          }
        );
        const responseData = await res.json();
        const { metaData } = responseData?.data;
        return {
          title:((metaData?.openGraph?.title || metaData?.openGraph?.ogTitle ||  metaData?.name || metaData?.title) && (
            metaData?.openGraph?.title || metaData?.openGraph?.ogTitle || metaData?.name || metaData?.title
          )) || "JustReadInside",
          description: metaData?.seo_description || metaData?.description || "JustReadInside",
          ...metaData?.keywords && {
            keywords:metaData?.keywords,
          },
          openGraph: {
            ...((metaData?.openGraph?.title || metaData?.openGraph?.ogTitle) && { title: metaData?.openGraph?.title || metaData?.openGraph?.ogTitle }),
            ...((metaData?.openGraph?.description || metaData?.openGraph?.ogDescription) && { description: metaData?.openGraph?.description || metaData?.openGraph?.ogDescription }),
            ...((metaData?.openGraph?.url || metaData?.openGraph?.ogUrl) && { url: metaData?.openGraph?.url || metaData?.openGraph?.ogUrl }),
            ...((metaData?.openGraph?.type || metaData?.openGraph?.ogType) && { type: metaData?.openGraph?.type || metaData?.openGraph?.ogType || '' }),
            ...((metaData?.openGraph?.locale || metaData?.openGraph?.ogLocale) && { locale: metaData?.openGraph?.locale || metaData?.openGraph?.ogLocale }),
            ...((metaData?.openGraph?.site_name || metaData?.openGraph?.ogSiteName) && { siteName: metaData?.openGraph?.site_name || metaData?.openGraph?.ogSiteName }),
            images: [{
              url: metaData?.openGraph?.ogImage || ""
            }],
          },
          twitter: {
            title: "",
            description: "",
            images: ""
          },
          alternates: {
            canonical: process.env.NEXT_PUBLIC_SITE_URL
          }
        }

      } catch (e) {
        return {
          title: "JustReadInside | Explore the world",
          description: "Discover the globe with our one-stop shop that provides thea wide range of blog posts, and motivational travel guides."
        }
      }
    }
  }
}

export default function Slug({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  const renderShimmerContent = () => {
    if (Array.isArray(params.slug) && params.slug.length > 0) {
      const dashCount = (params.slug[0].match(/-/g) || [])?.length;
      if (dashCount >= 2) {
        return <ArticleSkeleton />;
      } else {
        return <CategoryWiseTopNewsSkeleton />;
      }
    }
    else {
      return null;
    }
  }

  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%] overflow-x-hidden !bg-own_bg_secondary !text-own_text_primary">
      {/* <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "20px 0px",
            minHeight: "250px",
            gap: "50px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div id="div-gpt-ad-1732542773495-0"></div>
          <div id="div-gpt-ad-1732542773495-1"></div>
        </div> */}
        {Array.isArray(params.slug) && params.slug.length > 0 && (
          <Suspense fallback={renderShimmerContent()}>
            <LoadContentUsingSlug slug={params.slug[0]} />
          </Suspense>
        )}
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "20px 0px",
            minHeight: "250px",
            gap: "50px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div id="div-gpt-ad-1732542773495-2"></div>
          <div id="div-gpt-ad-1732542773495-3"></div>
        </div> */}
      </section>
      <section className="flex flex-col gap-2 flex-1 basis-[100%] sm:basis-[28%]">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          <GetRecentNews />
        </Suspense>
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "20px 0px",
            minHeight: "250px",
            gap: "50px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div id="div-gpt-ad-1732542773495-4"></div>
          <div id="div-gpt-ad-1732542773495-5"></div>
        </div> */}
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
          <GetPopularNews />
        </Suspense>
      </section>
    </main>
  );
}
