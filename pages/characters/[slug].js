import unfetch from "isomorphic-unfetch";
import Layout from "../../components/Layout/layout";

/*
Burayı Daha detaylı Hala getir
ilk görüldüğü yeri bölüm sırasından bul aynı şekil last görülen yer
location için slug oluştur
*/
const Char = (character) => {
  return (
    <div>
      <Layout title = {character.name} />
      <h1>Rick And Morty</h1>

      <br></br>
      <h2>{character.name} </h2>
      <figure>
        <img src={character.image} alt = {character.name}></img>
      </figure>
      <div>Species: {character.species} </div>
      <div>Status: {character.status} </div>
      <div>Gender: {character.gender} </div>
      <div>Origin: {character.origin.name} </div>

      <div>Location:{character.location.name} </div>
      <div>Type:{character.type} </div>
      <div>Created:{character.created} </div>
    </div>
  );
};

Char.getInitialProps = async ({ query }) => {
  const id = query.slug.split("-").slice(-1);
  const res = await unfetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return character;
};

export default Char;
