import React from "react";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import styles from "../styles/mainWrapper.module.css";

export default function charactercard() {
    
  return (
    <article className={styles.characterCard}>
      <div className={styles.characterImage}>
        <img
          className={styles.image}
          src="https://rickandmortyapi.com/api/character/avatar/49.jpeg"
        ></img>
      </div>
      <div className={styles.characterContent}>
        <div className={styles.contentSection}>
          <Link href="#">
            <a className={styles.characterLink}>
              <h2>Blamph</h2>
            </a>
          </Link>
          <span className={styles.characterStatus}>Alive - Alien</span>
        </div>

        <div className={styles.contentSection}>
          <span className={styles.textGray}>Origin</span>
          <Link href="#">
            <a className={styles.characterLink}> Earth</a>
          </Link>
        </div>
        <div className={styles.contentSection}>
          <span className={styles.textGray}>First Seen in:</span>
          <Link href="#">
            <a className={styles.characterLink}> Bölüm bir şey</a>
          </Link>
        </div>
      </div>
    </article>
  );
}
//Fetch Yapamıyoruk



