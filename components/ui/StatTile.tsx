import styles from "./StatTile.module.css";

type StatTileProps = {
  value: string;
  caption: string;
};

export default function StatTile({ value, caption }: StatTileProps) {
  return (
    <div className={styles.stat}>
      <b className={styles.value}>{value}</b>
      <span className={styles.caption}>{caption}</span>
    </div>
  );
}
