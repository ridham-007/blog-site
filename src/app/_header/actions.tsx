"use server";

import HeaderBottom, { HeaderBottomSkeleton } from "@/components/header-bottom";
import HeaderTop, { HeaderTopSkeleton } from "@/components/header-top";

export async function GetHeaderCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/all`, {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/headline`, {
    next: { revalidate: 60 },
  });
  const headLine = await res.json();
  const { data } = headLine;
  if (!Array.isArray(data)) {
    return <HeaderTopSkeleton />;
  }
  return <HeaderTop data={data} />;
}
