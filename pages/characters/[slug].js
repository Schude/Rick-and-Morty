import unfetch from "isomorphic-unfetch";
import Layout from "../../components/Layout/layout";
import Characterdetail from "../../components/characterdetail";
import Utility from "../../components/utility";
import slug from "slug";
const Char = ({ character }) => {
  return (
    <Layout title={character.name}>
      <Utility value="disabled" />

      <Characterdetail character={character} />
    </Layout>
  );
};

export default Char;

export async function getStaticPaths() {
  const paths = [];
  for (let i = 1; i < 21; i++) {
    const res = await unfetch(`https://rickandmortyapi.com/api/character/${i}`);
    const character = await res.json();

    paths.push({ params: { slug: `${slug(character.name)}-${character.id}` } });
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
};
