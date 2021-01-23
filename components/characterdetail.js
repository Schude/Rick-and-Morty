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
            <h2 className={styles.characterName}>{character.name}</h2>{" "}
            <span>Status: {character.status} </span>
            <span>Species: {character.species} </span>
            <span>
              Type: {character.type ? `${character.type}` : "Unknown"}{" "}
            </span>
            <span>Gender: {character.gender} </span>
            <span>Created: {character.created} </span>
          </div>
        </div>

        <div className={styles.deneme}>
          <span>Origin: {character.origin.name} </span>
          <span>Dimension BlaBla</span>
          <span>Type : BlaBla Bla</span>
          <span>Last Seen in:{character.location.name} </span>
          <span>Created:{character.created} </span>
        </div>

        <div className={styles.residents}>
          <h2 className={styles.characterName}>
            Residents of {character.origin.name}
          </h2>
          <div classnames={styles.icons}>
            <span>asda</span>
            <span>asda</span>
            <span>asda</span>
            <span>asda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
