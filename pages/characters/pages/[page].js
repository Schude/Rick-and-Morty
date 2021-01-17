import unfetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout/layout";
import Character from "../../../components/charactercard";
import Utility from "../../../components/utility";

const Page = ({ chars, currentPage }) => {
  return (
    <div>
      <Layout title = {`Character Page ${currentPage}`} />

      <Utility curr={currentPage} />

      <Character characters={chars.results} />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (let i = 1; i < 35; i++) {
    paths.push({ params: { page: i.toString() } });
  }
  console.log(paths)

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
