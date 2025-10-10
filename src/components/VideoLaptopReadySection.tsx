import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import CTAButton from "@/components/CTAButton";

const VideoLaptopReadySection = () => {
  return (
    <React.Fragment>
      {/* Video Laptop Section */}
      {/* <img src={IMAGES.Videoalptop_Img} alt="video" className="w-full h-auto" /> */}
      {/* <div className="flex justify-center my-8">
        <video
          src={IMAGES.Video_Laptop}
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={{ objectFit: "contain" }}
        />
      </div> */}
      {/* Ready To Section */}
      <div className="relative bg-black min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 ">
            {/* Main Question Text */}
            <div className="">
              <motion.h1
                className="sm:text-[80px] text-4xl font-bold text-white leading-tight"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                READY TO
              </motion.h1>
              <motion.h1
                className="sm:text-[80px] text-4xl font-light bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic leading-tight"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                KEEP YOUR
              </motion.h1>
              <motion.h1
                className="sm:text-[80px] text-4xl font-light bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic leading-tight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                WEBSITE
              </motion.h1>
              <motion.h1
                className="sm:text-[80px] text-4xl font-bold text-white leading-tight"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                ALWAYS
              </motion.h1>
              <motion.h1
                className="sm:text-[80px] text-4xl font-light bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic leading-tight relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                FRESH<span className="text-white font-bold">?</span>
                <motion.div
                  className=""
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <img
                    src={IMAGES.Linegradient_Img}
                    alt="line"
                    className="mx-auto max-w-[120px] sm:max-w-[300px]"
                  />
                </motion.div>
              </motion.h1>
            </div>

            {/* CTA Button */}
            <motion.div
              className="text-center flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <CTAButton title="SCHEDULE AN APPOINTMENT" className="!mx-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoLaptopReadySection;
