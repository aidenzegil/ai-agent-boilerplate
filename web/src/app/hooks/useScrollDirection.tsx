// To use this hook:
// in page.tsx: import useScrollController, { ScrollDirection, } from "./hooks/useScrollDirection";
// in page.tsx function: const { scrollDirection } = useScrollController();
// in page.tsx set component (NavBar and Footer) prop visible to visible={scrollDirection === ScrollDirection.Up}

// useEffect requires client-side
"use client";

// imports
import { useState, useEffect } from "react";

// enum to hold scroll direction
export enum ScrollDirection {
  Up = "Up",
  Down = "Down",
}

// initialize direction type
type ScrollControllerParams = {
  defaultDirection?: ScrollDirection;
};

// scroll controller hook
const useScrollController = (
  { defaultDirection }: ScrollControllerParams = {
    defaultDirection: ScrollDirection.Up,
  }
) => {
  // initialize state variables for screen position and visibility
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(defaultDirection);

  // Effect hook that is triggered by changes in visibility/user scrolling and component mount
  useEffect(() => {
    // define footer visibility depending on scroll position
    const handleScroll = () => {
      const newScrollPos = window.scrollY;

      // main logic for scroll direction
      setScrollDirection(
        scrollPos < newScrollPos ? ScrollDirection.Down : ScrollDirection.Up
      );
      setScrollPos(newScrollPos);
    };

    // event listener that calls handleScroll function on user scroll
    window.addEventListener("scroll", handleScroll);

    // remove event listener whenever component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos, scrollDirection]);

  return { scrollPos, scrollDirection };
};

export default useScrollController;
