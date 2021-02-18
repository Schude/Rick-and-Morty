import React from "react";
import unfetch from "isomorphic-unfetch";
import Layout from "../components/Layout/layout";
import Character from "../components/charactercard";
import Hero from "../components/hero";

const Home = ({ characters }) => {
  return (
    <Layout title="Rick and Morty">
      <Hero/>
      <Character characters={characters} />
    </Layout>
  );
};
export default Home;

export const getStaticProps = async () => {
  //Duplicate Check et
  let charArr = [];
  for (let i = 0; i < 4; i++) {
    const id = Math.floor(Math.random() * 671);
    const res = await unfetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const char = await res.json();
    charArr = [...charArr, char];
  }
  return {
    props: {
      characters: charArr,
    },
    revalidate: 600,
  };
};

