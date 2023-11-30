import {ChevronDown, ChevronRight, LucideIcon, Plus} from "lucide-react";
import {toast} from "sonner";

import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";


interface ItemProps {
    id?: string;
    active?: boolean;
    expanded?: boolean;
    level?: number;
    onExpand?: () => void;
    label: string;
    onClick: () => void;
    icon: LucideIcon;
}

export const Item = ({id, active, level = 0, onExpand, expanded, label, onClick, icon: Icon}: ItemProps) => {


    const handleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
      onExpand?.();
    };

    const onCreate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();

        if (!id) return;

        toast.success("New folder created!");
    }

    const ChevronIcon = expanded ? ChevronDown : ChevronRight;


    return (
        <div
            onClick={onClick}
            role="button"
            style={{paddingLeft: level ? `${(level * 12) + 12}px` : "12px"}} // give it due to we'll reuse this component
            className={cn("group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
                active && "bg-primary/5 text-primary"
            )}
        >
            {!!id && (
                <div
                    role="button"
                    className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1"
                    onClick={handleExpand}
                >
                    <ChevronIcon className="w-4 h-4 shrink-0 text-muted-foreground/50"/>
                </div>
            )}
            <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground"/>
            <span className="truncate">
                {label}
            </span>
            {!!id && (
                <div className="ml-auto flex items-center gap-x-2">
                    <div
                        onClick={onCreate}
                        role="button"
                        className="opacity-0 group-hover:opacity-100 h-full
                    ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600">
                        <Plus className="h-4 w-4 text-muted-foreground"/>
                    </div>
                </div>
            )}
        </div>
    );
}

Item.Skeleton = function ItemSkeleton({level}: { level?: number }) {
    return (
        <div
            style={{paddingLeft: level ? `${(level * 12) + 25}px` : "12px"}}
            className="flex gap-x-2 py-[3px]"
        >
            <Skeleton className="h-4 w-4"/>
            <Skeleton className="h-4 w-[30%]"/>
        </div>
    );
}
