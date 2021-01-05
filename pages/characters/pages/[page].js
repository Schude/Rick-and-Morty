import unfetch from "isomorphic-unfetch";
import Pagination from '../../../components/rick-and-morty/page'
import Card from "../../../components/rick-and-morty/card";

const Page = ({ chars }) => {
  const currentPage = chars.info.next.slice(-1)-1
 
  return (
    <div>
      <h1>Rick And Morty</h1>
      <Pagination curr = {currentPage}/>

      <Card chars = {chars}/>
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
  console.log(params)
  const res = await unfetch(
    `https://rickandmortyapi.com/api/character/?page=${params.page}`
  );
  const chars = await res.json(); 
  
  return {props:{
    chars,
    
  }  };
};

export default Page;
