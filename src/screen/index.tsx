import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import Header from "@/components/Header";
import StarBackground from "@/components/StarBackground";
import OutlineButton from "@/components/OutlineButton";
import PrimaryButton from "@/components/PrimaryOutline";
import LogoSlider from "@/components/LogoSlider";
import CTAButton from "@/components/CTAButton";
import CounterSection from "@/components/CounterSection";
import TextMarquee from "@/components/TextMarquee";
import ResponsiveDesignService from "@/components/ResponsiveDesignService";
import TextMarqueeTwo from "@/components/TextMarqueeTwo";
import VideoLaptopReadySection from "@/components/VideoLaptopReadySection";
import { ArrowIcon } from "@/lib/IconSvgIcons";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigaton = useNavigate();
  return (
    <React.Fragment>
      {/* Hero Section */}
      <div className="relative lg:min-h-[1150px] bg-black overflow-hidden">
        <StarBackground />
        <Header />
        <div className="relative z-10 pt-40 lg:pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl sm:text-8xl font-semibold text-white leading-tight flex flex-col items-center relative">
                CUSTOM <br /> WEB DESIGN
                <div className="absolute bottom-5 right-[10px] hidden lg:block">
                  <ArrowIcon width={74} height={74} />
                </div>
              </h1>
            </div>
            <div className="gap-4 lg:hidden">
              <div className="flex justify-center text-center mb-6 mt-6 gap-2">
                <div className="text-white sm:text-3xl text-xl font-bold ">
                  MONTHLY UPDATES
                </div>
                <div
                  className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  EXCLUDED
                </div>
              </div>
              <p className="text-white text-md sm:text-2xl max-w-[500px] mx-auto text-center  leading-relaxed font-ubuntu">
                Avoid large upfront costs, hiring in-house, paying per change or
                surprises
              </p>

              <div className="flex items-center max-w-[600px] mx-auto mt-6">
                <div className="flex flex-col sm:max-w-[180px] max-w-[140px]">
                  <p className="text-white/80 text-sm sm:text-xl  mb-3 font-ubuntu font-light">
                    Trusted by 2000+ Business Owners Across the U.S.
                  </p>
                  <div className="flex space-x-1 mb-4 w-full">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="star-bubble-animation star-float-bubble"
                      >
                        <img
                          src={IMAGES.Star_Img}
                          alt="star"
                          className="sm:w-5 sm:h-5 w-4 h-4 star-pulse-bubble transition-transform duration-300 hover:scale-125"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row sm:gap-4 gap-2 w-full">
                  <OutlineButton
                    titleclassName={"px-1"}
                    className="!max-w-[90px] sm:!max-w-full text-[10px] sm:text-xl"
                    onClick={() => console.log("Test")}
                    title="LEARN MORE"
                  />
                  <PrimaryButton
                    className="max-w-[80px] text-[10px] h-[42px] sm:!max-w-full sm:text-xl sm:h-full"
                    onClick={() => navigaton("/contact")}
                    title="START WEB"
                  />
                </div>
              </div>
            </div>

            {/* Laptop Image */}
            <div className="relative z-10 lg:-top-[80px]">
              <motion.img
                src={IMAGES.Laptop_Img}
                alt="hero"
                className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[500px] lg:max-w-[520px] mx-auto h-auto"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Left Content */}
            <div className="absolute top-[240px] left-0 z-10 hidden lg:block">
              <div className="flex max-w-[340px] items-center gap-4">
                <div>
                  <div className="text-white text-lg sm:text-xl font-bold ">
                    MONTHLY
                    <br />
                    UPDATES
                  </div>
                  <div
                    className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    EXCLUDED
                  </div>
                </div>
                <p className="text-white text-sm  leading-relaxed font-ubuntu">
                  Avoid large upfront costs, hiring in-house, paying per change
                  or surprises
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="absolute  lg:top-[280px] right-[10px] z-10 hidden lg:block">
              <div className="flex flex-col max-w-[140px] items-center">
                <p className="text-white/80 text-sm  mb-3 font-ubuntu font-light">
                  Trusted by 2000+ Business Owners Across the U.S.
                </p>
                <div className="flex space-x-1 mb-4 w-full">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="star-bubble-animation star-float-bubble"
                    >
                      <img
                        src={IMAGES.Star_Img}
                        alt="star"
                        className="w-5 h-5 star-pulse-bubble transition-transform duration-300 hover:scale-125"
                      />
                    </div>
                  ))}
                </div>
                <OutlineButton
                  onClick={() => console.log("Test")}
                  title="LEARN MORE"
                />
                <PrimaryButton
                  onClick={() => navigaton("/contact")}
                  title="START WEB"
                />
              </div>
            </div>
          </div>
          {/* Stone Image */}
          <div className="absolute top-[680px] lg:top-[350px] right-0 left-0">
            <img
              src={IMAGES.Stone_Img1}
              alt="hero"
              className="w-full max-w-[95vw] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] mx-auto h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Logo Slider Section */}
      <LogoSlider />

      {/* Marketing Banner Section */}
      <div className="relative bg-black  overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-[750px] gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-12 relative z-10">
              {/* Main Headline */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold text-white leading-tight uppercase">
                  INCREASE REVENUE WITH MARKETING VIDEOS AND A POWERFUL WEBSITE
                </h1>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                  <span
                    className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ALWAYS UP TO DATE
                  </span>
                </div>
              </div>

              {/* Body Text */}
              <div className="flex flex-col md:flex-row gap-3   items-center sm:gap-8 max-w-[780px]">
                <p className="text-sm sm:text-md md:text-lg text-[#F9FFEB] font-medium uppercase leading-relaxed">
                  WE CREATE FAST CONVERTING PAGES & TARGETED CINEMATIC VIDEOS
                  FOR BUSINESSES LIKE YOURS.
                </p>
                <p className="text-sm sm:text-md md:text-xl text-[#F9FFEB] leading-relaxed max-w-2xl">
                  With a constant stream of fresh and original media content for
                  your business, the possibilities are endless. Get started
                  dominating the market with a subscription to my creative
                  services.
                </p>
              </div>

              {/* CTA Button */}
              <CTAButton title="GET STARTED WITH MONTHLY VIDEO" />
            </div>

            {/* Right Content - Woman with Laptop */}
            <div className="md:absolute right-[-115px] top-[50px] opacity-100 md:opacity-30 xl:opacity-100">
              <img
                src={IMAGES.Women_Img}
                alt="hero"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <CounterSection />

      {/* Text Big */}
      <div className="overflow-hidden bg-black pt-16 pb-6 space-y-8">
        <img src={IMAGES.Text_Img} alt="text" className="w-full h-full" />
        <img src={IMAGES.Text_Img} alt="text" className="w-full h-full" />
      </div>

      {/* Text Marquee Section */}
      <TextMarquee />

      {/* Your Time Back Section */}
      <div className="bg-[#F0F8E8] py-30 md:py-16 lg:py-20 relative -top-[180px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Section - YOUR TIME BACK */}
            <div className="space-y-6 md:space-y-6">
              {/* Pill Button */}
              <div className="flex justify-center ">
                <button className="bg-black px-6 py-3 rounded-full text-sm md:text-base font-semibold uppercase tracking-wide">
                  <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    YOUR TIME BACK
                  </span>
                </button>
              </div>

              {/* Main Claim */}
              <div className="text-center ">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                  10+ HRS/WEEK
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-black font-medium ">
                  RECLAIMED FROM LOST TIME AND CONTEXT SWITCHING.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-[430px] mx-auto">
                <div className="text-center ">
                  <div className="text-6xl md:text-6xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    2-3X
                  </div>
                  <div className="text-sm   font-semibold text-black uppercase">
                    LAUNCH FASTER
                  </div>
                </div>

                <div className="text-center border-l-2 border-black pl-4 md:pl-6">
                  <div className="text-xl md:text-base lg:text-xl font-semibold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent uppercase">
                    LESS
                    <br />
                    WASTED
                    <br />
                    SPEND
                  </div>
                  <div className="text-sm  font-semibold text-black uppercase">
                    LOWER OVERHEAD
                  </div>
                </div>
              </div>

              {/* Additional Text */}
              <p className="text-sm md:text-base text-black text-center ">
                Typical clients also reduce wasted costs monthly
              </p>

              {/* Bottom Pill Button */}
              <div className="flex justify-center ">
                <button className="bg-black px-6 py-3 rounded-full text-sm md:text-base font-semibold lowercase tracking-wide">
                  <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    time gains are the core value.
                  </span>
                </button>
              </div>
            </div>

            {/* Right Section - STOP WASTING TIME & MONEY */}
            <div className="space-y-6 md:space-y-8">
              {/* Main Headline */}
              <div className="lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                  STOP WASTING
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black italic">
                  <span className="font-light">TIME</span> &{" "}
                  <span className="font-light">MONEY</span>
                </h2>
              </div>

              {/* Problem Statement */}
              <div className="space-y-4">
                <p className="text-sm md:text-base lg:text-lg text-black font-semibold  lg:text-left leading-relaxed">
                  THINK ABOUT HOW MUCH YOUR TIME IS WORTH. ARE YOU REALLY SAVING
                  MONEY JUGGLING DIY PLATFORMS, FREELANCERS, AND AGENCIES?
                  PROBABLY NOT.
                </p>

                <p className="text-sm md:text-base lg:text-lg text-black  lg:text-left leading-relaxed">
                  If your time is worth $100/hour, 10 hours a week on your
                  website is $4,000/month in lost productivity. With Branded
                  Strong, a pro team handles everything for a fraction of the
                  cost.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-black text-white px-3 sm:px-6 py-3 rounded-full text-sm   uppercase tracking-wide hover:bg-gray-800 transition-colors">
                  LEARN MORE
                </button>
                <button className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B]  text-black px-3 sm:px-6 py-3 rounded-full text-sm  uppercase tracking-wide hover:bg-[#A0D62B] transition-colors">
                  FREE WEBSITE ANALYSIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Marquee Section */}
      <TextMarqueeTwo />

      {/* Responsive Design Service Section */}
      <ResponsiveDesignService />

      {/* Video Laptop and Ready To Section */}
      <VideoLaptopReadySection />
    </React.Fragment>
  );
};

export default HomePage;
