import React from 'react'
import parser from 'html-react-parser';
import { Button } from './ui/button';
import Link from 'next/link';
import { Facebook, Youtube } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const ShowArticle = ({ article }: any) => {
  return (
    <div className='article-container'>
      <div className='flex w-[100%] justify-end gap-[10px] p-[10px] pb-0'>
        <Button variant="outline" size="icon">
          <Link href="/" target="_blank" aria-label="facebook">
            <Facebook className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="/" target="_blank" aria-label="twitter">
            <FaXTwitter className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <Link href="/" target="_blank" aria-label="youtube">
            <Youtube className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
      </div>
      {article?.content && parser(article.content)}
    </div>
  )
}

export default ShowArticle

export function ArticleSkeleton() {
  return (
    <div className='article-container !px-5'>
      <div className="flex w-full flex-col gap-2">
        <div className="w-[160px] h-[35px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
        {Array(12)
          .fill(null)
          .map((item, index) => {
            return (
              <div key={`CategoryWiseTopNewsSkeleton1-${index}`} className="flex flex-col basis-[98%] gap-2 w-[100%] overflow-hidden mt-[10px]">
                <div className="w-[50%] h-[35px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
                <div className="flex flex-col gap-2 px-[12px] py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </div>
            );
          })}

        {/* <div className="flex flex-col basis-[98%] gap-2 w-[100%] overflow-hidden mt-[10px]">
                <div className="w-[50%] h-[35px] bg-[#d1d5db] animate-pulse rounded-sm"></div>
                <div className="flex flex-col gap-2 px-[12px] py-[2px]">
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                  <div className="w-full h-5 bg-[#d1d5db] animate-pulse rounded-sm"></div>
                </div>
              </div> */}
      </div>
    </div>
  );
}
