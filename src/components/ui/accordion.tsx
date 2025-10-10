import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
    isExpanded?: boolean;
    tags?: string[];
    ctaText?: string;
    ctaSubtext?: string;
}

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    className?: string;
    itemClassName?: string;
    titleClassName?: string;
    contentClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    className = '',
    itemClassName = '',
    titleClassName = '',
    contentClassName = '',
}) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
        const expandedIds = items.filter(item => item.isExpanded).map(item => item.id);
        // If no items are marked as expanded, expand the first item by default
        if (expandedIds.length === 0 && items.length > 0) {
            expandedIds.push(items[0].id);
        }
        return new Set(expandedIds);
    });

    const toggleItem = (itemId: string) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);

            if (newSet.has(itemId)) {
                newSet.delete(itemId);
            } else {
                if (!allowMultiple) {
                    newSet.clear();
                }
                newSet.add(itemId);
            }

            return newSet;
        });
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item) => {
                const isExpanded = expandedItems.has(item.id);

                return (
                    <div
                        key={item.id}
                        className={`border border-[#B0E63B] !rounded-[20px] overflow-hidden ${itemClassName}`}
                    >
                        {/* Accordion Header */}
                        <button
                            onClick={() => toggleItem(item.id)}
                            className={`w-full px-6 py-4 text-left flex items-center justify-between bg-transparent cursor-pointer transition-colors duration-200 ${titleClassName}`}
                        >
                            <span className="text-white font-bold text-sm sm:text-base lg:text-lg uppercase pr-4">
                                {item.title}
                            </span>
                            <div className="flex items-center flex-shrink-0">
                                {isExpanded ? (
                                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0E63B]" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#B0E63B]" />
                                )}
                            </div>
                        </button>

                        {/* Accordion Content */}
                        {isExpanded && (
                            <div className={`px-4 sm:px-6 pb-4 sm:pb-6 ${contentClassName}`}>
                                <div className="text-white space-y-4">
                                    {item.content}

                                    {/* CTA Section */}
                                    {(item.ctaText || item.ctaSubtext) && (
                                        <div className="space-y-2">
                                            {item.ctaText && (
                                                <p className="text-[#B0E63B] font-medium text-sm sm:text-base">
                                                    {item.ctaText}
                                                </p>
                                            )}
                                            {item.ctaSubtext && (
                                                <p className="text-white text-xs sm:text-sm">
                                                    {item.ctaSubtext}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {/* Tags */}
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 sm:px-3 py-2 border border-white rounded-[6px] text-white text-xs sm:text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
