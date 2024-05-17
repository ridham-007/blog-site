"use client"

import { useRouter } from "next/navigation";
import { GoChevronRight } from "react-icons/go";
import { Card } from "./ui/card";
import Image from "next/image";

const data = [
    {
        image: "/preview.jpg",
        title: "Mother's Day 2024: Learn money saving tricks from your mother, there will be no shortage of money in life."
    },
    {
        image: "/preview.jpg",
        title: "These things contain more calcium than milk, make bones as strong as iron."

    },
    {
        image: "/preview.jpg",
        title: "If you want to stay young for a long time then eat these 3 foods daily, signs of old age will go away."
    },
    {
        image: "/preview.jpg",
        title: "Are you cooking wrongly? ICMR told the right way to cook food."
    }
];

export default function CategoryData(props: any) {
    const router = useRouter();
    return (
        <Card className="flex flex-col w-full p-[20px] gap-[15px]">
            <div className="flex justify-between items-center border-b border-[#e3e3e3] pb-2">
                <p className="flex items-center text-[20px] text-[#26a79a] font-semibold cursor-pointer">Travel <GoChevronRight size={24} className="ml-3"/></p>
                <p className="text-[16px] font-semibold text-foreground cursor-pointer">See all</p>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <div className="w-full lg:w-[50%]">
                    <Image src="/about1.jpg" alt="category image" quality={80} width={250} height={100} className="w-full h-auto lg:max-h-[270px] object-cover" />
                    <div className="text-[17px] text-foreground md:text-[19px] font-bold p-[5px]">
                        5 Natural Wonders in The US to Check Out This Summer
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-[50%]">
                    {data.map((cur: any, index: number) => (
                        <div key={index}>
                            <div className="flex px-[10px] cursor-pointer text-[16px] text-foreground font-medium gap-[20px] items-center"
                                onClick={() => router.push(cur.slug)}
                            >
                                <Image src="/preview.jpg" alt="img not found" width={50} height={50} className="w-[80px] h-[60px] rounded-sm object-cover" />
                                {cur?.title}
                            </div>
                            <hr className="my-[15px] text-[#e3e3e3]" />
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}