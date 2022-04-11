import { RefObject, useEffect } from "react";

export const useScroll = (
  wrapper: RefObject<HTMLDivElement>,
  horizontalScroll: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const scrollElement = horizontalScroll.current;
    if (!scrollElement) return;

    const onWheel = (event: WheelEvent) => {
      scrollElement.scrollLeft += event.deltaY;
    };

    scrollElement.addEventListener("wheel", onWheel);

    return () => scrollElement.removeEventListener("wheel", onWheel);
  }, [horizontalScroll]);
};
