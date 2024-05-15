'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Temperature: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
        });
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json&ipv=4");
        if (!ipResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const { ip } = await ipResponse.json();
  
        const latitude = location?.latitude || ip;
        const longitude = location?.longitude || '';
  
        const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
          params: { q: `${latitude},${longitude}` },
          headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_WEATHER_KEY!,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        });
  
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!!location) {
      fetchData();
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <span className="font-semibold">
        {weatherData?.current?.temp_c}
        <sup className="text-[9px] font-semibold px-[3px]">
          o<sub className="text-[15px] font-semibold">C</sub>
        </sup>
      </span>
      <div className="text-[14px]">{weatherData?.location?.name},{weatherData?.location?.region}</div>
    </div>
  );
};

export default Temperature;
