import unfetch from "isomorphic-unfetch";
import React, { useState } from "react";
import Link from "next/Link";
import styles from '../../components/components-styles/rickandmort.module.css'
import Pagination from '../../components/rick-and-morty/page'
export default function Characters({ chars }) {
  const [pageNode, setPageNode] = useState(1);
    const page =   chars.info.next.slice(-1)
    /**
     * Tıklanıldığında Page Nodeu değiştirecez..
     */
  return (
    <div>
      <h1>Characters</h1>
      <h2>{pageNode}, Next PAGE</h2>

        <Pagination next = {page} to = "../characters/pages/[pages]" as = {`../characters/pages/${page}`} />
        <div onClick={() =>setPageNode(pageNode+1)}>
        <Link
        href={`../characters/pages/[pages]`}
        as={`../characters/pages/${page}`}
      >
        <a > {page}.sayfa componen depil</a>
      </Link>
        </div>
      

      <div className={styles.container}>
        {chars &&
          chars.results.map((char) => (
            <div key={char.id} className={styles.card}>
              <figure className={styles.imgBx}>
                <img className={styles.image} src={char.image}></img>
              </figure>

              <Link href={`../[id]`} as={`../${char.id}`}>
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

export const getStaticProps = async () => {
  const res = await unfetch("https://rickandmortyapi.com/api/character");
  const chars = await res.json();
  
  return {
    props: {
      chars,
    },
  };
};
