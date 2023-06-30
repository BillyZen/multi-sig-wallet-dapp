import Link from "next/link";
import styles from "./new.module.scss";

export default async function New() {
  return (
    <>
      <Link href="/" className={styles.link}>
        Click to return home
      </Link>
    </>
  );
}
