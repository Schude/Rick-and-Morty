import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Siluet from '../components/icons/Siluet'
import styles from '../styles/mainWrapper.module.css'
export default function Home() {
  return (
    <div>
    
      <Layout/>

      <main className={styles.mainLayout}>
        <section className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>Rick and Morty </h1>
     {/*      <h1 className={styles.mainTitle}></h1> */}
          <div className={styles.mainImage}>
            <Siluet />
          </div>
        </section>
        <section className = {styles.cardsLayout}>
        <div className = {styles.cardsContainer}>
          <article className = {styles.characterCard}></article>
          <article className = {styles.characterCard}></article>
          <article className = {styles.characterCard}></article>
          <article className = {styles.characterCard}></article>
          <article className = {styles.characterCard}></article>
        </div>

        </section>
      </main>

    </div>
  );
}
