import { FC, useRef } from "react";
import { useScroll } from "./functions/use-scroll";

import styles from "./horizontal-scroll.module.scss";

export const HorizontalScroll: FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { onWheel } = useScroll(wrapperRef);

  return (
    <div ref={wrapperRef} className={styles.horizontalScroll} onWheel={onWheel}>
      {children}
    </div>
  );
};
