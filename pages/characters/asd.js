import unfetch from "isomorphic-unfetch";
import Layout from "../../components/Layout/layout";
import Link from "next/link";

const Pages = () => {
  return (
    <div>



    <Layout />

    <div>Pages</div>
    </div>
  );
};

/* Char.getInitialProps = async ({ query }) => {
  const res = await unfetch(
    `https://rickandmortyapi.com/api/character/${}`
  );
  const data = await res.json();

  return data;
};

export default Pages;
 */