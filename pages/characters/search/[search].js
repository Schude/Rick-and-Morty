import unfetch from "isomorphic-unfetch";
import React from "react";
import Card from "../../../components/card";
import Search from "../../../components/search";
import _ from "lodash";
const searchpage = (chars) => {
  return (
    <div>
      <h1>Search Page</h1>
      <h2>{chars.results.length} Toplam Sonuç</h2>
      <Search />

      <Card chars={chars} />
    </div>
  );
};

searchpage.getInitialProps = async ({ query }) => {
  let res1 = await unfetch(`https://rickandmortyapi.com/api/character/?page=${1}&name=${query.search}`);
  let data1 = await res1.json();
  const numOfPages = data1.info.pages
  let datax = data1.results;
  for (let i = 2; i < numOfPages+1; i++) {
    let res = await unfetch(
      `https://rickandmortyapi.com/api/character/?page=${i}&name=${query.search}`
    );
    let data = await res.json();
    datax = _.concat(datax, data.results);
  }

  
  data1.results = datax;
  

  return data1;
 
};

export default searchpage;

