import Link from "next/link";
import SvgRickMorty from '../icons/RickMorty'
import styles from "../../styles/navbar.module.css";

function Header() {
  return (
    <header className={styles.headerWrapper}>
      
      <nav className={styles.navbar}>
        <Link href = "/" className={styles.homePage}>
        <a><SvgRickMorty /></a>
        </Link>
        <ul className={styles.nav_container}>
          <li className={styles.items}>
            <Link href="./about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="./contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
