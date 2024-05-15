"use client";
import React from "react";
import Logo from "./logo";
import Link from "next/link";

export default function HeaderMiddle() {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Contact Us", link: "/contact-us" },
    { text: "About Us", link: "/about-us" }
  ];

  return (
    <section className="flex flex-wrap w-full px-[20px] py-[5px] justify-between items-center gap-[15px]">
      <div className="block w-[200px] h-[50px] relative">
        <Link href="/">
          <Logo place="header"></Logo>
        </Link>
      </div>
      <div className="flex gap-x-6 !pl-4">
        {navItems.map((item, index) => (
          <h4 key={index} className="nav-item">
            <Link href={item.link}>{item.text}</Link>
          </h4>
        ))}
      </div>
    </section>
  );
}
