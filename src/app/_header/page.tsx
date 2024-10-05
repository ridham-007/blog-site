import HeaderMiddle from "@/components/header-middle";
import { HeaderTopSkeleton } from "@/components/header-top";
import { Suspense } from "react";
import { HeaderBottomSkeleton } from "@/components/header-bottom";
import { GetHeaderCategories, GetTrendingHeadLineNews } from "./actions";

export default async function Header() {
  return (
    <header className="flex flex-col pb-[20px]">
      <Suspense fallback={<HeaderTopSkeleton />}>
        <GetTrendingHeadLineNews />
      </Suspense>
      <div className="header rounded-lg mt-[10px] shadow-md py-[10px] shadow-slate-200 bg-own_bg_secondary mx-3">
        <HeaderMiddle />
        <Suspense fallback={<HeaderBottomSkeleton />}>
          <GetHeaderCategories />
        </Suspense>
      </div>
    </header>
  );
}
