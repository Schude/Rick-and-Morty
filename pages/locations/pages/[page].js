import unfetch from "isomorphic-unfetch";
import Utility from "../../../components/rick-and-morty/Utility";

const Page = ({ locations, currentPage }) => {
  console.log(locations);
  return (
    <div>
      <h1>Rick And Morty</h1>
      <Utility curr={currentPage} />

      <div>
        {locations.results.map((location) => (
          <div key={location.id}> {location.name} </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (let i = 0; i < 7; i++) {
    paths.push({ params: { page: i.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const res = await unfetch(
    `https://rickandmortyapi.com/api/location/?page=${params.page}`
  );
  const locations = await res.json();
  const currentPage = params.page;

  return {
    props: {
      locations,
      currentPage,
    },
    revalidate: 300,
  };
};

export default Page;
