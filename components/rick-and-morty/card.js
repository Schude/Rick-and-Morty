import Link from "next/link";
import styles from "../components-styles/rickandmort.module.css";
import unfetch from "isomorphic-unfetch";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (page) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const [chars, setChars] = useState();

  useEffect(async () => {
    const res = await unfetch(url);
    const data = await res.json();
    setChars(data);
  }, [page]);
  return { chars, url };
};

function cardContainer() {
  const [page, setPage] = useState(3);
  const { chars } = useFetch(page);
  /**
   * pagination. Component
   * SearchBox Component
   */   
  return (
    <div>
      <p>Page: {page}</p>
      <button onClick={() => setPage((curr) => curr - 1)}>Prev Page</button>
      <button onClick={() => setPage((curr) => curr + 1)}>Next Page</button>
      <Link href={`./characters/pages/[page]`} as={`./characters/pages/${page}`}>
        <a>2</a>
      </Link>
      

      <div className={styles.container}>
        {chars &&
          chars.results.map((char) => (
            <div key={char.id} className={styles.card}>
              <figure className={styles.imgBx}>
                <img className={styles.image} src={char.image}></img>
              </figure>

              <Link href={`./characters/[id]`} as={`./characters/${char.id}`}>
                <div className={styles.test}>
                  <a className={styles.link}>{char.name}</a>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default cardContainer;
