import styles from "./navbar.module.scss";
import Image from "next/image";

// Image
import logoImg from "../../public/resources/image/logo.png";
export default function Navbar() {
  return (
    <div>
      <button className={styles.btn}>
        <Image src={logoImg} alt="Room 410 logo" className={styles.logo} />
      </button>
    </div>
  );
}
