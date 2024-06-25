import styles from "./page.module.scss";
import Navbar from "../../components/navbar/navbar";
import client from "./server/client";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <button className={styles.button}> click me</button>
    </main>
  );
}
