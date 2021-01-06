import unfetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout/layout";
import Link from "next/link";

/*
Burayı Daha detaylı Hala getir
*/
const Char = ({ id, name, image }) => {
  return (
    <div>
      <h1>Rick And Morty</h1>
      <Layout />
      <br></br>
      
      <figure>
        <img src={image}></img>
      </figure>
      <h2>{name} </h2>
    </div>
  );
};

Char.getInitialProps = async ({ query }) => {
  const id = query.slug.split("-").slice(-1);
  const res = await unfetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();

  return data;
};

export default Char;
