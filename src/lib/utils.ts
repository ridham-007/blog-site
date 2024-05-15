import { type ClassValue, clsx } from "clsx"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"
import Cookie from "js-cookie";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
