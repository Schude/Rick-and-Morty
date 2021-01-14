import Link from "next/link";
import slug from "slug";
import styles from "../styles/rickandmort.module.css";

function cardContainer({ chars }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {chars &&
          chars.results.map((char) => (
            <div key={char.id} className={styles.card}>
              <figure className={styles.imgBx}>
                <img className={styles.image} src={char.image}></img>
              </figure>
              <div className = {styles.content}>
                <Link
                  href={`../[slug]`}
                  as={`../${slug(char.name)}-${char.id}`}
                >
                  <a className={styles.link}>{char.name}</a>
                </Link>{" "}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default cardContainer;
