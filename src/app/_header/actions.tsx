"use server";

import HeaderBottom, { HeaderBottomSkeleton } from "@/components/header-bottom";
import HeaderTop, { HeaderTopSkeleton } from "@/components/header-top";

export async function GetHeaderCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/common/category/${process.env.NEXT_PUBLIC_SITE_ID}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const { categories } = data;
  if (!Array.isArray(categories)) {
    return <HeaderBottomSkeleton />;
  }
  return <HeaderBottom categories={categories} />;
}

export async function GetTrendingHeadLineNews() {
  // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/common/article/${process.env.NEXT_PUBLIC_SITE_ID}/trending`, {
    next: { revalidate: 60 },
  });
  const headLine = await res.json();
  const { trending=[] } = headLine;
  if (!Array.isArray(trending)) {
    return <HeaderTopSkeleton />;
  }
  return <HeaderTop data={trending} />;
}
