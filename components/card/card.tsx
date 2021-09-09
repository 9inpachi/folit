import { FC } from "react";

import styles from "./card.module.scss";

type Props = {
  title: string;
};

export const Card: FC<Props> = ({ title, children }) => (
  <section className={styles.cardSection}>
    <div className={styles.card}>
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);
