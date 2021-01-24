import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/search.module.css";
const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    router.push(
      "/characters/search-results/[search]",
      `/characters/search-results/${query}`
    );
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          onChange={handleChange}
          value={query}
          name="value"
          type="text"
          placeholder="Search..."
        ></input>
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
