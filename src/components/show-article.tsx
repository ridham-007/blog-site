'use client'
import React, { useEffect } from 'react'
import parser from 'html-react-parser';
import { Button } from './ui/button';
import Link from 'next/link';
import { Facebook, Youtube } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const ShowArticle = ({ article }: any) => {
  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (new Date(date))?.toLocaleDateString("en-US", options);
  }

  const getHtmlContent = async () => {
    const data = await fetch(
      "https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-3005749278400559&output=html&h=280&slotname=9659314583&adk=2929246239&adf=779122211&pi=t.ma~as.9659314583&w=336&abgtt=6&lmt=1719076654&format=336x280&url=https%3A%2F%2Fwww.duplichecker.com%2Fparaphrase-tool.php&wgl=1&uach=WyJtYWNPUyIsIjE0LjQuMSIsImFybSIsIiIsIjEyNi4wLjY0NzguMTE0IixudWxsLDAsbnVsbCwiNjQiLFtbIk5vdC9BKUJyYW5kIiwiOC4wLjAuMCJdLFsiQ2hyb21pdW0iLCIxMjYuMC42NDc4LjExNCJdLFsiR29vZ2xlIENocm9tZSIsIjEyNi4wLjY0NzguMTE0Il1dLDBd&dt=1719076653739&bpp=1&bdt=545&idt=560&shv=r20240618&mjsv=m202406180101&ptt=9&saldr=aa&abxe=1&cookie=ID%3Db60ff66799f49717%3AT%3D1713337385%3ART%3D1719059728%3AS%3DALNI_MZOevX3XTi3kSFAtefUYC2_1xf9WA&gpic=UID%3D00000def191ab7b9%3AT%3D1713337385%3ART%3D1719059728%3AS%3DALNI_MZXWpwhc88HTYjGGac46St6OiL41w&eo_id_str=ID%3D2a87ba9bb3288d8b%3AT%3D1713337385%3ART%3D1719059728%3AS%3DAA-AfjaDVoYSWbaPqvtIfdlBRnlh&prev_fmts=0x0&nras=1&correlator=1701162032683&frm=20&pv=1&ga_vid=1017028011.1713337377&ga_sid=1719076654&ga_hid=2069564821&ga_fc=1&ga_cid=40554096.1713337378&u_tz=330&u_his=3&u_h=900&u_w=1440&u_ah=782&u_aw=1440&u_cd=30&u_sd=2&dmc=8&adx=552&ady=177&biw=1440&bih=661&scr_x=0&scr_y=0&eid=44759837%2C31084688%2C42531706%2C44798934%2C95334508%2C95334528%2C95334571%2C95335897%2C95335291%2C31078663%2C31078665%2C31078668%2C31078670&oid=2&pvsid=1466620619033917&tmod=623994747&uas=0&nvt=1&fc=1920&brdim=0%2C25%2C0%2C25%2C1440%2C25%2C1440%2C782%2C1440%2C661&vis=1&rsz=%7C%7CeE%7C&abl=CS&pfx=0&fu=0&bc=31&bz=1&td=1&tdf=2&psd=W251bGwsbnVsbCxudWxsLDNd&nt=1&ifi=2&uci=a!2&fsb=1&dtd=563"
    );
    console.log(data);
  };

  useEffect(()=>{
    document.querySelectorAll('div').forEach(function(element) {
      if ((element?.textContent?? "").trim().slice(-1) ==='?') {
        element.style.fontWeight = '700'; // Example action
      }
    });
    document.querySelectorAll('p').forEach(function(element) {
      if ((element?.textContent?? "").trim().slice(-1) ==='?') {
        element.style.fontWeight = '700'; // Example action
      }
    });
    document.querySelectorAll('b').forEach(function(element) {
      if ((element?.textContent?? "").trim().slice(-1) ==='?') {
        element.style.fontWeight = '700'; // Example action
      }
    });
    getHtmlContent();
  },[])
  return (
    <div className="article-container">
      <div className="flex flex-col pb-2 mb-2 border-b border-[#e3e3e3]">
        <h2 className="font-semibold py-1">{article?.title}</h2>
        <div className="flex w-[100%] justify-between gap-[10px] pb-0 items-center">
          <div className="flex text-sm font-normal dark:text-[#9B9B9B] news gap-2 whitespace-nowrap py-1 text-[#444746]">
            {formatDate(article?.updatedAt)}
          </div>
          <div className="flex gap-2">
            {/* <Button variant="outline" size="icon">
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
            </Button> */}
          </div>
        </div>
      </div>
      {article?.content && parser(article.content)}
    </div>
  );
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
