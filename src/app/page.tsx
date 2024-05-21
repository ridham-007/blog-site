import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from "react";
import { GetPopularNews, GetRecentNews, LoadContentUsingSlug } from "./[...slug]/actions";
import { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import CategoryData from "@/components/CategoryBannerTypeTwo";
import TopCategory from "@/components/CategoryBannerTypeOne";
import CategoryBannerTypeOne from "@/components/CategoryBannerTypeOne";
import CategoryBannerTypeTwo from "@/components/CategoryBannerTypeTwo";

export default function Home() {
  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%] gap-4">
        {/* <LoadContentUsingSlug slug={'how-to-take-professional-travel-photos'}></LoadContentUsingSlug> */}
        <CategoryBannerTypeTwo/>
        <CategoryBannerTypeOne/>
      </section>
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[28%] px-2 gap-4">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          <GetRecentNews />
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
          <GetPopularNews />
        </Suspense>
      </section>
    </main>
  );
}
