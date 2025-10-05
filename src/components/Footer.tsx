import { IMAGES } from "@/constants/images";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 sm:pt-40">
      {/* Content */}
      <div className="relative z-10 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Brand Section */}
          <div className="mb-12  max-w-6xl mx-auto">
            {/* Brand Name */}

            <div className="mb-4">
              <img
                src={IMAGES.FooterLogo_Img}
                alt="footer logo"
                className="w-full h-auto"
              />
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center xl:text-start font-semibold text-white uppercase mb-4 xl:mb-1">
              TRUSTED BY 2000+ BUSINESS OWNERS ACROSS THE U.S.
            </p>
            <div className="flex flex-col xl:flex-row items-center justify-between space-y-7 xl:space-y-0.5">
              {/* Contact Information */}
              <div className="flex flex-col lg:flex-row items-center  gap-4">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <img
                    src={IMAGES.Phone_Gradient}
                    alt="phone"
                    className="w-6 h-6"
                  />
                  <span className="text-sm sm:text-base  font-medium text-white">
                    (888) 248-1836
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <img
                    src={IMAGES.Email_Gradient}
                    alt="email"
                    className="w-6 h-6"
                  />
                  <span className="text-sm sm:text-base  font-medium text-white">
                    info@brandedstrong.com
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2">
                  <img
                    src={IMAGES.Location_Gradient}
                    alt="location"
                    className="w-6 h-6"
                  />
                  <span className="text-sm sm:text-base  font-medium text-white">
                    270 E Douglas Ave, El Cajon CA 92020
                  </span>
                </div>
              </div>

              {/* Social Media and About Us */}
              <div className="flex flex-col sm:flex-row items-center gap-2 ">
                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                  {/* Instagram */}
                  <motion.a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={IMAGES.Instagram} alt="instagram" />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="#"
                    className=" hover:text-white transition-colors duration-300"
                    aria-label="Facebook"
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={IMAGES.Facebook} alt="facebook" />
                  </motion.a>
                </div>

                {/* About Us Button */}
                <motion.button
                  className="px-6 cursor-pointer py-3 border-2 border-whiite rounded-full text-sm sm:text-base font-semibold text-white uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  ABOUT US
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col overflow-hidden min-h-[800px]">
        <img
          src={IMAGES.Footer_Img}
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ zIndex: 0 }}
        />
        {/* Overlay for content readability, optional: */}
        <div className="relative z-10 flex flex-col flex-1 pb-10">
          {/* Copyright and Bible Verse */}
          <div className="text-center mt-auto">
            <p className="text-md md:text-2xl max-w-[490px] lg:max-w-[800px] mx-auto lg:text-base font-medium bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent uppercase tracking-wide">
              © 2025 BRANDED STRONG LLC | ALL RIGHTS RESERVED | PHILIPPIANS 3:20
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
