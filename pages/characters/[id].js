import unfetch from "isomorphic-unfetch";
import Layout from "../../components/Layout/layout";
import Link from "next/link";

const Char = ({ id, name, image }) => {
  return (
    <div>
      <h1>Rick And Morty</h1>
      <Layout />
      <br></br>
      <Link href={`./${id-1}`}>
		  <a>Prev Character</a>
	  </Link>
      <Link href={`./${id+1}`}>
		  <a>Next Character</a>
	  </Link>
      <figure>
        <img src={image}></img>
      </figure>
      <h2>{name} </h2>
    </div>
  );
};

Char.getInitialProps = async ({ query }) => {
  const res = await unfetch(
    `https://rickandmortyapi.com/api/character/${query.id}`
  );
  const data = await res.json();

  return data;
};

export default Char;
