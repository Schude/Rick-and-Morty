import Link from "next/link";
import styles from "../components-styles/rickandmort.module.css";

function cardContainer({ chars }) {

  return (
    <div>
      <div className={styles.container}>
        {chars && chars.results.map((char) => (
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

export default cardContainer;
