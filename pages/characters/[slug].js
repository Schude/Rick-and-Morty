import unfetch from "isomorphic-unfetch";
import Layout from "../../components/Layout/layout";
import Characterdetail from "../../components/characterdetail";
import Utility from "../../components/utility";
const Char = (character) => {
  return (
    <Layout title={character.name}>
      <Utility />

      <Characterdetail character={character} />
    </Layout>
  );
};

export default Char;
Char.getInitialProps = async ({ query }) => {
  //originide buradan yollayacaaaaazzzz
  const id = query.slug.split("-").slice(-1);
  const res = await unfetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  return character;
};

/* export async function getStaticPaths({ query }) {
  console.log(query);
  const paths = [];
  for (let i = 1; i < 35; i++) {
    const res = await unfetch(`https://rickandmortyapi.com/api/character/${i}`);
    const deneme = await res.json();

    paths.push({ params: { slug: `${slug(deneme.name)}-${deneme.id}` } });
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const id = params.slug.split("-").slice(-1);
  const res = await unfetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}; */
