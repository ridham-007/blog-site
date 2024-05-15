'use client'
import { useEffect, useState } from "react";
interface LocationData {
  location: string;
  time: string;
}


export default function Timer() {
    const [currentTime, setCurrentTime] = useState(Date.now());


    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(Date.now());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []); 
  
    const formatTime = (timestamp:any) => {
      const dateObj = new Date(timestamp);
      const hours = dateObj.getHours();
      const ampm = hours >= 12 ? "PM" : "AM";
      const hour = (hours % 12 || 12).toString().padStart(2, "0");
      const minutes = dateObj.getMinutes().toString().padStart(2, "0");
      const seconds = dateObj.getSeconds().toString().padStart(2, "0");
      return [hour, ':', minutes, ':', seconds, ' ', ampm];
    };
  
    const timeValues = formatTime(currentTime);
  
  return (
    
        <div className="flex justify-center w-32 items-center border-[1px] text-[14px] bg-black border-gray-100 rounded-md gap-1 py-3">
       {timeValues.map((value, index) => (
          <div
            key={index}
            className="text-white"
          >
            {value}
          </div>
        ))}
      </div>

       
  );
}

