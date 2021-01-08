import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/rickandmorty">
            <a>Rick and Morty</a>
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}

export default Navbar;
