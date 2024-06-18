"use client";
import { Article } from "@/lib/type-identifiers";
import React from "react";
import featureImage from "../../public/about1.jpg";
export default function DoNotMiss2(props: Article) {
  console.log(props);
  const description =
    "Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias. Lorem ipsum dolor. amet, consectetur adipisicing elit. ";
  return (
    <div className="flex flex-col sm:flex-col lg:flex-row w-full p-[20px] bg-white rounded-xl">
      {Array(3)
        .fill(null)
        ?.map((index) => {
          return (
            <div
              key={index}
              className="flex flex-col basis-[33.33%]  lg:border-r-[1px] lg:border-slate-600  p-3 gap-10 "
            >
              <div
                className="flex h-[280px]  w-full bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${featureImage.src})` }}
              >
                <div className="flex flex-col w-full justify-end items-center mt-[300px]">
                  <div className="text-[18px]  bg-white border-b-2 border-black font-semibold ">
                    10 Scandalous Love Triangle
                  </div>
                  <div className="text-[18px] bg-white border-b-2 border-black font-semibold">
                    Captivating the public
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 border-b-[1px] border-slate-600 lg:border-none">
                <div className="flex flex-row justify-center gap-5">
                  <div className="flex uppercase text-red-600 font-semibold  gap-3">
                    | scandles |
                  </div>
                  <div className="flex">robs levins</div>
                </div>
                <div className="flex text-center"> {description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
