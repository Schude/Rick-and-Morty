import unfetch from "isomorphic-unfetch";
import React from "react";
import Search from "../../../components/search";
import _ from "lodash";
import Charactercard from "../../../components/charactercard";
import Layout from "../../../components/Layout/layout";
const searchpage = (chars) => {
  return (
    
    <Layout title={`${chars.info[1].search} - Rick and Morty`}>
    <h1>Search Page</h1>
      <h2>{chars.results.length} Toplam Sonuç</h2>
      <Search />

      <Charactercard characters={chars.results} />
    </Layout>
      
      
    
  );
};

searchpage.getInitialProps = async ({ query }) => {
  let res = await unfetch(
    `https://rickandmortyapi.com/api/character/?page=${1}&name=${query.search}`
  );
  let data = await res.json();
  const numOfPages = data.info.pages;
  for (let i = 2; i < numOfPages + 1; i++) {
    let tempRes = await unfetch(
      `https://rickandmortyapi.com/api/character/?page=${i}&name=${query.search}`
    );
    let tempData = await tempRes.json();
    data.results = _.concat(data.results, tempData.results);
  }
  data.info = _.concat(data.info, query);

  return data;
};

export default searchpage;
