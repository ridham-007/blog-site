'use client';
import Cookies from "js-cookie";

const callApiOnce = async () => {
  if (Cookies.get("user-set")) {
    return;
  }

  try {
    // Fetch user's IP and country
    const response = await fetch("http://ip-api.com/json");
    const data = await response.json();
    const { query, country } = data;

    if (!query || !country) {
      return;
    }

    // Get cookies from the document (you can add logic to filter required cookies)
    const allCookies = document.cookie
      .split("; ")
      .reduce((acc: any, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      }, {});

    // Prepare API payload
    const payload = {
      ip: query,
      origin: window.location.origin, // Use the site URL as origin
      usageCount: 1, // Set count as 1
      cookies: allCookies,
      country,
    };

    // Hit the API
    const apiResponse = await fetch(
      "https://ip-checker-pvaf.onrender.com/analytics",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!apiResponse.ok) {
      return;
    }

    Cookies.set("user-set", "true", { expires: 7 });
  } catch (error) {
    console.error("Error in API call process:", error);
  }
};

export default callApiOnce;