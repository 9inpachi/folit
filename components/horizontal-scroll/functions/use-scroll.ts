import { WheelEventHandler } from "react";

export const useScroll = () => {
  const onWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.scrollLeft += event.deltaY;
  };

  return { onWheel };
};
