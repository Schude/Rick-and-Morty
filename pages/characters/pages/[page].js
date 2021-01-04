import unfetch from "isomorphic-unfetch";
import Card from "../../../components/rick-and-morty/card"


const Page = ({ chars }) => {

  return (
    <div>
      <h1>Rick And Morty</h1>
        
        <div>as</div>
        <div> </div>
        <div>as</div>
      <div >
       
          <Card />
      </div>
      
    </div>
  );
};

Page.getInitialProps = async ({ query }) => {
  const res = await unfetch(`https://rickandmortyapi.com/api/character/?page=${query.page}`);
  const chars = await res.json();
  
  return {chars};
};

export default Page;
