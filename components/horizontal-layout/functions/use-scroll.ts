import { RefObject, useEffect, useState, WheelEventHandler } from "react";

interface Size {
  width: number;
  height: number;
}

export const useScroll = (
  wrapper: RefObject<HTMLDivElement>,
  horizontalScroll: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleResize = () => {
      wrapper.current?.style.setProperty(
        "width",
        horizontalScroll.current?.getBoundingClientRect().width + "px"
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [wrapper, horizontalScroll]);

  const scrollInfo = {
    currentX: 0,
    ease: 0.1,
    previous: 0,
    rounded: 0,
  };

  const smoothScroll = () => {
    scrollInfo.currentX = horizontalScroll.current?.scrollLeft ?? 0;
    scrollInfo.previous +=
      (scrollInfo.currentX - scrollInfo.previous) * scrollInfo.ease;
    scrollInfo.rounded = Math.round(scrollInfo.previous * 100) / 100;
    horizontalScroll.current?.style.setProperty(
      "transform",
      `translate3d(-${scrollInfo.rounded}px, 0, 0)`
    );

    requestAnimationFrame(() => smoothScroll());
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, []);
};
