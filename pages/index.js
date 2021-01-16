import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Siluet from "../components/icons/Siluet";
import styles from "../styles/mainWrapper.module.css";
import Character from "../components/charactercard";
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
            <Character />
            <Character />
            <Character />
            <Character />
          </div>
        </section>
      </main>
    </div>
  );
}
/**
 * Character component i ne fetch yaptırıcaz rastlege 5 karakter
 * Karakterler sayfasını düzelticez uzun iş
 * Search ve pagination dizaynı
 * Footer ?
 * Contact Page
 * About Page
 * Homepage "Viel all Character ??"
 * Character Detail Sayfası
 * Locationslar
 * 

 */