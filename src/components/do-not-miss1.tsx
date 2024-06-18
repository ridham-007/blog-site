"use client";
import { Article } from "@/lib/type-identifiers";
import ImageWithFallback from "./image-with-fallback";
import React from "react";
export default function DoNotMiss1(props: Article) {
  const description =
    "Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias. Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias. Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias. Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias. Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias. Lorem ipsum dolor amet, consectetur adipisicing elit. Ea, Lore dolor amet, consectetur adipisicing elit. Dignissimos, alias.";

  return (
    <div className="flex flex-col md:flex-row w-full p-[20px] gap-3 bg-white  rounded-xl">
      <div className="flex basis-[50%] flex-col gap-5 ">
        <div className="flex  text-[30px] font-bold">{props?.title}</div>
        <div className="flex flex-row gap-3 text-slate-500">
          <div className="">Health</div>
          <div className="">Robot McCarthy-February 10,2023</div>
        </div>
        <div className="two-column-container"> {description}</div>
        <div className="flex w-[180px] p-[10px] rounded bg-orange-300 font-bold">
          <button>Continue reading...</button>
        </div>
      </div>
      <div className="flex basis-[50%]">
        <div className="block w-full h-full relative">
          <ImageWithFallback
            alt={`CategoryWiseTopNews-alt`}
            src={props?.featureImage}
          ></ImageWithFallback>
        </div>
      </div>
    </div>
  );
}
