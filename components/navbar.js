import Link from 'next/link'

function Navbar() {

  return <nav>
    <Link href ="/"> 
        <a>Home</a>
    </Link>
    <Link href ="/about"> 
        <a>About</a>
    </Link>
    <Link href ="/rickandmorty">
        <a>Rick and Morty</a>
    </Link>

</nav>
  
}

export default Navbar