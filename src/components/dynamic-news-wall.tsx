'use client'
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import ImageWithFallback from "./image-with-fallback";
import { useRouter } from "next/navigation";


export interface NewsWallProps {
  title: string
  news: {
    title: string;
    image: string;
    createdAt?: string;
    slug: string;
  }[];
}
export default function DynamicNewsWall(props: NewsWallProps) {
  const router = useRouter();
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (new Date(date))?.toLocaleDateString("en-US", options);
  }

  return (
    <Card className="flex flex-col h-auto p-5 rounded-lg border-0 border-t-[5px] border-[var(--primary)] news">
      <div className="text-[20px] font-bold md:text-[22px]">{props.title}</div>
      {props.news?.map((cur: any, index) => {
        return (
          <div className="flex flex-col" key={`${props.title}-${index}`} onClick={() => { router.push(cur.slug) }}>
            <hr className="py-2"></hr>
            <div
              key={`${cur.title}-${index}`}
              className="flex flex-row items-start cursor-pointer gap-[10px]"
            >
              <div className="flex flex-col basis-[80%] min-h-[40px] gap-[5px] overflow-hidden">
                <div className="flex flex-grow font-medium basis-full flex-col">
                  <p className="text-[14px] md:text-[14px] text-ellipsis line-clamp-2">
                    {cur?.title}
                  </p>
                </div>
              </div>
              <div className="flex basis-[20%] overflow-hidden w-full h-full">
                <ImageWithFallback alt={`article-placeholder-${index}`} src={cur?.image}></ImageWithFallback>
              </div>
            </div>
            <div className="flex text-sm font-normal gap-2 whitespace-nowrap py-1">
              {formatDate(cur?.createdAt)}
              <Link href={'#'} className="font-medium">Read</Link>
            </div>
          </div>
        );
      })}
    </Card>
  );
}

export function DynamicNewsWallSkeleton(props: { label: string }) {
  return (
    <Card className="flex flex-col h-auto p-5 rounded-lg border-0 border-t-[5px] border-[var(--primary)]">
      <div className="h-[30px] w-full md:h-[33px] items-center">
        <div className="flex h-6 flex-1 bg-[#d1d5db] rounded-full animate-pulse"></div>
      </div>
      {Array(5)
        .fill(null)
        ?.map((index) => {
          return (
            <div className="flex flex-col" key={`${props.label}-${index}`}>
              <hr className="py-2"></hr>
              <div
                key={`${index}-shimmer`}
                className="flex flex-row gap-[10px]"
              >
                <div className="flex flex-col flex-1 basis-[80%] justify-around">
                  <p className="h-[14px] bg-[#d1d5db] rounded-full animate-pulse"></p>
                  <p className="h-[14px] bg-[#d1d5db] rounded-full animate-pulse"></p>
                </div>
                <div className="flex basis-[20%] overflow-hidden w-full h-full">
                  <ImageWithFallback alt={`article-placeholder-${index}`} src={'/preview.jpg'}></ImageWithFallback>
                </div>
              </div>
              <div className="flex h-7 py-1">
                <p className="flex flex-1 h-4 max-w-[50%] bg-[#d1d5db] rounded-full animate-pulse"></p>
              </div>
            </div>
          );
        })}
    </Card>
  );
}
