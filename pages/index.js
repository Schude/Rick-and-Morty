import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Siluet from "../components/icons/Siluet";
import styles from "../styles/mainWrapper.module.css";
export default function Home() {
  return (
    <div>
      <Layout />

      <main className={styles.mainLayout}>
        <section className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>Rick and Morty</h1>
          <h1 className={styles.mainTitle}>Characters</h1>
          <div className={styles.mainImage}>
            <Siluet />
          </div>
        </section>
        <section className={styles.cardsLayout}>
          <div className={styles.cardsContainer}>
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
                    <a className={styles.characterLink}><h2>Blamph</h2></a>
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
            <article className={styles.characterCard}></article>
            <article className={styles.characterCard}></article>
            <article className={styles.characterCard}></article>
          </div>
        </section>
      </main>
    </div>
  );
}
