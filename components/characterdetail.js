import React from "react";

import styles from "../styles/characterDetail.module.css";

export default function Characterdetail({ character }) {
  
  /**
   * Origin.url alıcaz oradan
   *
   *
   */
  return (
    <section className={styles.characterLayout}>
      <div className={styles.characterContainer}>
        <div className={styles.characterImage}>
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
          ></img>
        </div>

        <div className={styles.detailContent}>
          <div className={styles.detailSection}>
            <h2>{character.name} </h2> {/* characterName  */}
            <span>Status: {character.status} </span>
            <span>Species: {character.species} </span>
            <span>Type:{character.type} </span>
            <span>Gender: {character.gender} </span>
            <span>Created:{character.created} </span>
          </div>

          <div className={styles.detailSection}>
            <span>Origin: {character.origin.name} </span>
            {/*  Fetchden buraya Dimension
              Buraya Type Gelecek */}
            <span>Last Seen in:{character.location.name} </span>
            <span>Created:{character.created} </span>
          </div>
        </div>
      </div>
    </section>  
  );
}
