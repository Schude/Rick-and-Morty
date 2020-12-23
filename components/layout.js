import Navbar from "./navbar";

function Layout({children}){

    return <div>
    {children}
    <Navbar/>
    
    </div>
}

export default Layout;
