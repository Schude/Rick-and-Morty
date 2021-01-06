import Layout from "../components/Layout/layout";
import styles from "../components/components-styles/rickandmort.module.css";
import React from "react";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";

export default class rick extends React.Component {
  render() {
    /**
     * ****Location Div ****
     * *Locationların olduğu yere götürecek
     * *Search Component
     * *Pagination
     * *locs Component
     *
     ***** Character Div*****
     
     * *Search Component
     
     */
    return (
      <div>
        <h1 className={styles.greet}>Rick And Morty</h1>

        <Layout />
        
        <Link
          href={`./rickandmorty/characters/pages/[pages]`}
          as={`./rickandmorty/characters/pages/${1}`}
        >
          <a>Characters</a>
        </Link>
        <Link href="./rick-and-morty/locations" as="">
          <a>Locations</a>
        </Link>
       
      </div>
    );
  }
}

export const getStaticProps = async () => {
  const res = await unfetch("https://rickandmortyapi.com/api/character");
  const chars = await res.json();

  return {
    props: {
      chars,
    },
  };
};
