import Link from "next/link";
import styles from "./newer.module.scss";

export default async function Newer() {
  return (
    <>
      <Link href="/" className={styles.link}>
        Click to return home
      </Link>
    </>
  );
}
