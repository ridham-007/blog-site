import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Suspense } from "react";
import { GetPopularNews, GetRecentNews } from "./[...slug]/actions";
import { DynamicNewsWallSkeleton } from "@/components/dynamic-news-wall";

export default function Home() {
  return (
    <main className="flex w-full flex-wrap gap-2 px-3">
      <section className="flex flex-col flex-1 basis-[100%] sm:basis-[68%]">
        <Button>Click Me</Button>
      </section>
      <section className="flex flex-col gap-2 flex-1 basis-[100%] sm:basis-[28%] px-2">
        <Suspense fallback={<DynamicNewsWallSkeleton label="Recent" />}>
          <GetRecentNews />
        </Suspense>
        <Suspense fallback={<DynamicNewsWallSkeleton label="Popular" />}>
          <GetPopularNews />
        </Suspense>
      </section>
    </main>
  );
}
