import type { ReactNode } from "react";
import styles from "./Terminal.module.css";

type TerminalProps = {
  title: string;
  children: ReactNode;
};

export default function Terminal({ title, children }: TerminalProps) {
  return (
    <div className={styles.term}>
      <div className={styles.bar}>
        <i className={styles.dot} />
        <i className={styles.dot} />
        <i className={styles.dot} />
        <span className={styles.title}>{title}</span>
      </div>
      <pre className={styles.body}>{children}</pre>
    </div>
  );
}
