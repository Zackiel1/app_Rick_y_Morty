import React from "react";
import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from 'react-router-dom';

export default function Nav (props){
    
    const {onSearch, logout} = props
    

    return(
        <div className={style.contenedor}>
            <div className={style.divSearchBar}>

                <button className={style.logout} onClick={() => logout()}>Loguot</button>   

                <SearchBar className={style.searchBar} onSearch={onSearch}/>

                <Link className={style.link} to='/about'>About</Link>
            
                <Link className={style.link} to="/home">Home</Link>

                <Link className={style.link} to='/favorites'>Favorites</Link>

            
            </div>         
        </div>
    )
}