"use client";
import { Article } from "@/lib/type-identifiers";
import React from "react";
import featureImage from "../../public/about1.jpg";
const title = "Social Media Marketing for Franchies is Meant for Women";
const description =
  "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quia quo at nisi omnis eveniet non sapiente nesciunt fugit. Autem natus nihir...";
export default function DoNotMiss3(props: Article) {
  return (
    <div className="flex flex-col w-full p-[20px] bg-white rounded-xl">
      <div
        className="flex h-[400px] sm:h-[500px] w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${featureImage.src})` }}
      >
        <div className="flex flex-col w-full justify-end items-start mt-[300px] p-6">
          <button
            type="button"
            className="bg-red-600 text-white px-4 py-1 text-[18px]  rounded-md"
          >
            Marketing
          </button>
          <div className="text-[18px] sm:text-[38px] font-bold text-white">
            {title}
          </div>
          <div className=" text-[13px] sm:text-[16px] font-semibold text-white">{description}</div>
        </div>
      </div>
    </div>
  );
}
