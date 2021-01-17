import React, { useState } from "react";
import { useRouter } from "next/router";
const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    router.push("/search/[search]", `/search/${query}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={query}
          name="value"
          type="text"
          placeholder="Search..."
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
