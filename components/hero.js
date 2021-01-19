import React from 'react'
import Siluet from "../components/icons/Siluet";
import styles from "../styles/hero.module.css";
export default function Hero() {
    return (
        <section className={styles.heroWrapper}>
          <h1 className={styles.mainTitle}>Rick and Morty</h1>
          <h1 className={styles.mainTitle}>Characters</h1>

          <div className={styles.mainImage}>
            <Siluet />
          </div>
        </section>
    )
}
