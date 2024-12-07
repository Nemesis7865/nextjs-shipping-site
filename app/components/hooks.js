import { useState, useEffect } from "react";

// Hook to track window width
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
};

// Breakpoints for different screen sizes
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

// Hook to check if the screen width is below a certain breakpoint
export const useResponsiveness = (breakpoint) => {
    const windowWidth = useWindowWidth();

    // Check if the breakpoint exists in the BREAKPOINTS object
    if (!BREAKPOINTS[breakpoint]) {
        console.warn(`Invalid breakpoint: ${breakpoint}`);
        return false; // Default to false if breakpoint is invalid
    }

    // Return true if windowWidth is less than the breakpoint
    return windowWidth < BREAKPOINTS[breakpoint];
};
