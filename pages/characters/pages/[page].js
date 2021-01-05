import unfetch from "isomorphic-unfetch";
import Card from "../../../components/rick-and-morty/card";

const Page = ({ chars }) => {
  console.log(chars);
  return (
    <div>
      <h1>Rick And Morty</h1>

      <div>{chars.results.map((char) => (
        <div key={char.id}> {char.name} </div>
      ))}</div>

      <div>{chars.info.next}</div>
    </div>
  );
};

export async function getStaticPaths() {

  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params:  { page: '3' } },
      { params:  { page: '4' } },
      { params:  { page: '5' } },
      { params:  { page: '6' } },
      { params:  { page: '7' } },
    ],
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const res = await unfetch(
    `https://rickandmortyapi.com/api/character/?page=${params.page}`
  );
  const chars = await res.json();
  
  return {props:{
    chars
  }  };
};

export default Page;
