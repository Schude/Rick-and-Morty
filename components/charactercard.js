import React from "react";
import Link from "next/link";
import slug from "slug";
import styles from "../styles/cards.module.css";

const charactercard = ({ characters }) => {
  return (
    /*  */
    <section className={styles.cardsLayout}>
      <div className={styles.cardsContainer}>
        {characters &&
          characters.map((character) => (
            <article key={character.id} className={styles.characterCard}>
              <div className={styles.characterImage}>
                <img
                  className={styles.image}
                  src={character.image|| "/public/contact-bg.png"}
                  alt={character.name || "Default"}
                ></img>
              </div>
              <div className={styles.characterContent}>
                <div className={styles.contentSection}>
                  <Link
                    href={`/characters/[slug]`}
                    as={`/characters/${slug(character.name)}-${character.id}`}
                  >
                    <a className={styles.characterLink}>
                      <h2>{character.name || "Default"}</h2>
                    </a>
                  </Link>
                  <span className={styles.characterStatus}>
                    <span
                      className={styles.characterAlive}
                      style={
                        character.status  === "Alive"
                          ? { color: "#5c4" }
                          : character.status === "Dead"
                          ? { color: "#d63d2e" }
                          : {}
                      }
                    >
                      {character.status || "Default"}
                    </span>
                    {` - ${character.species || "Default"}`}
                  </span>
                </div>

                <div className={styles.contentSection}>
                  <span className={styles.textGray}>Origin</span>
                  <Link href="/">
                    <a className={styles.characterLink}>
                      {character.origin.name || "Default"}
                    </a>
                  </Link>
                </div>
                <div className={styles.contentSection}>
                  <span className={styles.textGray}>First Seen in:</span>
                  <Link href="/">
                    <a className={styles.characterLink}>
                      {" "}
                      {character.location.name || "Default"}
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};
export default charactercard;
