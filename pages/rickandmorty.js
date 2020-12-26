import unfetch from 'isomorphic-unfetch'
import Layout from '../components/Layout/layout'
import Link from 'next/link'
import slug from 'slug'
import styles from '../components/components-styles/rickandmort.module.css'


function rick({chars}){
    
    
    return <div>
        <h1 className={styles.greet}>Rick And Morty</h1>
        <Layout/>


         <div className={styles.container}>
        {chars.results.map(char => (
        <div className={styles.card}>
        <figure className={styles.imgBx}>
        <img className={styles.image} src = {char.image}></img>
        </figure>
        
        <Link  href ="/chars/[slug]" as = {`chars/${slug(char.name)}-${char.id}`}>
           <div className={styles.test}><a className={styles.link}>{char.name}</a></div>
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