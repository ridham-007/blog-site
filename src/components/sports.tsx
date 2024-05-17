"use client"

import { useRouter } from "next/navigation";
import ImageWithFallback from "./image-with-fallback";
import { Card } from "./ui/card";
import { GoChevronRight } from "react-icons/go";

const sports = [
    "Will a foreigner become the head coach of Team India? Gambhir-Sehwag are also in the race, this is BCCI's plan",
    "Is 'Impact Player Rule' right or wrong in IPL? Debate broke out among veterans, know who supported",
    "'If we would have been in the playoffs...', why did Rishabh Pant give such a statement ? Pain over IPL ban"
];

const data = [
    {
        image: "/preview.jpg",
        title: "Delhi wins in do or die match...Lucknow stuck in playoff race due to hat-trick of defeats"
    },
    {
        image: "/preview.jpg",
        title: "Delhi wins in do or die match...Lucknow stuck in playoff race due to hat-trick of defeats"
    }
]

export default function TopCategory(props: any) {
    const router = useRouter();
    return (
        <Card className="w-full gap-[16px] flex flex-col p-[20px]">
            <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
            <p className="flex items-center text-[20px] text-[#1867dc] font-semibold cursor-pointer">Sports <GoChevronRight size={24} className="ml-3"/></p>
                <p className="text-[16px] font-semibold text-foreground cursor-pointer">See all</p>
            </div>
            <div className="flex flex-row flex-wrap w-[100%] md:flex-nowrap gap-[20px]">
                <div className="w-[100%] lg:w-[35%]">
                    {sports.map((cur: any, index: number) => {
                        return (
                            <div key={index}>
                                <p className="text-[14px] cursor-pointer text-[#444746] font-semibold text-ellipsis line-clamp-2 lg:line-clamp-3"
                                    onClick={() => { router.push(cur.slug) }}
                                >
                                    {cur}
                                </p>
                                <hr className="my-[10px] text-[#e3e3e3]" />
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-wrap cursor-pointer w-[100%] lg:w-[66%] gap-[10px] md:flex-nowrap">
                    {data.map((item: any, index: any) => (
                        <div key={index} className="flex flex-col" onClick={() => { router.push(item.slug) }}>
                            <div className="flex basis-[80%] overflow-hidden w-full h-full">
                                <ImageWithFallback src={item.image} alt="img not found"></ImageWithFallback>
                            </div>
                            <p className="text-[16px] font-semibold text-foreground text-ellipsis line-clamp-2 lg:line-clamp-3 pt-[10px] pb-1">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}