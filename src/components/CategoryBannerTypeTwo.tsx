"use client";

import { useRouter } from "next/navigation";
import { GoChevronRight } from "react-icons/go";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import ImageWithFallback from "./image-with-fallback";

const data = [
  {
    image: "/preview.jpg",
    title:
      "These things contain more calcium than milk, make bones as strong as iron.",
  },
  {
    image: "/preview.jpg",
    title:
      "If you want to stay young for a long time then eat these 3 foods daily, signs of old age will go away.If you want to stay young for a long time then eat these 3 foods daily, signs of old age will go away.",
  },
  {
    image: "/preview.jpg",
    title: "Are you cooking wrongly? ICMR told the right way to cook food.",
  },
  {
    image: "/preview.jpg",
    title: "Are you cooking wrongly? ICMR told the right way to cook food.",
  },
];

export default function CategoryBannerTypeTwo(props: any) {
  const router = useRouter();
  return (
    <Card className="flex flex-col w-full p-[20px] gap-[15px]">
      <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
        <p className="flex items-center text-[20px] text-[#26a79a] font-semibold cursor-pointer">
          Travel <GoChevronRight size={24} className="ml-3" />
        </p>
        <p className="text-[16px] font-semibold text-foreground cursor-pointer">
          See all
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
        <div className="flex basis-full md:basis-[45%] flex-shrink-0 flex-col">
          {[data[0]].map((item: any, index: any) => (
            <Card
              key={`CategoryWiseTopNews-${index}`}
              className="flex flex-col flex-1 cursor-pointer rounded-sm"
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
              <div className="flex text-[16px] text-foreground font-medium overflow-hidden px-2 pb-2">
                <CardDescription className="line-clamp-2">
                  {item?.title}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col basis-full flex-0 gap-[10px]">
          {data.map((cur: any, index: number) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-2 overflow-hidden">
                <Image
                  src="/preview.jpg"
                  alt="img not found"
                  width={50}
                  height={50}
                  className="w-[80px] h-[60px] rounded-sm object-cover"
                />
                <div className="flex flex-col overflow-hidden">
                  <p className="text-[14px] text-ellipsis line-clamp-3">
                    {cur?.title}
                  </p>
                </div>
              </div>
              <hr className="my-[10px] text-[#e3e3e3]" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function CategoryBannerTypeTwoSkeleton() {
  return (
    <Card className="flex flex-col w-full p-[20px] gap-[15px]">
      <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
        <div className="flex items-center">
          <div className="w-[80px] h-[30px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
          <GoChevronRight size={24} className="ml-3" />
        </div>
        <p className="text-[16px] font-semibold text-foreground cursor-pointer">
          See all
        </p>
      </div>

      <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
        <div className="flex basis-full md:basis-[45%] flex-shrink-0 flex-col">
          {Array(1)
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
                          src={'/preview.jpg'}
                        ></ImageWithFallback>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <div className="flex flex-col basis-[10%] px-2 py-2 gap-1">
                    <div className="w-full h-4 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                    <div className="w-full h-4 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  </div>
                </Card>
              )
            })}
        </div>
        <div className="flex flex-col basis-full flex-0 gap-[10px]">
          {Array(4)
            .fill(null)
            ?.map((index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex gap-2 overflow-hidden">
                    <Image
                      src="/preview.jpg"
                      alt="img not found"
                      width={50}
                      height={50}
                      className="w-[80px] h-[60px] rounded-sm object-cover"
                    />
                    <div className="flex flex-col gap-1 flex-1 w-full">
                      <div className="h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                      <div className="h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                      <div className="h-[17px] rounded-sm bg-[#d1d5db] animate-pulse"></div>
                    </div>
                  </div>
                  <hr className="my-[10px] text-[#e3e3e3]" />
                </div>
              )
            })}
        </div>
      </div>
    </Card>
  )
}