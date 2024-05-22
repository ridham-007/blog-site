"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMiddle() {
  const pathname = usePathname();
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Contact Us", link: "/contact-us" },
    { text: "About Us", link: "/about-us" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const handleChange = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <section className="flex flex-wrap w-full px-[20px] py-[5px] justify-between items-center gap-[15px]">
      <div className="block w-[200px] h-[50px] relative">
        <Link href="/">
          <Logo place="header"></Logo>
        </Link>
      </div>
      <div className="flex gap-x-6">
        {navItems.map((item, index) => {
          return (
            <Link href={item.link} key={index} onClick={() => handleChange(index)}>
              <p
                className={`nav-item ${
                  pathname === item.link ? "selected" : ""
                }`}
              >
                {item.text}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
