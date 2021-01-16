import unfetch from "isomorphic-unfetch";
import Pagination from "../../../components/pagination";
import Card from "../../../components/card";
import Search from "../../../components/search";
import Layout from "../../../components/Layout/layout";
import Character from "../../../components/charactercard";
const Page = ({ chars, currentPage }) => {
  return (
    <div>
      <Layout />
      <Search />
      <Pagination curr={currentPage} />
      
      <Card chars={chars} />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (let i = 0; i < 35; i++) {
    paths.push({ params: { page: i.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const res = await unfetch(
    `https://rickandmortyapi.com/api/character/?page=${params.page}`
  );
  const chars = await res.json();
  const currentPage = params.page;

  return {
    props: {
      chars,
      currentPage,
    },
  };
};

export default Page;
