"use client"

import {useEffect, useState} from "react";

export const useScrollTop = (threshold = 10) => {
    // detect when the user scroll or not
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true); // assume that user scroll
            } else {
                setScrolled(false); //when back to the top
            }
        }


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll) //unmount action
    }, [threshold]);

    return scrolled;
}
