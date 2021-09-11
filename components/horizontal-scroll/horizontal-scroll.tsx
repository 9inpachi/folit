import { FC } from "react";
import { useScroll } from "./functions/use-scroll";

import styles from "./horizontal-scroll.module.scss";

export const HorizontalScroll: FC = ({ children }) => {
  const { onWheel } = useScroll();

  return (
    <div className={styles.horizontalScroll} onWheel={onWheel}>
      {children}
    </div>
  );
};
