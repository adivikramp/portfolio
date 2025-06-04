import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import type { CompanyCardProps } from "@/types/types"

const CompanyCard = ({ id, logo, name, role, description, date }: CompanyCardProps) => {
    return (
        <div className="flex gap-x-4 items-start">
            {/* Image */}
            <div className="flex items-center min-h-[44px]">
                <img
                    src={`${logo ? logo : "/images/profile.jpg"}`}
                    className="h-12 w-12 rounded-full"
                />
            </div>
            {/* Content */}
            <Accordion
                type="single"
                collapsible
                className="w-full flex-1"
                defaultValue="item-1"
            >
                <AccordionItem
                    value={String(id)}
                    className="flex flex-col items-start"
                >
                    <div className="min-h-[48px] flex flex-col justify-center">
                        <AccordionTrigger className="flex items-center gap-x-1">
                            <span>{name}</span>
                        </AccordionTrigger>
                        <span className="text-sm">{role}</span>
                    </div>
                    <AccordionContent className="flex flex-col gap-4 text-balance pt-2">
                        <p>
                            {description}
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            {/* Date */}
            <div className="flex items-center min-h-[50px]">
                <p className="font-semibold text-sm tracking-wide">{date}</p>
            </div>
        </div>
    )
}

export default CompanyCard