import unfetch from "isomorphic-unfetch";

/*
Burayı Daha detaylı Hala getir
ilk görüldüğü yeri bölüm sırasından bul aynı şekil last görülen yer
location için slug oluştur
*/
const Char = (data) => {
  console.log(data);
  return (
    <div>
      <h1>Rick And Morty</h1>

      <br></br>
      <h2>{data.name} </h2>
      <figure>
        <img src={data.image}></img>
      </figure>
      <div>Species: {data.species} </div>
      <div>Status: {data.status} </div>
      <div>Gender: {data.gender} </div>
      <div>Origin: {data.origin.name} </div>

      <div>Location:{data.location.name} </div>
      <div>Type:{data.type} </div>
      <div>Created:{data.created} </div>
    </div>
  );
};

Char.getInitialProps = async ({ query }) => {
  const id = query.slug.split("-").slice(-1);
  const res = await unfetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  return data;
  /* return {
    props: {
      data,
    },
  }; */
};

export default Char;
