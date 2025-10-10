import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import FAQSection from "@/components/FAQSection";

const PriceSection = () => {
  return (
    <div className="bg-black py-30 md:py-16 lg:py-20 relative -top-[180px] overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#B0E63B]/10 via-[#E0E23B]/10 to-[#E0E23B]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Silver Tier */}
          <motion.div
            className="bg-black relative group"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="border-2 border-gray-500 rounded-2xl p-6 lg:p-8 transition-all duration-300 relative"
              whileHover={{
                borderColor: "#9CA3AF",
                boxShadow: "0 0 30px rgba(125, 125, 125, 0.3)",
              }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-500/20 via-gray-400/20 to-gray-500/20 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Limited Time Banner */}
              <div className="absolute -top-4 ">
                <div className="bg-[#7D7D7D] text-sm font-bold px-4 py-2 rounded-full text-black">
                  (LIMITED TIME)
                </div>
              </div>

              {/* Plan Name */}
              <div className="mb-2 mt-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#7D7D7D] uppercase">
                  Silver
                </h3>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="text-3xl lg:text-4xl font-bold text-[#7D7D7D]  mb-2">
                  $699<span className="text-white">/MO</span>
                </div>
                <div className="text-sm text-white line-through">
                  (REGULAR: $1,298/MO)
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="text-white text-sm">• 2 hrs shooting</div>
                <div className="text-white text-sm">• 30 min setup</div>
                <div className="text-white text-sm">• Up to 8 Reels</div>
                <div className="text-white text-sm">• 1 4K Long Video</div>
                <div className="text-white text-sm">
                  • Unlimited editing + revisions
                </div>
                <div className="text-white text-sm">
                  • Motion graphics + captions
                </div>
                <div className="text-white text-sm">
                  • Licensed footage + music
                </div>
                <div className="text-white text-sm">
                  • Editing + color correction
                </div>
                <div className="text-white text-sm">
                  • Social-ready formats (vertical + horizontal)
                </div>
                <div className="text-white text-sm">
                  • Professional LED lighting & audio gear
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-[#7D7D7D] hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                SCHEDULE FREE 30-MIN VIDEO SESSION PLANNING
              </button>
            </motion.div>
          </motion.div>

          {/* Gold Tier */}
          <motion.div
            className="bg-black relative group"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="border-2 border-yellow-500 rounded-2xl p-6 lg:p-8 transition-all duration-300 relative"
              whileHover={{
                borderColor: "#FACC15",
                boxShadow: "0 0 40px rgba(229, 192, 44, 0.4)",
              }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Limited Time Banner */}
              <div className="absolute -top-4 ">
                <div className="bg-[#E5C02C] text-sm font-bold px-4 py-2 rounded-full text-black">
                  (LIMITED TIME)
                </div>
              </div>

              {/* Plan Name */}
              <div className="mb-2 mt-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#E5C02C] uppercase">
                  Gold
                </h3>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="text-3xl lg:text-4xl font-bold text-[#E5C02C] mb-2">
                  $1,899/<span className="text-white">MO</span>
                </div>
                <div className="text-sm text-white/60 line-through">
                  (REGULAR: $2,498/MO)
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="text-white text-sm">
                  • 8 hrs shooting (same day or 4hrs twice a month)
                </div>
                <div className="text-white text-sm">• 1 hr setup</div>
                <div className="text-white text-sm">• Up to 12 Reels</div>
                <div className="text-white text-sm">• 2 4K Long Videos</div>
                <div className="text-white text-sm">
                  • Unlimited editing + revisions
                </div>
                <div className="text-white text-sm">
                  • Motion graphics + captions
                </div>
                <div className="text-white text-sm">
                  • Licensed footage + music
                </div>
                <div className="text-white text-sm">
                  • Video thumbnail creation
                </div>
                <div className="text-white text-sm">
                  • Scheduling, uploading & releasing
                </div>
                <div className="text-white text-sm">
                  • Advanced editing (captions, transitions, graphics)
                </div>
                <div className="text-white text-sm">
                  • Monthly content strategy call
                </div>
                <div className="text-white text-sm">
                  • Private ClickUp board
                </div>
                <div className="text-white text-sm">
                  • Professional LED lighting & audio gear
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-[#E5C02C] hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                SCHEDULE FREE 30-MIN VIDEO SESSION PLANNING
              </button>
            </motion.div>
          </motion.div>

          {/* Platinum Tier */}
          <motion.div
            className="bg-black relative group"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="rounded-2xl transition-all duration-300 relative bg-black"
              whileHover={{
                boxShadow: "0 0 60px rgba(176, 230, 59, 0.5)",
              }}
            >
              {/* Pulsing gradient border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0 bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B]"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="p-[2px]">
                <div className="relative z-10 bg-black p-6 lg:p-8 rounded-2xl">
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                      repeatDelay: 3,
                    }}
                  />

                  {/* Best Seller Badge with floating animation */}
                  <motion.div
                    className="absolute -top-[40px] -right-[40px] md:-top-[50px] md:-right-[50px] z-10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.img
                      src={IMAGES.Bestseller_IMG}
                      alt="bestseller"
                      className="w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 object-contain"
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Limited Time Banner */}
                  <div className="absolute -top-4 ">
                    <div className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-sm font-bold px-4 py-2 rounded-full text-black">
                      (LIMITED TIME)
                    </div>
                  </div>

                  {/* Plan Name */}
                  <div className="mb-2 mt-4">
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent uppercase">
                      Platinum
                    </h3>
                  </div>

                  {/* Pricing */}
                  <div className=" mb-8">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent mb-2">
                      $2,999/<span className="!text-white">MO</span>
                    </div>
                    <div className="text-sm text-white/60 line-through">
                      (REGULAR: $3,598/MO)
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="text-white text-sm">
                      • Weekly (4hrs per shoot)
                    </div>
                    <div className="text-white text-sm">• Up to 30 Reels</div>
                    <div className="text-white text-sm">• 3 4K Long Videos</div>
                    <div className="text-white text-sm">
                      • Unlimited editing + revisions
                    </div>
                    <div className="text-white text-sm">
                      • Motion graphics + captions
                    </div>
                    <div className="text-white text-sm">
                      • Licensed footage + music
                    </div>
                    <div className="text-white text-sm">
                      • Video thumbnail creation
                    </div>
                    <div className="text-white text-sm">
                      • Scheduling, uploading & releasing
                    </div>
                    <div className="text-white text-sm">
                      • Advanced post-production (color grading, audio mix,
                      animations)
                    </div>
                    <div className="text-white text-sm">
                      • Dedicated account manager + full production team
                    </div>
                    <div className="text-white text-sm">
                      • Priority turnaround (24-48 hrs)
                    </div>
                    <div className="text-white text-sm">
                      • Private ClickUp board
                    </div>
                    <div className="text-white text-sm">
                      • Quarterly content strategy workshop
                    </div>
                    <div className="text-white text-sm">
                      • Access to raw files
                    </div>
                    <div className="text-white text-sm">
                      • Social media management (FB Ads / IG)
                    </div>
                    <div className="text-white text-sm">
                      • Monthly video strategy meet
                    </div>
                    <div className="text-white text-sm">
                      • Professional LED lighting & audio gear
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                    SCHEDULE FREE 30-MIN VIDEO SESSION PLANNING
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* FAQ Section Qustion Answer */}
      <FAQSection />
    </div>
  );
};

export default PriceSection;
