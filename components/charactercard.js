import React from "react";
import Link from "next/link";
import slug from "slug";
import styles from "../styles/mainWrapper.module.css";

const charactercard = ({characters}) => {
  
    
  return (
<section className={styles.cardsLayout}>
    <div className = {styles.cardsContainer}>
    
    {characters && characters.map((character) => (
      <article id= {character.id} className={styles.characterCard}>
      <div className={styles.characterImage}>
        <img
          className={styles.image}
          src={character.image}
        ></img>
      </div>
      <div className={styles.characterContent}>
        <div className={styles.contentSection}>
          <Link href={`../[slug]`} as={`../${slug(character.name)}-${character.id}`}>
            <a className={styles.characterLink}>
              <h2>{character.name}</h2>
            </a>
          </Link>
          <span className={styles.characterStatus}>{character.status} - {character.species}</span>
        </div>

        <div className={styles.contentSection}>
          <span className={styles.textGray}>Origin</span>
          <Link href="#">
            <a className={styles.characterLink}> {character.origin.name}</a>
          </Link>
        </div>
        <div className={styles.contentSection}>
          <span className={styles.textGray}>First Seen in:</span>
          <Link href="#">
            <a className={styles.characterLink}> {character.location.name}</a>
          </Link>
        </div>
      </div>
      </article>
    ))}
      
    </div>
    </section>
  );
}
export default charactercard;
//Fetch Yapamıyoruk



