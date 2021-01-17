import React from "react";
import Layout from "../components/Layout/layout";
import styles from "../styles/mainWrapper.module.css";
import unfetch from "isomorphic-unfetch";
import Character from "../components/charactercard";
import Hero from "../components/hero";

const Home = ({ characters }) => {
  return (
    <Layout title="Rick and Morty">
      <main className={styles.mainLayout}>
        <Hero />

        <Character characters={characters} />
      </main>
    </Layout>
  );
};
export default Home;

export const getStaticProps = async () => {
  //Duplicate Check et
  let charArr = [];
  for (let i = 0; i < 5; i++) {
    const id = Math.floor(Math.random() * 671);
    const res = await unfetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const char = await res.json();
    /* charArr.push(char); */
    charArr = [...charArr, char];
  }

  return {
    props: {
      characters: charArr,
    },
  };
};
/**
 
 * 
 * Search ve pagination dizaynı
 * Footer ?
 * Contact Page
 * About Page
 * Homepage "Viel all Character ??"
 * Character Detail Sayfası
 * Locationslar
 * 

 */
