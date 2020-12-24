import unfetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Link from 'next/link'
import slug from 'slug'
function rick({chars}){
    
    
    return <div>
        <h1>Rick And Morty</h1>
        <Layout/>


        <div class ="chars-container">
        {chars.results.map(char => (
        <div class="char-card">
        <figure class= "char-img">
        <img  src = {char.image}></img>
        </figure>
        
        <Link  href ="/chars/[slug]" as = {`chars/${slug(char.name)}-${char.id}`}>
           <div class= "test"><a class= "char-link">{char.name}</a></div>
        </Link>
        
        </div>
        ))}
        </div>
        
    </div>
}




export default rick;




export async function getStaticProps() {
    // Call an external API endpoint to get posts
    //Data Fetch
    const data = await unfetch('https://rickandmortyapi.com/api/character/')
    const chars = await data.json()
    //console.log(chars);  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: { 
          chars
    
    },
    }
  }