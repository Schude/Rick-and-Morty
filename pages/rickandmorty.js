import unfetch from 'isomorphic-unfetch'
import Layout from '../components/Layout/layout'
import Link from 'next/link'
import slug from 'slug'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../components/components-styles/rickandmort.module.css'

 const useFetch = (url, page) =>  {
    const [char2, setChar] = useState()

    useEffect(async () => {
        const res = await unfetch(url)
        const data = await res.json()
        setChar(data)
        console.log('asd')

    }, [page])
    return { char2 }
}
    
function rick(){

    const [page ,setPage] = useState(1);
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`
    const {char2} = useFetch(url,page);

    return <div>

        <h1 className={styles.greet}>Rick And Morty</h1>
        <Layout/>

        <p>Page: {page}</p>
        <button onClick={() => setPage(curr =>curr -1)}>Prev Page</button>    
        <button onClick={() => setPage(curr =>curr +1)}>Next Page</button>
 
        <div className={styles.container}>

        {char2 &&  char2.results.map(char => (
        <div key={char.id} className={styles.card}>

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



/* export async function getStaticProps() {
    
    
    // Call an external API endpoint to get posts
    //Data 
   
    const data = await unfetch(`https://rickandmortyapi.com/api/character/?page=${1}`)
 
    const chars = await data.json()

    return {
      props: { 
          chars,           
    },
    }
}
 */