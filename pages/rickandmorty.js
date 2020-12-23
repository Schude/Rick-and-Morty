import unfetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import Link from 'next/link'
import slug from 'slug'
function rick({chars}){
    
    
    return <div>
        <h1>Rick And Morty</h1>
        <Layout/>


        <ul>
        {chars.results.map(char => (
        <li key = {char.id}>
        <Link href ="/chars/[slug]" as = {`chars/${slug(char.name)}-${char.id}`}>
            <a>{char.name}</a>
        </Link></li>
        ))}

        </ul>
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