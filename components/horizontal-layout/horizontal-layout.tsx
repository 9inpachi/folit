import { FC } from "react";
import { useScroll } from "./functions/use-scroll";

import styles from "./horizontal-layout.module.scss";

export const HorizontalLayout: FC = ({ children }) => {
  const { onWheel } = useScroll();

  return (
    <div className={styles.horizontalScroll} onWheel={onWheel}>
      {children}
    </div>
  );
};
