"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";

export default function CategoryWiseTopNews({articles}:any) {
const router = useRouter();
  const handleArticleOpen = (article:any) => {
    router.push(`/${article?.slug}`)
  }
  return (
    <div className="flex w-full flex-wrap justify-start gap-2 h-fit">
      {articles
        .map((item:any, index:any) => {  
          return (
            <Card
              key={`CategoryWiseTopNews-${index}`}
              className="flex flex-col flex-1 lg:basis-[32%] sm:basis-[49%] basis-[100%] lg:max-w-[32%] sm:max-w-[49%] cursor-pointer p-1 gap-2 rounded-sm"
              onClick={() => handleArticleOpen(item)}
            >
              <CardHeader className="flex flex-col basis-[90%] flex-grow-0 px-2 py-3">
                <CardTitle className="flex basis-[70%] flex-grow-0 flex-col">
                  <div className="block w-full h-full relative">
                    <ImageWithFallback
                      alt={`CategoryWiseTopNews-${index}-alt`}
                      src={item?.image}
                    ></ImageWithFallback>
                  </div>
                </CardTitle>
                <CardDescription className="flex w-[100%] text-ellipsis line-clamp-3 text-foreground]">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardDescription className="flex px-2 line-clamp-2">
                {item?.title}
              </CardDescription>
            </Card>
          );
        })}
    </div>
  );
}

export function CategoryWiseTopNewsSkeleton() {
  return (
    <div className="flex w-full flex-wrap justify-start gap-2">
      {Array(10)
        .fill(null)
        .map((item, index) => {
          return (
            <Card
              key={`CategoryWiseTopNewsSkeleton-${index}`}
              className="flex flex-col lg:basis-[32%] sm:basis-[49%] basis-[100%] p-1 gap-2 rounded-sm"
            >
              <CardHeader className="flex flex-col basis-[90%] px-2 py-3">
                <CardTitle className="flex basis-[70%] flex-col">
                  <div className="block w-full h-full relative">
                    <ImageWithFallback
                      alt={`CategoryWiseTopNews-${index}-alt`}
                      src={item?.image}
                    ></ImageWithFallback>
                  </div>
                </CardTitle>
                <div className="flex flex-col gap-2 basis-[30%] w-[100%] overflow-hidden py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </CardHeader>
              <div className="flex basis-[10%] px-2">
                <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
              </div>
            </Card>
          );
        })}
    </div>
  );
}
