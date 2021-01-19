import Link from "next/Link";
import SvgRickMorty from "../icons/RickMorty";
import styles from "../../styles/header.module.css";

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.navbar}>
        <Link href="/" >  
          <a className={styles.homePage}>
            <SvgRickMorty />{" "}
          </a>
        </Link>
        <ul className={styles.nav_container}>
          <li className={styles.items}>
            <Link
              href={`/characters/pages/[pages]`}
              as={`/characters/pages/${1}`}
              className={styles.items}
            >
              <a>Characters</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.items}>
            <Link href="/contact" as= "/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
