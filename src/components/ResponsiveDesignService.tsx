import { IMAGES } from "@/constants/images";
import { IconOne, IconThere, IconTwo } from "@/lib/IconSvgIcons";


const ResponsiveDesignService = () => {
    return (
        <div className="bg-black text-white min-h-screen responsive-design-service -mt-[280px]">
            {/* Main Container */}
            <div className="py-12 lg:py-20 px-10 sm:px-0">

                {/* Top Text Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 lg:mb-24">

                    {/* Left Column - Text Sections */}
                    <div className="sec lg:col-span-5">
                        {/* FIGMA FIRST Section */}
                        <div className="group border border-[#F9FFEB] p-5 sm:p-10">
                            <h2 className="text-xl lg:text-2xl font-bw-gradual font-bold text-white mb-3 uppercase tracking-tight leading-tight">
                                FIGMA FIRST
                            </h2>
                            <p className="text-md text-white/90 leading-relaxed font-ubuntu font-light max-w-2xl">
                                We design your entire site in Figma before writing a single line of code. You see the exact look, feel, and flow before launch. So there are no surprises, no delays, and no settling for "good enough."
                            </p>
                        </div>

                        {/* 0 TEMPLATES Section */}
                        <div className="group border border-[#F9FFEB] p-5 sm:p-10">
                            <h2 className="text-xl lg:text-2xl font-bw-gradual font-bold text-white mb-3 uppercase tracking-tight leading-tight">
                                0 TEMPLATES
                            </h2>
                            <p className="text-md text-white/90 leading-relaxed font-ubuntu font-light max-w-2xl">
                                No basic boring themes. No recycled layouts. Every site we build is custom-crafted for your brand, your audience, and your goals so you stand out in a sea of look-alike competitors.
                            </p>
                        </div>

                        {/* CONVERSIONS OPTIMIZED Section */}
                        <div className="group border border-[#F9FFEB] p-5 sm:p-10 rounded-br-[20px]">
                            <h2 className="text-xl lg:text-2xl font-bw-gradual font-bold text-white mb-3 uppercase tracking-tight leading-tight">
                                CONVERSIONS OPTIMIZED
                            </h2>
                            <p className="text-md text-white/90 leading-relaxed font-ubuntu font-light max-w-2xl">
                                We're experts in WordPress and Shopify, building sites that load fast, rank higher, and convert visitors into paying customers. Every element is engineered for performance, not just looks.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Figma Interface */}
                    <div className="lg:col-span-7 ">
                        <div className="relative border border-[#F9FFEB] p-8 rounded-[20px]">
                            <img
                                src={IMAGES.Figma_Img}
                                alt="Figma Design Interface"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                            {/* Optional overlay for better visual hierarchy */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
                        </div>
                    </div>
                </div>


                {/* Icon-based Features Section */}
                <div className="responsive-grid mb-12 lg:mb-34 max-w-5xl mx-auto">
                    {/* UNLIMITED UPDATES */}
                    <div className="text-center ">
                        <div className="mb-4 flex justify-center">
                            <IconOne />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                            UNLIMITED<br />UPDATES
                        </h3>
                        <p className=" text-white/90 leading-relaxed">
                            Your subscription includes unlimited website changes—new sections, fresh graphics, updated copy, or advanced coding tweaks. Your site stays current, competitive, and ready to sell 24/7.
                        </p>
                    </div>

                    {/* DEDICATED SLACK / CLICKUP BOARD */}
                    <div className="text-center">
                        <div className="mb-4 flex justify-center">
                            <IconTwo />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                            DEDICATED SLACK /<br />CLICKUP BOARD
                        </h3>
                        <p className=" text-white/90 leading-relaxed">
                            Depending on your subscription plan, get a private Slack channel or ClickUp board for direct communication with our team. Instant updates, faster turnarounds and priority.
                        </p>
                    </div>

                    {/* FULL OWNERSHIP & FLEXIBILITY */}
                    <div className="text-center">
                        <div className="mb-4 flex justify-center">
                            <IconThere />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                            FULL OWNERSHIP &<br />FLEXIBILITY
                        </h3>
                        <p className=" text-white/90 leading-relaxed">
                            Once your site is built, it's 100% yours no lock-ins. We hand over clean, well-documented code and admin access so you can scale, modify, or move your site anytime.
                        </p>
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-6xl font-extrabold leading-[40px] sm:leading-[65px] mb-4">
                        <span className="text-white font-light">YOUR </span>
                        <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic">FIXED</span><br />
                        <span className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic"> SUBSCRIPTION</span><br />
                        <span className="text-white font-light"> COVERS EVERYTHING</span>
                    </h2>
                    <p className="responsive-text text-white uppercase font-semibold sm:max-w-2xl mx-auto">
                        FROM NEW PAGES, PRODUCT UPLOADS, COUPONS, PHOTOS, VIDEOS, PROMO BANNERS YOU NAME IT, WE'VE GOT IT COVERED!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveDesignService;
