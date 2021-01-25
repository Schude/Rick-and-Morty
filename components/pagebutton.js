import React from "react";
import Link from "next/link";
import styles from "../styles/pagebutton.module.css";

export default function Pagebutton({ current, text, value }) {
  let target;
  const CurrentPage = parseInt(current);
  if (text === "Next") {
    target = CurrentPage + 1;
  } else if (text === "Prev") {
    target = CurrentPage - 1;
  }
  return (
    <button
      className={styles.pageButton}
      style={
        target === 0 || target === 35 || value === "disabled"
          ? { display: "none" }
          : {}
      }
    >
      <Link href={`../pages/[page]`} as={`../pages/${target}`}>
        <a> {text} Page</a>
      </Link>
    </button>
  );
}
