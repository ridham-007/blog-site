"use client";
import { Article } from "@/lib/type-identifiers";
import ImageWithFallback from "./image-with-fallback";
import React from "react";
export default function DoNotMiss1(props: Article) {
  const description =
    "Once again, it was the bowlers who did the job for Bangladesh. Najmul Hossain Shanto's side reached the Super Eight stage of ICC T20 World Cup by seeing off the Nepal scare in their last group stage match, at Kingston on Monday, on the back of a brilliant all-round bowling effort that helped them defend 106, the lowest total in men's T20 World Cup history.";

  return (
    <div className="flex flex-col md:flex-row w-full p-[20px] gap-3  rounded-xl">
      <div className="flex basis-[50%] flex-col gap-5 ">
        <div className="flex  text-[30px] font-bold">{props?.title}</div>
        <div className="flex flex-row gap-3 text-slate-500">
          <div className="">Health</div>
          <div className="">Robot McCarthy-February 10,2023</div>
        </div>
        <div className="two-column-container"> {description}</div>
        <button className="flex w-[180px] p-[10px] rounded bg-orange-300 font-bold">
          Continue reading...
        </button>
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
