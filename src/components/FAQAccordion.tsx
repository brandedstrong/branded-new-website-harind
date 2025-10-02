import React from 'react';
import Accordion, { type AccordionItem } from './ui/accordion';

const FAQAccordion: React.FC = () => {
    const faqItems: AccordionItem[] = [
        {
            id: 'wordpress-design',
            title: 'WORDPRESS WEB DESIGN',
            isExpanded: true,
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base">
                        We handle everything — whether you're fixing issues, adding features, or scaling your site.
                        Need new pages? Forms? Bookings? A blog? We take care of it all, so you never have to Google
                        how to do it again.
                    </p>
                </div>
            ),
            ctaText: 'Got a specific request?',
            ctaSubtext: 'Call us to confirm—we\'ll tell you exactly what\'s included and how fast we can deliver it.',
            tags: [
                'Landing',
                'Rebranding',
                'Logo Design',
                'Landing Pages',
                'Wireframing',
                'Custom Forms',
                'Rapid prototyping',
                'Updates',
                'User Research & Testing'
            ]
        },
        {
            id: 'shopify-ecommerce',
            title: 'SHOPIFY & ECOMMERCE DESIGN',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base">
                        Complete e-commerce solutions for your online store. From custom themes to payment integration,
                        we build Shopify stores that convert visitors into customers.
                    </p>
                </div>
            ),
            tags: [
                'Custom Themes',
                'Payment Integration',
                'Product Catalogs',
                'Checkout Optimization',
                'Mobile Commerce',
                'SEO Optimization'
            ]
        },
        {
            id: 'custom-code',
            title: 'CUSTOM CODE & SITE EDITS',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base">
                        Need custom functionality or specific modifications? Our developers create tailored solutions
                        that integrate seamlessly with your existing website.
                    </p>
                </div>
            ),
            tags: [
                'Custom Features',
                'API Integration',
                'Database Development',
                'Performance Optimization',
                'Security Updates',
                'Third-party Integrations'
            ]
        },
        {
            id: 'graphic-design-online',
            title: 'GRAPHIC DESIGN FOR ONLINE USE',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base">
                        Professional graphics designed specifically for digital platforms. From social media assets
                        to web graphics, we create visuals that engage and convert.
                    </p>
                </div>
            ),
            tags: [
                'Social Media Graphics',
                'Web Banners',
                'Email Templates',
                'Digital Ads',
                'Infographics',
                'Brand Assets'
            ]
        },
        {
            id: 'graphic-design-print',
            title: 'GRAPHIC DESIGN FOR PRINT & SIGNAGE',
            content: (
                <div className="space-y-4">
                    <p className="text-white leading-relaxed text-sm sm:text-base">
                        High-quality print materials and signage that represent your brand professionally.
                        From business cards to large format displays, we handle all your print design needs.
                    </p>
                </div>
            ),
            tags: [
                'Business Cards',
                'Brochures',
                'Flyers',
                'Banners',
                'Signage',
                'Packaging Design'
            ]
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
            <Accordion
                items={faqItems}
                allowMultiple={false}
                className="space-y-3 sm:space-y-4"
                itemClassName="border border-[#B0E63B] rounded-lg"
                titleClassName="text-white font-bold text-sm sm:text-base lg:text-lg uppercase"
                contentClassName=""
            />
        </div>
    );
};

export default FAQAccordion;
