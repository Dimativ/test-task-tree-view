import {LucideIcon} from "lucide-react";

import {cn} from "@/lib/utils";

interface ItemProps {
    active?: boolean;
    label: string;
    onClick: () => void;
    icon: LucideIcon;
}

export const Item = ({active, label, onClick, icon: Icon}: ItemProps) => {

    return (
        <div
            onClick={onClick}
            role="button"
            className={cn("pl-[12px] group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
                active && "bg-primary/5 text-primary"
            )}
        >
            <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground"/>
            <span className="truncate">
                {label}
            </span>
        </div>
    );
}