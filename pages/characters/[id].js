import unfetch from "isomorphic-unfetch";


const Char = ({name, image}) => {
   /*  const router = useRouter()
    const { id } = router.query;
    
    console.log({id}); */
  return <div>
  <h1>Rick And Morty</h1>
{/*   <Layout /> */}
  <br></br>

  <figure>
    <img src={image}></img>
  </figure>
  <h2>{name} </h2>
</div>


};

Char.getInitialProps = async  ({query}) => {

    const res = await unfetch(`https://rickandmortyapi.com/api/character/${query.id}`)
    const data = await res.json()
    
    return data;
}

export default Char;