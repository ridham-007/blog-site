import { Suspense } from "react";
import { GetPopularNews, GetRecentNews } from "./[...slug]/actions";
import { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { CategoryBannerTypeOneSkeleton } from "@/components/category-banner-type-one";
import { CategoryBannerTypeTwoSkeleton } from "@/components/category-banner-type-two";
import { GetCategoryShortPreview } from "./actions";

export default function Home() {
  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%] gap-4">
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
        <Suspense fallback={<LoadPreviewForCategoriesShimmer />}>
          <GetCategoryShortPreview />
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
          <div id="div-gpt-ad-1732542773495-2"></div>
          <div id="div-gpt-ad-1732542773495-3"></div>
        </div> */}
      </section>
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[28%] px-2 gap-4">
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

function LoadPreviewForCategoriesShimmer() {
  return (
    <>
      <CategoryBannerTypeOneSkeleton />
      <CategoryBannerTypeTwoSkeleton />
      <CategoryBannerTypeOneSkeleton />
      <CategoryBannerTypeTwoSkeleton />
    </>
  );
}
