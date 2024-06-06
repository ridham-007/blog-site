"use client";
import { Button } from "@/components/ui/button";
// import { getTheme, setTheme } from "@/lib/utils";
// import { Skeleton } from "@/components/ui/skeleton"
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Moon,
  Sun,
  Twitter,
  Youtube,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function HeaderTop({ data }: any) {
  const { setTheme, theme } = useTheme();
  const currentDate = new Date();
  const router = useRouter();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <section className={`flex flex-col px-[20px] w-[100%]`}>
      <div className="hidden sm:flex flex-wrap justify-between items-center h-auto gap-[5px]">
        <div className="flex p-[10px] text-[13px] bg-primary text-accent">
          Trending
        </div>
        <Carousel
          className="flex flex-1"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {data?.map((cur: any, index: number) => (
              <CarouselItem key={index}>
                <div className="p-1 text-[14px] line-clamp-1 cursor-pointer" onClick={() => { router?.push(cur?.slug) }}>
                  {cur?.title}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center gap-[25px]">
          <div className="text-[14px]">{formattedDate}</div>
          {/* <div className="hidden md:flex border-l-[1px] border-gray-400 h-[20px]"></div>
          <div className="flex gap-[10px]">
            <Button variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="facebook">
                <Facebook className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="instagram">
                <Instagram className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="twitter">
                <FaXTwitter className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="#" target="_blank" aria-label="youtube">
                <Youtube className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export function HeaderTopSkeleton() {
  return (
    <section className="flex flex-col px-[20px] w-[100%]">
      <div className="hidden sm:flex flex-wrap justify-between items-center h-auto gap-[5px]">
        <div className="flex p-[10px] text-[13px] bg-red-500 text-white">
          Trending
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex flex-1 mr-5 h-6 font-bold bg-[#d1d5db] animate-pulse rounded-md"></div>
          <div className="hidden md:flex gap-[3px]">
            <Button variant="outline">
              <ChevronLeft className="h-43 w-4" />
            </Button>

            <Button variant="outline">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* <div className="flex items-center gap-[25px]">
          <div className="hidden md:flex border-l-[1px] border-gray-400 h-[20px]"></div>
          <div className="flex gap-[10px]">
            <Button variant="outline">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
