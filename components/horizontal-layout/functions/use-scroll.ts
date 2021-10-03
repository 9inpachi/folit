import { WheelEventHandler } from "react";

export const useScroll = () => {
  let translateX = 0;

  const onWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    translateX -= event.deltaX ? event.deltaX : event.deltaY;
    if (translateX < 0) {
      event.currentTarget.style.transform = `translateX(${translateX}px)`;
    }
  };

  return { onWheel };
};
