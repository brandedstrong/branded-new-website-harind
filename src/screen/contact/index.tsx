import React, { useState } from "react";
import { IMAGES } from "@/constants/images";
import Header from "@/components/Header";
import StarBackground from "@/components/StarBackground";
import PrimaryButton from "@/components/PrimaryOutline";
import LogoSlider from "@/components/LogoSlider";
import CTAButton from "@/components/CTAButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhiteCallIcon, WhiteMailIcon, WhitePinIcon } from "@/lib/IconSvgIcons";
import { motion } from "framer-motion";
import {
  sendContactEmail,
  createMailtoLink,
  type ContactFormData,
} from "@/services/emailService";

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    projectDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset status
    setSubmitStatus("idle");
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.projectDescription
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Try to send email via EmailJS
      try {
        await sendContactEmail(formData);
        setSubmitStatus("success");

        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          websiteUrl: "",
          projectDescription: "",
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } catch (emailError) {
        console.warn("EmailJS failed, falling back to mailto:", emailError);

        // Fallback to mailto link
        const mailtoLink = createMailtoLink(formData);
        window.open(mailtoLink, "_self");

        setSubmitStatus("success");
        setErrorMessage("Opening your default email client...");

        // Reset form after mailto
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          websiteUrl: "",
          projectDescription: "",
        });

        // Auto-hide message after 3 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      {/* Hero Section */}
      <div className="relative min-h-screen  overflow-hidden bg-cover bg-center">
        <Header />
        <StarBackground />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-center w-full flex flex-col items-center justify-center  max-w-3xl">
              <h2 className="text-3xl md:text-8xl font-extrabold uppercase leading-[40px] sm:leading-[100px] mb-4">
                <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent font-semibold">
                  Get in
                  <br />
                  <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                    touch
                  </span>{" "}
                </span>
                <span className="text-white font-light">with</span>
                <br />
                <span className="text-white  font-light ">our team</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <PrimaryButton
                  className="max-w-[180px] w-full sm:w-auto"
                  onClick={() => console.log("Test")}
                  title="SCHEDULE A CALL"
                />
                <p className="text-white/80 text-sm font-ubuntu font-light shrink-0 text-center sm:text-left">
                  Over 2000+ Satisfied Clients
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

      {/* Contact Form Section */}
      <div className="relative bg-black min-h-screen py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Section - Text and Contact Information */}
            <div className="space-y-8 lg:space-y-12">
              {/* Main Heading */}
              <h2 className="text-3xl text-white md:text-6xl font-extrabold uppercase leading-[40px] sm:leading-[70px] mb-4">
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent font-semibold">
                  grow your business
                  <br />
                  touch{" "}
                </span>{" "}
                <span className="text-white  font-light ">
                  with us? Let's talk about your project.
                </span>
              </h2>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent uppercase">
                  CONTACT INFORMATION
                </h2>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <WhiteCallIcon />
                    <span className="text-white text-lg">(888) 248-1836</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <WhiteMailIcon />
                    <span className="text-white text-lg">
                      info@brandedstrong.com
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center space-x-4">
                    <div className="min-w-[32px] flex justify-center">
                      <WhitePinIcon />
                    </div>
                    <span className="text-white text-lg">
                      270 E Douglas Ave, El Cajon CA 92020
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media and About Us */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  {/* Instagram */}
                  <motion.img
                    src={IMAGES.Instagram}
                    alt="instagram"
                    className="w-14 h-14 cursor-pointer"
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  />

                  {/* Facebook */}
                  <motion.img
                    src={IMAGES.Facebook}
                    alt="facebook"
                    className="w-14 h-14 cursor-pointer"
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  />
                </div>

                {/* About Us Button */}
                <motion.button
                  className="px-6 py-3 border-2 border-[#B0E63B] text-[#B0E63B] rounded-[50px] font-medium hover:bg-[#B0E63B] hover:text-black transition-colors"
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

            {/* Right Section - Contact Form */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-transparent border-1 border-[#B0E63B] rounded-full text-white placeholder:text-white focus:border-[#B0E63B] focus:ring-0 px-7 text-lg"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-transparent border-1 border-[#B0E63B] rounded-full text-white placeholder:text-white focus:border-[#B0E63B] focus:ring-0 px-7 text-lg"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-transparent border-1 border-[#B0E63B] rounded-full text-white placeholder:text-white focus:border-[#B0E63B] focus:ring-0 px-7 text-lg"
                    required
                  />
                </div>

                {/* Company Name */}
                <div>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-transparent border-1 border-[#B0E63B] rounded-full text-white placeholder:text-white focus:border-[#B0E63B] focus:ring-0 px-7 text-lg"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <Input
                    type="url"
                    name="websiteUrl"
                    placeholder="Website URL"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="w-full h-14 bg-transparent border-1 border-[#B0E63B] rounded-full text-white placeholder:text-white focus:border-[#B0E63B] focus:ring-0 px-7 text-lg"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <Textarea
                    name="projectDescription"
                    placeholder="Tell us about your project"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-transparent border-1 border-[#B0E63B] rounded-[20px] text-white placeholder:text-white focus:border-[#B0E63B] focus:ring-0 px-4 py-4 text-lg resize-none"
                    required
                  />
                </div>

                {/* Status Messages */}
                {(submitStatus !== "idle" || errorMessage) && (
                  <div className="pt-2">
                    {submitStatus === "success" && (
                      <div className="flex items-center space-x-2 text-green-400 text-sm">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>
                          {errorMessage ||
                            "Message sent successfully! We'll get back to you soon."}
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`h-14 cursor-pointer px-10 bg-transparent border-2 border-[#B0E63B] text-[#B0E63B] rounded-full font-medium text-lg transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#B0E63B] hover:text-black"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <svg
                          className="animate-spin h-5 w-5 text-[#B0E63B]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                          SENDING...
                        </span>
                      </div>
                    ) : (
                      <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent">
                        SEND MESSAGE
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Video Laptop Section */}
      <img src={IMAGES.Videoalptop_Img} alt="video" className="w-full h-auto" />

      {/* Ready To Section */}
      <div className="relative bg-black min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 ">
            {/* Main Question Text */}
            <div className="">
              <h1 className="sm:text-[80px] text-4xl font-bold text-white leading-tight">
                READY TO
              </h1>
              <h1 className="sm:text-[80px] text-4xl font-light bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic leading-tight">
                KEEP YOUR
              </h1>
              <h1 className="sm:text-[80px] text-4xl font-light bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic leading-tight">
                WEBSITE
              </h1>
              <h1 className="sm:text-[80px] text-4xl font-bold text-white leading-tight">
                ALWAYS
              </h1>
              <h1 className="sm:text-[80px] text-4xl font-light bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic leading-tight relative">
                FRESH<span className="text-white font-bold">?</span>
                <div className="">
                  <img
                    src={IMAGES.Linegradient_Img}
                    alt="line"
                    className="mx-auto max-w-[120px] sm:max-w-[300px]"
                  />
                </div>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="text-center flex justify-center">
              <CTAButton title="SCHEDULE AN APPOINTMENT" className="!mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
