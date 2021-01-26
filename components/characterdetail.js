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

        <div className={styles.characterContent}>
          <div className={styles.contentSection}>
            <h2>{character.name}</h2>

            <span className={styles.characterStatus}>
              <span
                className={styles.characterAlive}
                style={
                  character.status === "Alive"
                    ? { color: "#5c4" }
                    : character.status === "Dead"
                    ? { color: "#d63d2e" }
                    : {}
                }
              >
                {character.status}
              </span>
              {` - ${character.species}`}
            </span>
          </div>

          <div className={styles.contentSection}>
            <span className={styles.textGray}>
              Gender:{" "}
              <span className={styles.contentText}>{character.gender}</span>
            </span>
            <span className={styles.textGray}>
              Type:{" "}
              <span className={styles.contentText}>
                {" "}
                {character.type === "" ? " Unknown" : character.type}
              </span>
            </span>
          </div>
          <div className={styles.contentSection}>
            <span className={styles.textGray}>
              Last Location:{" "}
              <span className={styles.contentText}>
                {character.location.name}
              </span>
            </span>
            <span className={styles.textGray}>
              Origin:{" "}
              <span className={styles.contentText}>
                {" "}
                {character.origin.name}
              </span>
            </span>
          </div>
          <div className={styles.contentSection}>
            <span className={styles.textGray}>
              Total Episodes:{" "}
              <span className={styles.contentText}>
                {character.episode.length}
              </span>
            </span>
            <span className={styles.textGray}>
              Created:{" "}
              <span className={styles.contentText}> {character.created}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
