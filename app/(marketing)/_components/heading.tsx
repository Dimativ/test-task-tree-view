"use client"

import {ArrowRight} from "lucide-react";
import Link from "next/link";

import {Button} from "@/components/ui/button";


export const Heading = () => {

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Documents & Images. Unified. Welcome to <span
                className="underline">Lytvynenko Cloud</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Lytvynenko Cloud is the cloud where <br/>
                better & faster.
            </h3>
            <Button asChild>
                <Link href="/documents">
                    Enter Cloud
                    <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
            </Button>
        </div>
    );
}
