import Layout from "../components/Layout/layout";
import styles from "../components/components-styles/rickandmort.module.css";
import Card from "../components/rick-and-morty/card";
import Link from "next/link";

function rick() {
  return (
    <div>
      <h1 className={styles.greet}>Rick And Morty</h1>
      <Layout />

        <Card />

      <Link href="./characters/[id]" as ="./characters/1">
        <a>First</a>
      </Link>
      <Link href="./characters/[id]" as ="./characters/2">
        <a>Second</a>
      </Link>
      <Link href="./characters/[id]" as ="./characters/3">
        <a>Third</a>
      </Link>
    </div>
  );
}

export default rick;
