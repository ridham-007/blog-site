"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GetAllCategories } from "./actions";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = [
  {
    name: "ABOUT US",
    url: "/about-us",
  },
  {
    name: "CONTACT US",
    url: "/contact-us",
  },
  {
    name: "TERMS & CONDITIONS",
    url: "/terms-conditions",
  },
  {
    name: "PRIVACY POLICY",
    url: "/privacy-policy",
  },
  {
    name: "DISCLAIMER",
    url: "/disclaimer",
  },
];

export default function Footer() {

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await GetAllCategories();
    if (response?.categories) {
      setCategories(response?.categories);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <footer className="flex flex-row flex-wrap md:flex-nowrap lg:h-[300px] gap-[20px] p-[20px] bg-foreground text-background m-3 rounded-md">
      <div className="flex flex-col gap-[20px] w-[100%] md:flex-1">
        <div className="block w-[200px] h-[50px] relative">
          <Link href="/">
            <Logo place="footer"></Logo>
          </Link>
        </div>
        <div className="flex flex-row justify-between max-w-[150px]">
          <Link href="https://www.facebook.com/people/Inshorten/61558539543020/" target="_blank" aria-label="facebook">
            <Facebook className="h-[21px] w-[21px]" />
          </Link>
          <Link href="https://www.instagram.com/inshorten_/" target="_blank" aria-label="instagram">
            <Instagram className="h-[21px] w-[21px]" />
          </Link>
          <Link href="https://twitter.com/inshorten" target="_blank" aria-label="twitter">
            <FaXTwitter className="h-[21px] w-[21px]" />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank" aria-label="youtube">
            <Youtube className="h-[21px] w-[21px]" />
          </Link>
        </div>

        <p className="flex text-[15px] gap-[5px] font-light">
          Contact us:
          <Link href="mailto:contact@inshorten.com" className="font-medium text-[15px]">contact@inshorten.com</Link>
        </p>
      </div>

      <div className="flex flex-row flex-wrap md:flex-nowrap justify-between gap-[20px] w-[100%] md:w-[45%] xl:w-[35%]">
        <div className="px-[10px]">
          <h2 className="text-[15px] md:text-[19px] lg:text-[22px] font-semibold">About Us</h2>
          <ul className="flex flex-col gap-[5px] py-[15px]">
            {footerLinks?.map((cur, index) => (
              <li key={index} className="text-[12px] md:text-[13px]">
                <Link href={cur?.url}>
                  {cur?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-[10px]">
          <h2 className="text-[15px] md:text-[19px] lg:text-[22px] font-semibold">Popular Category</h2>
          <ul className="flex flex-col gap-[5px] py-[15px]">
            {categories?.map((cur: any, index: any) => (
              <li key={index} className="text-[14px]">
                <Link href={cur?.slug}>
                  {cur?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer >
  );
}
