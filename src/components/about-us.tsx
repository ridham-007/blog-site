import Image from "next/image";
import { Card } from "./ui/card";

export default function AboutUs() {
  const data = [
    "Welcome to JustReadInside, the reliable place for latest news and articles on various topics. We aim at giving readers content that is both engaging and informative touching on everything from what is happening today, via editorials down to opinions from experts.",
    "JustReadInside utilizes innovative algorithms and procedures for data processing meant for the automatic production of an array of news articles meant for catering for the diverse information needs of its consumers. It is a platform assembled to collect, analyze and present it in a manner that is appealing to the audience.",
    "Our whole staff of diligent professionals is dedicated to highest precision and excellence in our way of producing stuffs. We realize how it is significant to convey dependable and important data hence in each paper authored we endeavor to observe this.",
    "Our readers are recipients of important knowledge that we enthusiastically acquire using technology for analysis. To meet the needs of our audience, we plan to continually improve and upgrade our content creation potential.",
    "We are grateful that you have chosen JustReadInside as your main source of news and information. Your backing matters to us, and we promise to keep providing quality material that caters for your preferences.",
  ]

  // const ourMission = [
  //   "The mission is to help the influential and the aspirational make smart decisions to climb the wealth and career ladder.",
  //   "We deliver an unprecedented number of multimedia stories, exclusive videos and real-time in-depth data and analysis to keep you smart, sharp and get ahead. We deliver them in platforms and formats that are user friendly and value the time you spend with us.",
  // ];
  return (
    <Card className="flex flex-col p-[20px] dark:bg-[#202028] dark:text-[#cecdcd] bg-own_bg_secondary text-own_text_primary">
      <h1 className="flex justify-center text-[26px] font-bold p-[15px]">About Us</h1>
      <div className="block w-[100%] h-[200px] md:h-[450px] relative">
        <Image
          alt="About us Banner"
          quality={100}
          priority
          unoptimized
          fill
          loading="eager"
          className="flex w-[100%] h-0 min-h-full rounded-sm"
          src={"/about1.jpg"}
        ></Image>
      </div>

      <div className="flex flex-col py-[20px]">
        {data?.map((item, index) => (
          <p className="py-[10px] text-justify" key={`about-data-${index}`}>
            {item}
          </p>
        ))}
      </div>

      {/* <h2 className="text-[22px] font-medium pl-[5px] border-l-[3px] border-black">
        Our Mission
      </h2>
      <div className="flex flex-col py-[20px]">
        {ourMission?.map((item, index) => (
          <p className="py-[10px] text-justify" key={`our-mission-${index}`}>
            {item}
          </p>
        ))}
      </div> */}
    </Card>
  );
}
