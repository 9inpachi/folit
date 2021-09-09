import { RefObject, WheelEventHandler } from "react";

export const useScroll = (wrapperRef: RefObject<HTMLDivElement>) => {
  const onWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += event.deltaY;
    }
  };

  return { onWheel };
};
