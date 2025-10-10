import React, { useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import VideoLaptopReadySection from "@/components/VideoLaptopReadySection";
import Header from "@/components/Header";
import TextMarquee from "@/components/TextMarquee";
import PrimaryButton from "@/components/PrimaryOutline";

const Shopify = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? -1 : index);
  };

  return (
    <React.Fragment>
      <Header />
      {/* Cart Abandonment Hero Section */}
      <div className="bg-black min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-14 md:py-16">
        <div className="w-full max-w-6xl mx-auto text-center space-y-4">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="block text-2xl xs:text-3xl sm:text-4xl max-w-3xl mx-auto font-bold text-white leading-tight uppercase">
              <span className="font-light">Ever abandoned a cart because </span>
              <span
                className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                the store felt unprofessional?
              </span>
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
          <div className="space-y-1 xs:space-y-2 pt-6 xs:pt-8">
            <p className="text-base xs:text-lg sm:text-xl font-medium text-white">
              WE BUILD STORES THAT SELL. ONE FLAT
            </p>
            <p className="text-base xs:text-lg sm:text-xl font-medium text-white">
              PROJECT PRICE = ZERO GUESSWORK.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center">
            {/* CTA Button */}
            <motion.div
              className="pt-6 xs:pt-8"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black px-6 xs:px-8 sm:px-10 py-3 xs:py-4 rounded-full font-bold text-base xs:text-lg cursor-pointer transition-colors duration-300 uppercase tracking-wide w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(176, 230, 59, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                UPGRADE YOUR STORE
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 xs:pt-10 sm:pt-12 flex flex-col md:flex-row justify-center items-center gap-4 xs:gap-6 md:gap-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <motion.div
                className="text-white text-center"
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              >
                <p className="text-xs xs:text-sm font-medium">
                  Trusted by 200+
                </p>
                <p className="text-xs xs:text-sm font-medium">Shopify Owners</p>
                <p className="text-xs xs:text-sm font-medium">
                  Owners Across the U.S.
                </p>
              </motion.div>

              {/* 5 Star Rating */}
              <motion.div
                className="flex gap-1"
                initial={{ opacity: 0, x: 80, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.8,
                }}
              >
                {[...Array(5)].map((_, idx) => (
                  <motion.img
                    key={idx}
                    src={IMAGES.Star_Img}
                    alt="star"
                    className="w-4 h-4 xs:w-5 xs:h-5 star-pulse-bubble transition-transform duration-300 hover:scale-125"
                    initial={{ opacity: 0, x: 30, y: 20, rotate: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 1.0 + idx * 0.1,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.2 },
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative flex  flex-col overflow-hidden min-h-[830px]">
        <img
          src={IMAGES.Shopify_Img}
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />

        {/* Text Content Overlay */}
        <div className="relative container mx-auto z-10 flex flex-col justify-center items-end px-8 md:px-16 lg:px-24 h-full w-full">
          <div className="text-white space-y-6 text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Shopify Store Is More Than a Website
              <br />
              <span className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                It's Your Business.
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg md:text-xl">
                Expert{" "}
                <span className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                  Shopify Design & Development
                </span>
                , Tailored to Your Brand
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In today's crowded market, your online store is your digital
                handshake, your lead salesperson, and your brand's home.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                You can have the best products and smartest marketing, but if
                your store feels slow, confusing, or untrustworthy, you're
                leaving money on the table. We bridge the gap between great
                products and great sales with strategic design that builds trust
                and drives conversions.
              </p>
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black px-8 py-4 rounded-full font-semibold text-lg  transition-colors duration-300 uppercase tracking-wide">
                Launch Your Store
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Your Store Section */}

      {/* Professional Store Section */}
      <div className="bg-black py-16 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                A professional store isn't a luxury. It's the standard.
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Your audience expects a seamless, secure, and beautiful shopping
                experience. Your competitors are already providing it. Without a
                credible online store, you're not just losing sales—you're
                losing legitimacy in your industry.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                  Why a good-looking store isn't enough
                </h3>

                <div className="space-y-4 text-gray-300">
                  <p className="text-base md:text-lg leading-relaxed">
                    Launching your store is just the beginning. The most
                    successful brands treat their e-commerce site as a living
                    asset, not a one-time project. Here's what many don't
                    realize: even minor friction points in the shopping
                    experience—a confusing menu, a slow-loading image, or one
                    extra click at checkout—can dramatically decrease sales.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed">
                    That's when cart abandonment rises, repeat business falls,
                    and your marketing ROI suffers. To keep your budget
                    effective and your sales growing, you need a store that is
                    not only beautifully designed, but constantly optimized for
                    the best possible customer journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="flex flex-col gap-6">
              {/* Top Row - Two smaller images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-3xl aspect-square bg-gradient-to-br from-pink-200 to-pink-100">
                  <img
                    src={IMAGES.Women_Img}
                    alt="Happy customer with headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-3xl aspect-square bg-gradient-to-br from-yellow-200 to-yellow-100">
                  <img
                    src={IMAGES.Image2}
                    alt="Professional with documents"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom - Larger image */}
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-100">
                <img
                  src={IMAGES.Computer_Img}
                  alt="Professional working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Marquee Section */}
      <TextMarquee
        className="mt-20"
        marqueeText="Pro team on demand"
        upperBandText="No design debt"
      />

      {/* Your Time Back Section */}
      <div className="bg-[#F0F8E8] py-30 md:py-16 lg:py-20 relative -top-[180px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* IF YOU'RE SPENDING Section */}
          <div className="bg-[#F0F8E8] py-12 lg:py-20 ">
            {/* Main Headline */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light lg:text-6xl text-black leading-tight uppercase">
                <span>If you're spending money on marketing, </span>
                <span className="italic font-extrabold">a bad store is </span>
                <span className="italic font-extrabold text-black">
                  killing your ROI.
                </span>
              </h2>
            </div>

            {/* Five Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
              {/* Column 1: WHY FIRST IMPRESSIONS = MORE SALES */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  Why First Impressions = More Sales
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  You have less than 3 seconds to win a customer's trust. If
                  your store looks outdated, cluttered, or unprofessional,
                  visitors will leave before they even see your products. We
                  design beautiful, credible storefronts that make people want
                  to stay and shop.
                </p>
              </div>

              {/* Column 2: "CONVERSION KILLERS" ARE A SILENT PROBLEM */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  "Conversion Killers" Are a Silent Problem
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  A confusing menu, a slow-loading page, or a clunky checkout
                  process are silent revenue killers. As a **pro team on
                  demand**, we identify and eliminate these friction points,
                  creating a smooth path from browsing to buying, which saves
                  you from having to juggle analytics tools yourself.
                </p>
              </div>

              {/* Column 3: A CUSTOM STORE OUTPERFORMS A GENERIC TEMPLATE */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  A Custom Store Outperforms a Generic Template
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  A cheap template makes you look like everyone else. A
                  professional, custom-branded store builds trust, justifies
                  premium pricing, and creates a memorable experience. This
                  approach avoids "design debt" and delivers a much higher
                  return on investment than any quick fix.
                </p>
              </div>

              {/* Column 4: SOCIAL PROOF THAT ACTUALLY CONVERTS */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  Social Proof That Actually Converts
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  Having customer reviews isn't enough; they have to be seen at
                  the right moment. We strategically integrate testimonials,
                  trust badges, and user-generated content throughout your store
                  to overcome purchase anxiety and provide the confidence boost
                  customers need to click "buy".
                </p>
              </div>

              {/* Column 5: SEO & PERFORMANCE BOOST */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  SEO & Performance Boost
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  Google rewards stores that are fast, mobile-friendly, and
                  technically sound. Our professional builds are optimized for
                  speed and foundational SEO from day one, helping you rank
                  better and capture more organic traffic without you lifting a
                  finger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Marquee Section */}
      <TextMarquee
        className="-mt-[140px]"
        marqueeText="Pro team on demand"
        upperBandText="No design debt"
      />

      {/* What's Included Section */}
      <div className="bg-black py-16 px-8 md:px-16 lg:px-24 -mt-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center relative">
            {/* Left Column - Mobile Mockups */}
            <div className="absolute left-[-400px] hidden xl:flex justify-center items-center  ">
              <img
                src={IMAGES.FloatingScreen_Img}
                alt="Floating Screen"
                className="w-full h-[700px] object-cover"
              />
            </div>

            {/* Right Column - What's Included Content */}
            <div className="text-white space-y-6 max-w-3xl ml-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                What's{" "}
                <span className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                  included?
                </span>
              </h2>

              <div className="space-y-2">
                {/* Custom Shopify Theme Design & Development */}
                <div className="overflow-hidden border border-gray-700/50">
                  <div
                    className={`p-6 cursor-pointer rounded-2xl  transition-all duration-300 border border-[#E0E23B]`}
                    onClick={() => toggleSection(0)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
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
                          We build your Shopify store from the ground up with a
                          custom theme designed exclusively for your brand.
                          Forget generic templates that look like everyone else.
                          We create a unique, memorable shopping experience that
                          tells your story and captivates your audience.
                        </p>

                        <div className="mt-4">
                          <p className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent font-semibold mb-3">
                            Got a specific vision in mind?
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            Tell us your ideas. We'll translate your vision into
                            a fully functional, beautifully designed store that
                            stands out from the competition.
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
                    className={`p-6 cursor-pointer rounded-2xl  transition-all duration-300 border border-[#E0E23B]`}
                    onClick={() => toggleSection(1)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
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
                          approach, ensuring flawless user experience across all
                          devices and screen sizes.
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
                    className={`p-6 cursor-pointer rounded-2xl  transition-all duration-300 border border-[#E0E23B]`}
                    onClick={() => toggleSection(2)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
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
                    className={`p-6 cursor-pointer rounded-2xl  transition-all duration-300 border border-[#E0E23B]`}
                    onClick={() => toggleSection(3)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
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
                          We integrate and configure essential Shopify apps for
                          inventory management, email marketing, analytics, and
                          customer support to create a complete e-commerce
                          ecosystem.
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
                    className={`p-6 cursor-pointer rounded-2xl  transition-all duration-300 border border-[#E0E23B]`}
                    onClick={() => toggleSection(4)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
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
                          site speed optimization, and schema markup for better
                          search visibility.
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
        </div>
      </div>

      <div
        className="relative mt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.StartToday_Img})` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-center w-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-[20px] p-8  border-t-2 border-b-2 border-white/35 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-[40px] sm:leading-[50px] mb-4">
                <span className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent ">
                  Start today
                </span>
                <br />
                <span className="text-white font-semibold">
                  and get your project kickoff in less than{" "}
                  <span className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent ">
                    72 Hours!
                  </span>
                </span>
              </h2>
              <p className="text-sm text-white uppercase font-semibold sm:max-w-2xl mx-auto mb-8">
                + Fully Managed Facebook Ads Campaign Subscription
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <PrimaryButton
                  className="max-w-[280px] w-full sm:w-auto"
                  onClick={() => console.log("Test")}
                  title="GET STARTED WITH MONTHLY VIDEO"
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

export default Shopify;
