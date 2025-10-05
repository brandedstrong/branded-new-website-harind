import React, { useState, useRef } from "react";
import { IMAGES } from "@/constants/images";
import VideoLaptopReadySection from "@/components/VideoLaptopReadySection";
import Header from "@/components/Header";
import TextMarquee from "@/components/TextMarquee";
import { DamagedIcon, IconOne, SlackIcon } from "@/lib/IconSvgIcons";
import CTAButton from "@/components/CTAButton";
import TextMarqueeTwo from "@/components/TextMarqueeTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WebDesign = () => {
  const [expandedSection, setExpandedSection] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? -1 : index);
  };

  return (
    <React.Fragment>
      <Header />
      {/* Cart Abandonment Hero Section */}
      <div className="bg-black min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl mx-auto font-bold text-white leading-tight uppercase">
              <span
                className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ever judge a business <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>by
              </span>
              <span className="font-light"> their Website?</span>
            </h1>
          </div>

          {/* Highlighted Text */}
          <div className="relative inline-block mx-2 sm:mx-4">
            {/* Top banner - green gradient, positioned left and up */}
            <div className="absolute top-1 sm:top-2 -left-2 sm:-left-4 bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-white px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform rotate-3 z-10">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal uppercase tracking-wide">
                Your Clients Have Too
              </span>
            </div>
            {/* Middle banner - white, centered */}
            <div className="relative bg-white top-3 sm:top-4 md:top-[20px] text-black px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform -rotate-1 z-20">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal uppercase tracking-wide">
                YOUR CUSTOMERS <span className="font-bold">HAVE TOO</span>
              </span>
            </div>
            {/* Bottom banner - dark, positioned right and down */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-[27px] -right-1 sm:-right-2 md:-right-0 bg-[#1B1B1B] px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full transform rotate-6 z-10">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal uppercase tracking-wide bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                YOUR CUSTOMERS HAVE TOO
              </span>
            </div>
          </div>

          {/* Subheading */}
          <div className="space-y-2 pt-6 sm:pt-8">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
              We keep it simple. One flat
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white">
              monthly price = no limits.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <button className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl cursor-pointer transition-colors duration-300 uppercase tracking-wide w-full sm:w-auto">
                UPGRADE YOUR STORE
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 lg:pt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="text-white text-center">
                <p className="text-xs sm:text-sm font-medium">
                  Trusted by 200+
                </p>
                <p className="text-xs sm:text-sm font-medium">Shopify Owners</p>
                <p className="text-xs sm:text-sm font-medium">
                  Across the U.S.
                </p>
              </div>

              {/* 5 Star Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={IMAGES.Star_Img}
                    alt="star"
                    className="w-4 h-4 sm:w-5 sm:h-5 star-pulse-bubble transition-transform duration-300 hover:scale-125"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[780px]">
        <img
          src={IMAGES.Shopify_Img}
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />

        {/* Text Content Overlay */}
        <div className="relative container mx-auto z-10 flex flex-col justify-center items-center lg:items-end px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 h-full w-full py-8 sm:py-12 md:py-16">
          <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left max-w-4xl lg:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Your First Impression is Digital.
              <span className="bg-gradient-to-r ml-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                Make it Count.
              </span>
            </h1>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Professional Web Design that Builds Trust and Drives Growth.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                In today's world, your website is your digital front door.
                Before a potential client calls, emails, or visits, they will
                look you up online. A dated, confusing, or broken website
                doesn't just look bad—it instantly erodes credibility and sends
                potential customers straight to your competitors.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We create strategic, user-focused websites that do more than
                just look good. We build digital experiences designed to tell
                your brand's story, establish you as an authority in your field,
                and guide visitors toward taking action—whether that's booking a
                call or filling out a form
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                No generic templates or quick fixes. Just a powerful,
                custom-built website that serves as a true asset for your
                business.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <button className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 uppercase tracking-wide w-full sm:w-auto">
                MAKE AN IMPRESSION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Banner Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 relative z-10 order-2 lg:order-1">
              {/* Main Headline */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight uppercase">
                  A great website isn't just a URL. It's the central hub for
                  your entire brand.
                </h1>
              </div>

              {/* Body Text */}
              <div className="flex flex-col gap-4 sm:gap-6 max-w-full">
                <p className="text-sm sm:text-base md:text-lg text-[#F9FFEB] font-medium uppercase leading-relaxed">
                  You work hard on social media, run ads, and build email lists
                  to attract the perfect audience for your business.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#F9FFEB] leading-relaxed">
                  But if every one of those clicks leads them to a confusing,
                  slow, or untrustworthy website, that entire investment is
                  wasted. Your website's job is to capture that potential and
                  convert it into tangible results.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <CTAButton title="BUILD A BETTER HUB" />
              </div>
            </div>

            {/* Right Content - Woman with Laptop */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative opacity-100 lg:opacity-90 xl:opacity-100">
                <img
                  src={IMAGES.Laptop_Rock_Img}
                  alt="hero"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Types & Services Section */}
      <div className="relative overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 w-full text-left">
              If you're spending money on marketing,{" "}
              <span
                className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                a bad website is killing your ROI.
              </span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Sales & Marketing */}
            <div className="space-y-4 sm:space-y-6 text-center flex flex-col items-center justify-center p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <IconOne />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                POOR AD
                <br />
                CONVERSION
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed max-w-sm">
                You can spend a fortune driving targeted traffic to your site,
                but if it's slow, confusing, or untrustworthy, those expensive
                clicks result in zero leads. Your website's primary job is to
                capitalize on that traffic, not waste it.
              </p>
            </div>

            {/* Professional & Corporate */}
            <div className="space-y-4 sm:space-y-6 text-center flex flex-col items-center justify-center p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <SlackIcon />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                LOST LEADS &<br /> INQUIRIES
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed max-w-sm">
                Every visitor is a potential customer. But a site with broken
                forms, a hidden phone number, or no clear call-to-action is a
                digital dead end. You're not just missing out on website
                traffic; you're actively losing potential clients.
              </p>
            </div>

            {/* Specialized Services */}
            <div className="space-y-4 sm:space-y-6 text-center flex flex-col items-center justify-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-3 sm:mb-4">
                <DamagedIcon />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                DAMAGED BRAND CREDIBILITY
              </h3>
              <p className="text-sm sm:text-base text-white leading-relaxed max-w-sm">
                An outdated or unprofessional website signals that your business
                may not be reliable. The long-term cost of this damaged
                credibility—lost partnerships, fewer referrals, and lower
                perceived value—is often the most expensive problem of all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Service Restaurants Slide Section */}
      <div className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-4 w-full text-left">
              Design{" "}
              <span className="font-bold">
                That
                <br />
                Delivers Results
              </span>
            </h2>
          </div>

          {/* Subheader */}
          <div className="mb-8 sm:mb-12 lg:mb-16 w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-4 max-w-4xl mx-auto text-center">
              We combine{" "}
              <span
                className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                beautiful design
              </span>{" "}
              with{" "}
              <span
                className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                strategic thinking
              </span>{" "}
              to create websites that your customers{" "}
              <span
                className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                will love to use.
              </span>
            </h2>
          </div>

          {/* Slide Container */}
          <div className="pb-4">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              arrows={false}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {/* Laptop Mockups */}
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="px-3">
                  <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-6">
                    {/* Laptop Mockup */}
                    <div className="relative">
                      <img
                        src={IMAGES.Laptop_Mockup_Img}
                        alt="Laptop mockup"
                        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto mx-auto"
                      />
                      {/* Service Badges */}
                      <div
                        className="flex flex-wrap justify-center gap-1 sm:gap-2 absolute left-1/2 -translate-x-1/2 w-full px-2"
                        style={{ bottom: 30 }}
                      >
                        <span className="bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px] text-xs font-medium">
                          Re-Design
                        </span>
                        <span className="bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px] text-xs font-medium">
                          UI Design
                        </span>
                        <span className="bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-[4px] text-xs font-medium">
                          Frontend Dev
                        </span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
                        Quick Service
                      </h3>
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
                        Restaurants
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Navigation Arrows - Positioned Below and Right */}
          <div className="flex justify-center sm:justify-end items-center gap-4 mt-8 relative z-20">
            {/* Left Arrow */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 sm:w-12 h-10 sm:h-12 cursor-pointer bg-transparent hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 sm:w-12 h-10 sm:h-12 cursor-pointer bg-transparent hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Text Marquee Section */}
      <TextMarquee
        className="mt-20 -mb-[180px]"
        marqueeText="Pro team on demand"
        upperBandText="No design debt"
      />
      {/* Process Flow Section - A Clear Path to a Powerful Website */}
      <div className="bg-[#F9FFEB] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Main Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              A Clear Path to a
              <br />
              Powerful Website
            </h2>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Step 01 - Discovery & Strategy */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              {/* Icon and Step Number */}
              <img
                src={IMAGES.Path_SVG1}
                alt="Path"
                className="w-10 h-10 sm:w-11 sm:h-11"
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black">
                01
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-black leading-tight mb-4">
                Discovery &<br />
                Strategy
              </h4>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                We start by diving deep into your business, your audience, and
                your goals. This is the strategic foundation for the entire
                project, ensuring we build a website that truly works for you.
              </p>
            </div>

            {/* Step 02 - Design & Prototyping */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              {/* Icon and Step Number */}
              <img
                src={IMAGES.Path_SVG2}
                alt="Path"
                className="w-10 h-10 sm:w-11 sm:h-11"
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black">
                02
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-black leading-tight mb-4">
                Design &<br />
                Prototyping
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Next, our design team translates the strategy into a beautiful
                and intuitive user interface. We create an interactive prototype
                so you can see and feel how your site will work before we write
                a single line of code.
              </p>
            </div>

            {/* Step 03 - Development & Content */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              {/* Icon and Step Number */}
              <img
                src={IMAGES.Path_SVG3}
                alt="Path"
                className="w-10 h-10 sm:w-11 sm:h-11"
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black">
                03
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-black leading-tight mb-4">
                Development
                <br />& Content
              </h4>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Once the design is approved, our developers get to work building
                a fast, secure, and pixel-perfect website. During this phase,
                we'll also integrate your content, ensuring your message is as
                powerful as the design.
              </p>
            </div>

            {/* Step 04 - Launch & Handover */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              {/* Icon and Step Number */}
              <img
                src={IMAGES.Path_SVG4}
                alt="Path"
                className="w-10 h-10 sm:w-11 sm:h-11"
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black">
                04
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-black leading-tight mb-4">
                Launch &<br />
                Handover
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                After rigorous testing, we handle the entire launch process.
                We'll hand over the keys to your new website and provide the
                training you need to manage it with confidence. Your new digital
                home is officially open for business.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <button className="bg-black text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-[10px] font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto">
              LET'S BUILD TOGETHER
            </button>
          </div>
        </div>
      </div>

      {/* Text Marquee Section */}
      <TextMarqueeTwo
        className="mt-42"
        marqueeText="Pro team on demand"
        upperBandText="No design debt"
      />

      {/* What's Included Section */}
      <div className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 relative">
            {/* Left Column - What's Included Content */}
            <div className="order-2 lg:order-1">
              <div className="text-white space-y-6 sm:space-y-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  What's{" "}
                  <span className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    included?
                  </span>
                </h2>

                <div className="space-y-3 sm:space-y-4 max-w-full">
                  {/* Custom Shopify Theme Design & Development */}
                  <div className="overflow-hidden border border-gray-700/50 rounded-2xl">
                    <div
                      className={`p-4 sm:p-6 cursor-pointer rounded-2xl transition-all duration-300 border border-[#E0E23B]`}
                      onClick={() => toggleSection(0)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-tight">
                          CUSTOM SHOPIFY THEME DESIGN & DEVELOPMENT
                        </h3>
                        <svg
                          className={`w-6 h-6 transition-all duration-300 ${
                            expandedSection === 0
                              ? "text-[#c8ff00] rotate-180"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {expandedSection === 0 && (
                        <div className="mt-6 space-y-4 animate-fadeIn">
                          <p className="text-gray-300 leading-relaxed">
                            We build your Shopify store from the ground up with
                            a custom theme designed exclusively for your brand.
                            Forget generic templates that look like everyone
                            else. We create a unique, memorable shopping
                            experience that tells your story and captivates your
                            audience.
                          </p>

                          <div className="mt-4">
                            <p className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent font-semibold mb-3">
                              Got a specific vision in mind?
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                              Tell us your ideas. We'll translate your vision
                              into a fully functional, beautifully designed
                              store that stands out from the competition.
                            </p>
                          </div>

                          {/* Service Tags */}
                          <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Brand Identity
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              UI/UX Design
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Theme Coding
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Visual Storytelling
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Custom Features
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Wireframing
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile-First Responsive Design */}
                  <div className="rounded-2xl overflow-hidden border border-gray-700/50">
                    <div
                      className={`p-4 sm:p-6 cursor-pointer rounded-2xl transition-all duration-300 border border-[#E0E23B]`}
                      onClick={() => toggleSection(1)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-tight">
                          MOBILE-FIRST RESPONSIVE DESIGN
                        </h3>
                        <svg
                          className={`w-6 h-6 transition-all duration-300 ${
                            expandedSection === 1
                              ? "text-[#c8ff00] rotate-180"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {expandedSection === 1 && (
                        <div className="mt-6 space-y-4 animate-fadeIn">
                          <p className="text-gray-300 leading-relaxed">
                            Over 70% of e-commerce traffic comes from mobile
                            devices. We design your store with a mobile-first
                            approach, ensuring flawless user experience across
                            all devices and screen sizes.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Mobile Optimization
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Touch-Friendly UI
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Cross-Device Testing
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Conversion Rate Optimization & Strategy */}
                  <div className="rounded-2xl overflow-hidden border border-gray-700/50">
                    <div
                      className={`p-4 sm:p-6 cursor-pointer rounded-2xl transition-all duration-300 border border-[#E0E23B]`}
                      onClick={() => toggleSection(2)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-tight">
                          CONVERSION RATE OPTIMIZATION & STRATEGY
                        </h3>
                        <svg
                          className={`w-6 h-6 transition-all duration-300 ${
                            expandedSection === 2
                              ? "text-[#c8ff00] rotate-180"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {expandedSection === 2 && (
                        <div className="mt-6 space-y-4 animate-fadeIn">
                          <p className="text-gray-300 leading-relaxed">
                            We implement proven conversion optimization
                            strategies, from streamlined checkout processes to
                            strategic product placement, ensuring maximum sales
                            from your traffic.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              A/B Testing
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Sales Funnel Optimization
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Trust Building Elements
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Essential App Integration & Setup */}
                  <div className="rounded-2xl overflow-hidden border border-gray-700/50">
                    <div
                      className={`p-4 sm:p-6 cursor-pointer rounded-2xl transition-all duration-300 border border-[#E0E23B]`}
                      onClick={() => toggleSection(3)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-tight">
                          ESSENTIAL APP INTEGRATION & SETUP
                        </h3>
                        <svg
                          className={`w-6 h-6 transition-all duration-300 ${
                            expandedSection === 3
                              ? "text-[#c8ff00] rotate-180"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {expandedSection === 3 && (
                        <div className="mt-6 space-y-4 animate-fadeIn">
                          <p className="text-gray-300 leading-relaxed">
                            We integrate and configure essential Shopify apps
                            for inventory management, email marketing,
                            analytics, and customer support to create a complete
                            e-commerce ecosystem.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Payment Gateways
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Email Marketing
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Analytics Setup
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SEO Foundations for Organic Growth */}
                  <div className="rounded-2xl overflow-hidden border border-gray-700/50">
                    <div
                      className={`p-4 sm:p-6 cursor-pointer rounded-2xl transition-all duration-300 border border-[#E0E23B]`}
                      onClick={() => toggleSection(4)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-tight">
                          SEO FOUNDATIONS FOR ORGANIC GROWTH
                        </h3>
                        <svg
                          className={`w-6 h-6 transition-all duration-300 ${
                            expandedSection === 4
                              ? "text-[#c8ff00] rotate-180"
                              : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {expandedSection === 4 && (
                        <div className="mt-6 space-y-4 animate-fadeIn">
                          <p className="text-gray-300 leading-relaxed">
                            We build SEO best practices into your store from day
                            one, including optimized page structure, meta tags,
                            site speed optimization, and schema markup for
                            better search visibility.
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Technical SEO
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Site Speed Optimization
                            </span>
                            <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 text-white text-sm rounded-full">
                              Schema Markup
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative opacity-100 lg:opacity-90 xl:opacity-100">
                <img
                  src={IMAGES.Lady_with_laptop}
                  alt="Floating Screen"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Laptop and Ready To Section */}
      <VideoLaptopReadySection />
    </React.Fragment>
  );
};

export default WebDesign;
