import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Siluet from "../components/icons/Siluet";
import styles from "../styles/mainWrapper.module.css";
import Character from "../components/charactercard";
import unfetch from "isomorphic-unfetch";

const Home = ({ characters }) => {
  console.log(characters);
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

        <Character characters={characters} />
      </main>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  //Duplicate Check et
  const charArr = [];
  for (let i = 0; i < 5; i++) {
    const id = Math.floor(Math.random() * 671);
    const res = await unfetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const char = await res.json();
    charArr.push(char);
  }

  return {
    props: {
      characters: charArr,
    },
  };
};
/**
 
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
