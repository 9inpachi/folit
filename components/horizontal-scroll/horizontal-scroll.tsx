import { FC } from "react";

import styles from "./horizontal-scroll.module.scss";

export const HorizontalScroll: FC = ({ children }) => {
  return (
    <div
      className={styles.horizontalScroll}
      onScroll={(e) => {
        e.preventDefault();
        console.log((e.target as HTMLDivElement).scrollLeft);
      }}
    >
      {children}
    </div>
  );
};
