"use client";

import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GoChevronRight } from "react-icons/go";

const sports = [
  "Will a foreigner become the head coach of Team India? Gambhir-Sehwag are also in the race, this is BCCI's plan",
  "Is 'Impact Player Rule' right or wrong in IPL? Debate broke out among veterans, know who supported",
  "'If we would have been in the playoffs...', why did Rishabh Pant give such a statement ? Pain over IPL ban",
];

const data = [
  {
    image: "/preview.jpg",
    title:
      "Delhi wins in do or die match...Lucknow stuck in playoff race due to hat-trick of defeats",
  },
  {
    image: "/preview.jpg",
    title:
      "Delhi wins in do or",
  },
];

export default function CategoryBannerTypeOne(props: any) {
  const router = useRouter();
  return (
    <Card className="w-full gap-[16px] flex flex-col p-[20px]">
      <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
        <p className="flex items-center text-[20px] text-[#1867dc] font-semibold cursor-pointer">
          Sports <GoChevronRight size={24} className="ml-3" />
        </p>
        <p className="text-[16px] font-semibold text-foreground cursor-pointer">
          See all
        </p>
      </div>
      <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
        <div className="flex basis-full md:basis-[33%] flex-shrink-0 flex-col">
          {sports.map((cur: any, index: number) => {
            return (
              <div key={index} className="flex flex-col overflow-hidden">
                <p
                  className="text-[14px] cursor-pointer text-[#444746] font-semibold text-ellipsis line-clamp-3"
                  onClick={() => {
                    router.push(cur.slug);
                  }}
                >
                  {cur}
                </p>
                <hr className="my-[10px] text-[#e3e3e3]" />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row cursor-pointer basis-full flex-0 justify-around gap-[10px]">
          {data.map((item: any, index: any) => (
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
      </div>
    </Card>
  );
}
