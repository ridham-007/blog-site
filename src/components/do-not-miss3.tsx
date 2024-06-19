"use client";
import { Article } from "@/lib/type-identifiers";
import React from "react";
import featureImage from "../../public/about1.jpg";
const title = "Social Media Marketing for Franchies is Meant for Women";
const description =
  "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quia quo at nisi omnis eveniet non sapiente nesciunt fugit. Autem natus nihir...";
export default function DoNotMiss3(props: Article) {
  return (
    <div className="flex px-3">
      <div
        className="flex flex-col w-full h-[400px] sm:h-[500px] rounded-xl bg-cover bg-center bg-no-repeat px-4 py-4"
        style={{ backgroundImage: `url(${featureImage.src})` }}
      >
        <div className="flex flex-1"></div>
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-1 text-[18px]  rounded-md w-fit"
        >
          Marketing
        </button>
        <div className="py-[5px] text-[18px] sm:text-[22px] font-bold text-white line-clamp-2 text-ellipsis overflow-hidden">
          {title}
        </div>
        <div className="py-[5px] w-[100%] line-clamp-2 text-ellipsis overflow-hidden text-white">
          {description}
        </div>
      </div>
    </div>
  );
}
