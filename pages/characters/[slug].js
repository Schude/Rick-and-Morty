import unfetch from "isomorphic-unfetch";
import Layout from "../../components/Layout/layout";
import Characterdetail from '../../components/characterdetail'

/*
Burayı Daha detaylı Hala getir
ilk görüldüğü yeri bölüm sırasından bul aynı şekil last görülen yer
location için slug oluştur
*/
const Char = (character) => {
  return (
    <Layout title={character.name}>
      <Characterdetail character = {character}/>
    </Layout>
  );
};

Char.getInitialProps = async ({ query }) => {
  const id = query.slug.split("-").slice(-1);
  const res = await unfetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return character;
};

export default Char;
