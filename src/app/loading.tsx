"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";
import { CategoryWiseTopNewsSkeleton } from "@/components/category-wise-top-news";

export default function Loading() {
  const path = usePathname();

  return (
    <div className="flex w-full flex-wrap gap-2 px-3">
      <div className="flex flex-col flex-1 basis-[100%] sm:basis-[68%] gap-4">
        <CategoryWiseTopNewsSkeleton />
      </div>
      <div className="flex flex-col flex-1 basis-[100%] sm:basis-[28%] px-2 gap-4">
        <DynamicNewsWallSkeleton label="Recent" />
        <DynamicNewsWallSkeleton label="Popular" />
      </div>
    </div>
  );
}
