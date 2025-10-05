import React from "react";
import { IMAGES } from "@/constants/images";
import Header from "@/components/Header";
import LogoSlider from "@/components/LogoSlider";
import PrimaryButton from "@/components/PrimaryOutline";
import BenefitButtonsMarquee from "@/components/BenefitButtonsMarquee";
import FAQAccordion from "@/components/FAQAccordion";
import { IconOne, SlackIcon } from "@/lib/IconSvgIcons";
import TextMarquee from "@/components/TextMarquee";
import StartTodaySection from "@/components/StartTodaySection";
import VideoLaptopReadySection from "@/components/VideoLaptopReadySection";
import PriceSection from "@/components/PriceSection";

const OnDemadVideoProduction = () => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <div
        className="relative min-h-screen  overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.OnDemand_Img})` }}
      >
        <Header />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-center w-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-[20px] p-8  border-t-2 border-b-2 border-white/35 max-w-3xl">
              <h2 className="text-3xl md:text-8xl font-extrabold uppercase leading-[40px] sm:leading-[100px] mb-4">
                <span className="text-white font-semibold">ON DEMAND </span>
                <br />
                <span className="text-[#B0E63B] italic ">Video</span>
                <br />
                <span className="text-white font-semibold">Production</span>
              </h2>
              <p className="text-sm text-white uppercase font-semibold sm:max-w-2xl mx-auto mb-8">
                + Fully Managed Facebook Ads Campaign Subscription
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <PrimaryButton
                  className="max-w-[180px] w-full sm:w-auto"
                  onClick={() => console.log("Test")}
                  title="SEE OUR PLANS"
                />
                <p className="text-white/80 text-sm font-ubuntu font-light shrink-0 text-center sm:text-left">
                  Starting at $999.99 / Month
                </p>
                <div className="flex space-x-1 mt-2 sm:mt-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Slider Section */}
      <LogoSlider />

      {/* Marketing Banner Section */}
      <div className="relative bg-black  overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-5  pb-20">
          <div className="relative flex flex-col lg:flex-row-reverse items-center max-w-5xl mx-auto gap-8 lg:gap-10">
            {/* Right Content (Text Box) */}
            <div className="space-y-4 relative z-10 max-w-[500px] w-full">
              {/* Main Headline */}
              <div>
                <h1
                  className="
                                        text-lg
                                        sm:text-2xl
                                        md:text-4xl
                                        lg:text-5xl
                                        xl:text-6xl
                                        font-medium
                                        text-white
                                        leading-tight
                                        uppercase
                                        text-center
                                        sm:text-left
                                        break-words
                                    "
                >
                  Grow Youw Brand witw Professional{" "}
                  <span
                    className="
                                            bg-gradient-to-r
                                            mr-1
                                            from-[#B0E63B]
                                            via-[#E0E23B]
                                            to-[#E0E23B]
                                            bg-clip-text
                                            text-transparent
                                            font-bold
                                        "
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Video Ads
                  </span>
                </h1>
              </div>

              {/* Body Text */}
              <p className="text-sm sm:text-xl text-[#F9FFEB] font-medium uppercase leading-relaxed">
                Professional Video & Ads, Right When You Need Them
              </p>
              <p className="text-sm text-[#F9FFEB] leading-relaxed max-w-2xl">
                In today's digital world, attention is the new currency. Video
                content isn't just trending—it's driving real business results.
                You're competing for eyeballs with every post, every story,
                every ad. <br /> <br />
                Stand out from the noise with professional video content
                tailored for your specific goals. Whether it's for a new product
                launch, a targeted ad campaign, or a major announcement, we
                create video that stops the scroll, builds trust, and converts
                viewers into customers—one project at a time. No subscriptions,
                just impactful results when you need them most.
              </p>

              {/* CTA Button */}
              <div className="text-center flex items-center justify-start">
                <PrimaryButton
                  title="Stand Out. Stay Fresh. "
                  className="max-w-[290px] uppercase font-bold"
                  onClick={() => {}}
                />
              </div>
            </div>

            {/* Left Content - Woman with Laptop */}
            <div className="flex-shrink-0 md:static md:opacity-30 xl:opacity-100 relative">
              <img
                src={IMAGES.GrowAds_Img}
                alt="hero"
                className="w-full max-w-[720px] h-auto relative left-[-100px] rounded-[25px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Audience Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Video Player */}
            <div className="order-2 lg:order-1">
              {/* Main Headline */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight uppercase">
                  <span className="block">YOUR AUDIENCE</span>
                  <span className="block">EXPECTS IT. YOUR</span>
                  <span className="block">COMPETITORS</span>
                  <span className="block bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    ARE DOING IT.
                  </span>
                </h2>
              </div>

              {/* Video Player */}
              <div className="relative w-full aspect-video">
                <img
                  src={IMAGES.Video2_Img}
                  alt="video"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>

            {/* Right Content - Marketing Text */}
            <div className="order-1 lg:order-2 space-y-4">
              {/* Main Heading */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight uppercase">
                  WITHOUT VIDEO, YOU'RE INVISIBLE. THAT'S THE REALITY OF MODERN
                  MARKETING.
                </h3>
              </div>

              {/* First Paragraph */}
              <div>
                <p className="text-sm sm:text-base  text-white leading-relaxed">
                  But producing great video content is hard. Takes time,
                  expertise, and a creative team. Your business is already full.
                  You've got bigger fish to fry than learning Final Cut Pro or
                  figuring out what trending audio to use.
                </p>
              </div>

              {/* Second Paragraph */}
              <div>
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  That's why we created our Monthly On-Site Video Production
                  Program. Fully Produced High-Quality Content + Google/Meta Ad
                  Campaigns. We make it easy for you to stay fresh with
                  professional video content that actually converts. No more
                  guessing what works—we make sure your videos get seen by the
                  right people that work and generate real leads for your
                  business.
                </p>
              </div>

              {/* Sub-heading */}
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent leading-tight uppercase">
                  WHY MONTHLY VIDEO PRODUCTION
                </h4>
              </div>

              {/* Third Paragraph */}
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  If you're running ads or promoting your brand without fresh
                  monthly video content, you're leaving money on the table. Yes
                  —video is the highest-performing format in digital marketing.
                  But here's what most people don't realize: even the best video
                  loses its punch after 2–3 weeks.
                </p>
              </div>

              {/* Fourth Paragraph */}
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  That's when engagement drops, costs rise, and ad fatigue
                  starts killing your ROI. To keep your budget fully optimized
                  and your message landing strong, you need a steady stream of
                  fresh, professional video content—every single month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOMERS LOVE BRANDS Section */}
      <div className="relative bg-gradient-to-b from-[#B0E63B] to-[#E0E23B] overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-4">
              {/* Main Headline */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-black leading-tight uppercase">
                  <span className="block">CUSTOMERS</span>
                  <span className="block font-bold italic">LOVE BRANDS</span>
                  <span className="block">THAT STAY</span>
                  <span className="block">VISUALLY ACTIVE</span>
                </h2>
              </div>

              {/* Supporting Text */}
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-semibold uppercase leading-relaxed">
                  Today's audience doesn't just want video—they want constant
                  new video content. Showing up consistently with fresh visuals
                  helps
                </p>
              </div>
            </div>

            {/* Right Content - Video Player */}
            <div className="relative">
              <img
                src={IMAGES.Video3_Img}
                alt="video"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Benefit Buttons Marquee */}
        <div>
          <BenefitButtonsMarquee className="mt-12 mb-8" />
          <BenefitButtonsMarquee className="" />
        </div>
      </div>

      {/* Video Types & Services Section */}
      <div
        className="relative overflow-hidden bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${IMAGES.Video4_Img})` }}
      >
        <div className="absolute inset-0 bg-black/80 "></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16 max-w-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-white leading-tight uppercase mb-1">
              VIDEO TYPES
              <span
                className="ml-2 bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                & SERVICES
              </span>
            </h2>
            <p className="text-sm font-ubuntu  bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent font-semibold  leading-relaxed ">
              And more — custom-tailored to your needs. If you have a vision,
              we'll help you bring it
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Social Media & Growth */}
            <div className="space-y-3">
              <div className="mb-3">
                <IconOne />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                SOCIAL MEDIA & GROWTH
              </h3>
              <p className="text-sm text-white leading-relaxed">
                YouTube Videos & Business Vlogs | Social Media Reels, Shorts,
                TikToks | Testimonials & Case Studies
              </p>
            </div>

            {/* Sales & Marketing */}
            <div className="space-y-3">
              <div className="mb-3">
                <SlackIcon />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                SALES & MARKETING
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Explainer Videos & Product Demos | Sales Videos & Promotional
                Clips | Recruiting Campaigns & Culture Videos
              </p>
            </div>

            {/* Professional & Corporate */}
            <div className="space-y-3">
              <div className="mb-3">
                <IconOne />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                PROFESSIONAL & CORPORATE
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Corporate Storytelling & Branding | Training & Educational
                Content | Events, Conferences, & Behind the Scenes | Documentary
                Style Interviews
              </p>
            </div>

            {/* Specialized Services */}
            <div className="space-y-3">
              <div className="mb-3">
                <SlackIcon />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-tight">
                SPECIALIZED SERVICES
              </h3>
              <p className="text-sm text-white leading-relaxed">
                Corporate Storytelling & Branding | Training & Educational
                Content | Events, Conferences, & Behind the Scenes | Documentary
                Style Interviews
              </p>
            </div>
          </div>
        </div>

        {/* WHAT'S INCLUDED? Section */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <img
            src={IMAGES.Include_Img}
            alt="video"
            className="max-w-[700px] max-h-[700px] object-center absolute left-[-170px] top-[90px] opacity-15 xl:opacity-100"
          />

          <div className="max-w-xl relative z-10 ml-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-white leading-tight uppercase mb-12">
              WHAT'S
              <span
                className="ml-2 bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                INCLUDED
              </span>
              ?
            </h2>
            <FAQAccordion />
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
          <div className="flex flex-col md:flex-row items-center relative">
            {/* Center Left Image */}
            <div className="flex-shrink-0 relative -left-[120px] flex justify-center md:justify-start w-full md:w-auto  mb-8 md:mb-0">
              <img
                src={IMAGES.Ads_IMG}
                alt="video"
                className="max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[800px] w-full h-auto object-center"
                style={{ objectPosition: "center left" }}
              />
            </div>
            {/* Right Content */}
            <div className="space-y-6 ">
              {/* Main Headline */}
              <div className="lg:text-left">
                <h2 className="text-3xl md:text-4xl font-light lg:text-5xl  text-black mb-2">
                  FB Ads Managed
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black italic">
                  For You
                </h2>
              </div>

              {/* Problem Statement */}
              <div className="space-y-4">
                <p className="text-sm md:text-base lg:text-lg text-black font-semibold  lg:text-left leading-relaxed">
                  Facebook & Instagram campaign setup, Google/youtube
                  optimization and management included in your monthly
                  subscription.
                </p>

                <button className="bg-black px-3 sm:px-6 py-3 rounded-[15px] w-full text-xl font-bold   uppercase tracking-wide hover:bg-gray-800 transition-colors">
                  <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    This alone saves you
                  </span>
                </button>

                <h2 className="text-6xl sm:text-8xl font-bold text-black">
                  $2,000 -<br />
                  $5,000 +<br />
                  /month
                </h2>

                <p className="text-sm md:text-base uppercase lg:text-lg text-black font-semibold  lg:text-left leading-relaxed">
                  in agency fees.
                </p>
              </div>
            </div>
          </div>

          {/* IF YOU'RE SPENDING Section */}
          <div className="bg-[#F0F8E8] py-12 lg:py-20 ">
            {/* Main Headline */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light lg:text-6xl  text-black leading-tight uppercase ">
                <span>IF YOU'RE SPENDING $1,000-</span>
                <span>$10,000+ / NOT REFRESHING YOURCREATIVE, </span>
                <span className="italic font-extrabold">YOU'RE</span>
                <span className="italic font-extrabold text-black">
                  WASTING MONEY AND KILLING YOUR ROI.
                </span>
              </h2>
            </div>

            {/* Five Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
              {/* Column 1: WHY FRESH CONTENT = MORE SALES */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  WHY FRESH CONTENT = MORE SALES:
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  When paid ads run with the same video, you're running Facebook
                  Ads. Ad revenue cuts drop by 2-3 weeks. Secondly, your costs
                  to convert go up and your audience starts to get bored with
                  stagnant content. Most importantly, your cost to acquire
                  customers goes through the roof and stops performing.
                </p>
              </div>

              {/* Column 2: AD FATIGUE IS FACEBOOK'S #1 PROBLEM */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  AD FATIGUE IS FACEBOOK'S #1 PROBLEM:
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  Monthly videos let you create creative, more but based upon
                  what converts people to prevent fatigue. Fresh creative
                  content drives better results.
                </p>
              </div>

              {/* Column 3: HIGHER ROI: REGULAR CONTENT BEATS VIRAL */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  HIGHER ROI: REGULAR CONTENT BEATS VIRAL AND ONE-HIT WONDERS:
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  Content creation is actually less risky than creating viral
                  single videos without an or audience. Storytelling traditional
                  case studies generate much more reach and good sales.
                </p>
              </div>

              {/* Column 4: SOCIAL PROOF THAT MATTERS */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  SOCIAL PROOF THAT MATTERS:
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  Storytelling testimonials, case studies, client videos, and
                  the features will help more. So why not to both Formats at
                  once.
                </p>
              </div>

              {/* Column 5: PLATFORM BOOST */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase leading-tight">
                  PLATFORM BOOST:
                </h3>
                <p className="text-sm sm:text-base text-black leading-relaxed font-medium">
                  Facebook, Instagram, YouTube, TikTok, etc. algorithm
                  prioritize fresh content • More reach • More share content •
                  More reach for organic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Marquee Section */}
      <TextMarquee
        className="-mt-30"
        marqueeText="Pro team on demand"
        upperBandText="No design debt"
      />

      {/* Price Section */}
      <PriceSection />

      {/* Start Today Section */}
      <StartTodaySection />

      {/* Video Laptop and Ready To Section */}
      <VideoLaptopReadySection />
    </React.Fragment>
  );
};

export default OnDemadVideoProduction;
