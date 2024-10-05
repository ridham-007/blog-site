"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, ThermometerSun, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Temperature from "./Temperature";
import Logo from "./logo";
import { Button } from "./ui/button";
import Timer from "./timer";
import { useState } from "react";
import { usePathname } from "next/navigation";

const SEPARATION_LENGTH = 9;

export default function HeaderBottom(props: any, req: any) {
  const pathname = usePathname();
  const highlightSelectedTab = (item: any) => {
    return `${
      pathname === `/${item?.slug}` ? "!bg-primary !text-accent" : null
    }`;
  };

  return (
    <section className="flex justify-between gap-[5px] w-[100%] h-auto px-[20px] items-center  text-own_text_black_color_primary">
      <NavigationMenu className="hidden md:flex items-center justify-start max-w-[600px] gap-[10px] md:gap-[5px]">
        <NavigationMenuList>
          {[...props.categories]
            .slice(0, SEPARATION_LENGTH)
            .map((item: any, index) => (
              <NavigationMenuItem key={`menubar-item-${index}`}>
                <Link
                  href={item?.slug}
                  legacyBehavior
                  passHref
                  key={`menubar-${index}`}
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${highlightSelectedTab(
                      item
                    )}`}
                  >
                    {item?.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex md:hidden">
        <Drawer direction="left">
          <DrawerTrigger aria-label="side-menu">
            <MenuIcon className="h-6 w-6" />
          </DrawerTrigger>
          <DrawerContent draggable={false} className="p-2">
            <div className="flex items-center justify-between w-[100%]">
              <Logo place={"header"} />
              <DrawerClose asChild>
                <Button variant="secondary" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </DrawerClose>
            </div>
            <div className="flex-col gap-[10px] md:gap-[5px]">
              {[...props.categories].map((item, index) => (
                <DrawerClose asChild key={index}>
                  <Link
                    href={item?.slug}
                    className="flex cursor-pointer justify-center items-center w-full py-1"
                  >
                    {item?.name}
                  </Link>
                </DrawerClose>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}

export function HeaderBottomSkeleton() {
  return (
    <section className="flex w-[100%] h-[45px] items-center px-3 bg-own_bg_secondary">
      <div className="hidden items-center w-[60%] h-[30px] gap-[10px] rounded-full md:flex">
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[10%] h-[25px] bg-[#d1d5db] rounded-full"></div>
      </div>
      <div className="flex w-[40%] justify-end items-center h-[30px] gap-[5px] bg-white rounded-full">
        <div className="flex w-[30%] h-[25px] bg-[#d1d5db] rounded-full"></div>
        <div className="flex w-[30%] h-[25px] bg-[#d1d5db] rounded-full"></div>
      </div>
    </section>
  );
}
