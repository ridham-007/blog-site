"use server";

import CategoryBannerTypeOne, { CategoryBannerTypeOneSkeleton } from "@/components/category-banner-type-one";
import CategoryBannerTypeTwo, { CategoryBannerTypeTwoSkeleton } from "@/components/category-banner-type-two";

function LoadPreviewForCategoriesShimmer(){
  return (
    <>
      <CategoryBannerTypeOneSkeleton/>
      <CategoryBannerTypeTwoSkeleton/>
      <CategoryBannerTypeOneSkeleton/>
      <CategoryBannerTypeTwoSkeleton/>
    </>
  )
}

export async function GetCategoryShortPreview() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/common/category/${process.env.NEXT_PUBLIC_SITE_ID}`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    const { categories } = data;
    if (!Array.isArray(categories)) {
      return <LoadPreviewForCategoriesShimmer />;
    }
    const arrayOfResponse: any[] = [];
    for (let i = 0; i < categories.length; i++) {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/common/${process.env.NEXT_PUBLIC_SITE_ID}/${categories[i].slug}/1/8`;
        const categoryData = await fetch(url, {
          next: { revalidate: 60 },
        });
        let {article} = await categoryData.json();
        article = [...article].sort((a: any, b: any) => {
          const diff =
          new Date(b?.updatedAt).getTime() -
          new Date(a?.updatedAt).getTime();
          return diff;
        });
        if (Array.isArray(article) && article.length >= 4) {
          arrayOfResponse.push({
            title: categories[i].name,
            slug: categories[i].slug,
            news: article,
          });  
        }
      } catch (error) {
        console.log(error);
        // do nothing - skip
      }
    }

    return arrayOfResponse.map((cur, index) => {
      if (index % 2 == 1) {
        return <CategoryBannerTypeOne key={`Banner-${index}`} {...cur}></CategoryBannerTypeOne>;
      } else {
        return <CategoryBannerTypeTwo key={`Banner-${index}`} {...cur}></CategoryBannerTypeTwo>;
      }
    });
  } catch (error) {
    console.log(error);
    return <LoadPreviewForCategoriesShimmer />;
  }
}
