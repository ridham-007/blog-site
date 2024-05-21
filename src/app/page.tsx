import { Suspense } from "react";
import { GetPopularNews, GetRecentNews } from "./[...slug]/actions";
import { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { CategoryBannerTypeOneSkeleton } from "@/components/categoryBannerTypeOne";
import { CategoryBannerTypeTwoSkeleton } from "@/components/categoryBannerTypeTwo";
import { GetCategoryShortPreview } from "./actions";

export default function Home() {
  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%] gap-4">
        <Suspense fallback={<LoadPreviewForCategoriesShimmer/>}>
          <GetCategoryShortPreview />
        </Suspense>
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

export function LoadPreviewForCategoriesShimmer(){
  return (
    <>
      <CategoryBannerTypeOneSkeleton/>
      <CategoryBannerTypeTwoSkeleton/>
      <CategoryBannerTypeOneSkeleton/>
      <CategoryBannerTypeTwoSkeleton/>
    </>
  )
}

