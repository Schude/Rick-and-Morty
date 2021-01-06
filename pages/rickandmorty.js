import Layout from "../components/Layout/layout";
import styles from "../components/components-styles/rickandmort.module.css";
import React from "react";
import Link from "next/link";


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
        <Link href="./rickandmorty/locations/pages/[page]" as = {`./rickandmorty/locations/pages/${1}`}>
          <a>Locations</a>
        </Link>
       
      </div>
    );
  }
}

