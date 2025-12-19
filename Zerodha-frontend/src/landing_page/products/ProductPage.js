import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Univers";
function ProductPage() {
  return (
    <>
      <Hero />;
      <LeftSection
        imageUrl="media/images/kite.png"
        heading="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try Demo"
        link2="Learn More"
        link3="media/images/appstoreBadge.svg"
        link4="media/images/googlePlayBadge.svg"
      />
      <RightSection
        heading="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn More"
        imageUrl="media/images/console.png"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        heading="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin"
        link2="/learnmore"
        link3="media/images/appstoreBadge.svg"
        link4="media/images/googlePlayBadge.svg"
      />
      <RightSection
        heading="Kite Connect API"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn More"
        imageUrl="media/images/kiteconnect.png"
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        heading="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        // link1="/demo"
        // link2="/learnmore"
        link3="media/images/appstoreBadge.svg"
        link4="media/images/googlePlayBadge.svg"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
