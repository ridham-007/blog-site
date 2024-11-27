const ADS_TO_LOAD = [
    "div-gpt-ad-1732542773495-0",
    "div-gpt-ad-1732542773495-1",
    "div-gpt-ad-1732542773495-2",
    "div-gpt-ad-1732542773495-3",
    "div-gpt-ad-1732542773495-4",
    "div-gpt-ad-1732542773495-5",
  ];
  
  const BOTTOM_AD = "div-gpt-ad-1732541990608-0";
  
  window.googletag.cmd.push(function () {
    window.googletag.cmd.push(function () {
      // show banner
      ADS_TO_LOAD.forEach((adId) => {
        window.googletag.display(adId);
      });
  
      // show bottom
      window.googletag.display(BOTTOM_AD);
    });
  });
  