"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export interface ImageWithFallbackProps {
  alt: string;
  src: string;
}
const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  return (
    <Image
      alt={props.alt}
      src={imgSrc ?? ""}
      width={160}
      height={100}
      unoptimized={true}
      priority
      layout="responsive"
      className="flex w-full h-0 min-h-full object-fill rounded-sm"
      onError={() => {
        setImgSrc("/preview.jpg");
      }}
    />
  );
};
export default ImageWithFallback;
