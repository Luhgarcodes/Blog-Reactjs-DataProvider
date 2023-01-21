import { useContext } from "react";
import DataContext from "./context/DataContext";

const Nav = ()=>{
    const {search,setSearch} =  useContext(DataContext);
    return(
        <nav className="Nav">
            <form className = "searchForm" onSubmit={e=>e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    value={search}
                    placeholder = "Search Posts"
                    onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/post">Post</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}
export default Nav;