import Link from 'next/link'
import slug from 'slug'
import styles from '../components-styles/rickandmort.module.css'
import unfetch from 'isomorphic-unfetch'
import { useState } from 'react'
import { useEffect } from 'react'
const useFetch = (url, page) =>  {
    const [char2, setChar] = useState()

    useEffect(async () => {
        const res = await unfetch(url)
        const data = await res.json()
        setChar(data)
        

    }, [page])
    return { char2 }
}

function cardContainer(){

    const [page ,setPage] = useState(1);
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`
    const {char2} = useFetch(url,page);

    
    return <div>
    
    <p>Page: {page}</p>
        <button onClick={() => setPage(curr =>curr -1)}>Prev Page</button>    
        <button onClick={() => setPage(curr =>curr +1)}>Next Page</button>

    <div className={styles.container}>
    
    {char2 && char2.results.map(char => (
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

export default cardContainer