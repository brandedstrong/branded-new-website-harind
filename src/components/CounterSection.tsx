import { IMAGES } from '@/constants/images';
import PrimaryButton from './PrimaryOutline';

interface StatisticItem {
    value: string;
    primaryText: string;
    secondaryText: string;
}

const CounterSection = () => {
    const statistics: StatisticItem[] = [
        {
            value: "87%",
            primaryText: "HIGHER ENGAGEMENT",
            secondaryText: "VS STATIC CONTENT"
        },
        {
            value: "54%",
            primaryText: "LOWER CPC",
            secondaryText: "VIDEO ADS VS IMAGE ADS"
        },
        {
            value: "80%",
            primaryText: "CONVERSION INCREASE",
            secondaryText: "ON LANDING PAGES"
        },
        {
            value: "12X",
            primaryText: "MORE SHARES",
            secondaryText: "THAN TEXT + IMAGES"
        }
    ];

    return (
        <div className="relative bg-black overflow-hidden py-16 lg:py-24" style={{ backgroundImage: `url(${IMAGES.Power_Img})` }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto bg-center bg-cover p-6 md:p-16 rounded-[0px] sm:rounded-[30px]" style={{ backgroundImage: `url(${IMAGES.Glans_Img})` }}>
                    {/* Main Heading */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h1 className="hidden sm:block sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
                            <span className='font-light'>THE</span>
                            <span
                                className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                POWER
                            </span>
                            <span className='font-light'>OF</span> <br className='hidden md:block' /> VIDEO MARKETING
                        </h1>
                        <h1 className="block sm:hidden text-5xl font-bold text-white leading-tight uppercase">
                            <span className='font-light'>THE</span>
                            <span
                                className="bg-gradient-to-r mx-1 from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                POWER
                            </span> <br />
                            <span className='font-light'>OF</span> <br className='hidden md:block' /> VIDEO <br /> MARKETING
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg  text-white/90 mt-4 uppercase font-medium">
                            INDUSTRY STATS THAT PROVE VIDEO DRIVES RESULTS
                        </p>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-10">
                        {statistics.map((stat, index) => (
                            <div key={index} className="text-center">
                                {/* Large Number/Percentage */}
                                <div
                                    className="text-6xl  md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent"
                                    style={{
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {stat.value}
                                </div>

                                {/* Primary Descriptor */}
                                <div className={`text-sm text-center sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase mb-1 max-w-[150px] mx-auto ${index === 1 ? "sm:!max-w-[100px] !max-w-[80px]" : "!max-w-[150px]"}`}>

                                    {stat.primaryText}
                                </div>

                                {/* Secondary Descriptor */}
                                <div className="text-xs text-white/80 uppercase">
                                    {stat.secondaryText}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}

                    <div className="text-center flex items-center justify-center ">
                        <PrimaryButton title="GET STARTED WITH MONTHLY VIDEO" className='max-w-[290px]' onClick={() => { }} />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CounterSection;
