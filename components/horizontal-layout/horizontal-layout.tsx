import { FC, useRef } from "react";
import { useScroll } from "./functions/use-scroll";

import styles from "./horizontal-layout.module.scss";

export const HorizontalLayout: FC = ({ children }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const horizontalScroll = useRef<HTMLDivElement>(null);

  useScroll(wrapper, horizontalScroll);

  return (
    <div ref={wrapper} className={styles.horizontalLayout}>
      <div ref={horizontalScroll} className={styles.horizontalScroll}>
        {children}
      </div>
    </div>
  );
};
