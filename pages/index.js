import styles from "../styles/rickandmort.module.css";
import React from "react";
import Link from "next/link";
import Search from "../components/search";
export default function Home() {
  return (
    <div>
      <h1 className={styles.greet}>Rick And Morty</h1>

      <Link href={`./characters/pages/[pages]`} as={`./characters/pages/${1}`}>
        <a>Characters</a>
      </Link>
      <Link href="./locations/pages/[page]" as={`./locations/pages/${1}`}>
        <a>Locations</a>
      </Link>
      <Search href = "./characters/search/[search]"/>
    </div>
  );
}

/* export default class rick extends React.Component {
  render() { */
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
/* return (
      <div>
        <h1 className={styles.greet}>Rick And Morty</h1>

        <Layout />

        <Link
          href={`./rickandmorty/characters/pages/[pages]`}
          as={`./rickandmorty/characters/pages/${1}`}
        >
          <a>Characters</a>
        </Link>
        <Link
          href="./rickandmorty/locations/pages/[page]"
          as={`./rickandmorty/locations/pages/${1}`}
        >
          <a>Locations</a>
        </Link>
      </div>
    );
  }
} */
