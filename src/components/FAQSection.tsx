
import React from 'react';
import Accordion, { type AccordionItem } from './ui/accordion';

const FAQSection: React.FC = () => {
    const faqItems: AccordionItem[] = [
        {
            id: 'question-1',
            title: 'QUESTION TITLE #1',
            isExpanded: true,
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            )
        },
        {
            id: 'question-2',
            title: 'QUESTION TITLE #2',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            )
        },
        {
            id: 'question-3',
            title: 'QUESTION TITLE #3',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            )
        },
        {
            id: 'question-4',
            title: 'QUESTION TITLE #4',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            )
        },
        {
            id: 'question-5',
            title: 'QUESTION TITLE #5',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Title Section */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-wide">
                    FREQUENTLY
                </h2>
                <h2 className="bg-gradient-to-r from-[#B0E63B] via-[#E0E23B] to-[#E0E23B] bg-clip-text text-transparent italic text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wide ">
                    ASKED
                </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-8 sm:mb-12 ">
                <Accordion
                    items={faqItems}
                    allowMultiple={false}
                    className="space-y-3 sm:space-y-4 lg:space-y-5"
                    itemClassName="border border-[#B0E63B] rounded-lg sm:rounded-xl lg:rounded-2xl"
                    titleClassName="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl uppercase"
                    contentClassName=""
                />
            </div>

            {/* Promotional Text */}
            <p className="text-[#B0E63B] text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
                We offer flexible subscriptions for growing businesses. Whether you need 1 shoot/month or weekly content, we'll tailor a solution that fits your business and budget. Save thousands annually compared to per-project pricing.
            </p>
        </div>
    );
};

export default FAQSection;
