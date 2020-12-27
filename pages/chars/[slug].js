import unfetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout/layout'
import slug from 'slug'
import styles from '../../components/components-styles/char-detail.module.css'



function charDetail({char}){
    
    
    return <div>
        <h1>Rick And Morty</h1>
        <Layout/>
        <br></br>
       
        <figure>
            <img  src = {char.image}></img>
        </figure>
        <h2>{char.name} </h2>
        
    </div>
}




export default charDetail;

export async function getStaticPaths() {
    
    const data = await unfetch(`https://rickandmortyapi.com/api/character/?page=${1}`)
    const chars = await data.json()
    const paths =  chars.results.map(char => {
        return {params:{slug: `${slug(char.name)}-${char.id}`} }
    })
    return {
        paths,
        fallback:false
     }
      
}
 


export async function getStaticProps({params}) {
    // Call an external API endpoint to get posts
    //Data Fetch
    
    const id = params.slug.split("-").slice(-1)[0]
    const data = await unfetch(`https://rickandmortyapi.com/api/character/${id}`)
    const char = await data.json()
  

    return {
      props: { 
          char
    
    },
    }
  }