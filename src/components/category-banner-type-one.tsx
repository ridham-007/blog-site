"use client";

import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

export interface CategoryBannerTypeOneProps {
  title: string;
  slug: string;
  news: {
    title: string;
    featureImage: string;
    createdAt?: string;
    slug: string;
  }[];
}
export default function CategoryBannerTypeOne(
  props: CategoryBannerTypeOneProps
) {
  const router = useRouter();
  return (
    <div className="w-full gap-[15px] flex flex-col p-[20px] !bg-own_bg_secondary !text-own_text_primary">
      <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
        <Link
          href={`/${props.slug ?? ""}`}
          className="flex items-center text-[20px] text-own_blue_color_primary font-semibold cursor-pointer"
        >
          {props.title.trim()} <GoChevronRight size={24} className="ml-3" />
        </Link>
        <Link
          href={`/${props.slug ?? ""}`}
          className="text-[16px] font-semibold text-own_text_gray_primary cursor-pointer"
        >
          See all
        </Link>
      </div>
      <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
        <div className="flex basis-full md:basis-[33%] flex-shrink-0 flex-col">
          {props.news.slice(0, 3).map((cur: any, index: number) => {
            return (
              <Link
                href={`/${cur.slug}`}
                key={index}
                className="flex flex-col overflow-hidden"
              >
                <p
                  className="text-[14px] cursor-pointer text-own_text_primary text-ellipsis line-clamp-3"
                  onClick={() => {
                    router.push(cur.slug);
                  }}
                >
                  {cur.title}
                </p>
                <hr className="my-[10px] text-[#e3e3e3]" />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row cursor-pointer basis-full flex-0 justify-around gap-[10px]">
          {props.news.slice(3, 5).map((item: any, index: any) => (
            <div
              key={`CategoryWiseTopNews-${index}`}
              className="flex flex-col flex-1 cursor-pointer rounded-sm"
              onClick={() => router.push(`/${item.slug}`)}
            >
              <CardHeader className="flex flex-col basis-[90%] flex-1 px-2 py-3">
                <CardTitle className="flex basis-[70%] flex-1 flex-col">
                  <div className="block w-full h-full relative">
                    <ImageWithFallback
                      alt={`CategoryWiseTopNews-${index}-alt`}
                      src={item?.featureImage}
                    ></ImageWithFallback>
                  </div>
                </CardTitle>
              </CardHeader>
              <div className="flex text-[16px] text-own_text_primary font-medium overflow-hidden px-2 pb-2">
                <CardDescription className="line-clamp-2">
                  {item?.title}
                </CardDescription>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CategoryBannerTypeOneSkeleton() {
  return (
    <div className="w-full gap-[16px] flex flex-col p-[20px] bg-own_bg_secondary">
      <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
        <div className="flex items-center">
          <div className="w-[70px] h-[30px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
          <GoChevronRight size={24} className="ml-3" />
        </div>
        <p className="text-[16px] font-semibold text-own_text_gray_primary cursor-pointer">
          See all
        </p>
      </div>

      <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
        <div className="flex basis-full md:basis-[33%] flex-shrink-0 flex-col">
          {Array(3)
            .fill(null)
            ?.map((index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col gap-[5px] w-full">
                    <div className="md:w-[300px] h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                    <div className="md:w-[300px] h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                    <div className="md:w-[300px] h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                  </div>
                  <hr className="my-[10px] text-[#e3e3e3]" />
                </div>
              );
            })}
        </div>
        <div className="flex flex-col sm:flex-row cursor-pointer basis-full flex-0 justify-around gap-[10px]">
          {Array(2)
            .fill(null)
            ?.map((index) => {
              return (
                <Card
                  key={`CategoryWiseTopNewsSkeleton-${index}`}
                  className="flex flex-col flex-1 cursor-pointer rounded-sm"
                >
                  <CardHeader className="flex flex-col basis-[90%] px-2 py-2">
                    <CardTitle className="flex basis-[70%] flex-col">
                      <div className="block w-full h-full relative">
                        <ImageWithFallback
                          alt={`CategoryWiseTopNews-${index}-alt`}
                          src={"/preview.jpg"}
                        ></ImageWithFallback>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col basis-[10%] px-2 py-2 gap-1">
                    <div className="w-full h-4 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                    <div className="w-full h-4 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
