import React, { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   
   const {onSearch} = props

   const [id, setId] = useState("")
 

   const handlerChange = (event) => {
      setId(event.target.value)
   } 

  

   return (
      <div className={style.divContenedor}>
         <input className={style.input} type='search' onChange={handlerChange}/>
         <button className={style.button} onClick={() => onSearch(id)}>Agregar</button>
         <button onClick={() => onSearch(Math.floor(Math.random()*827))}>Ramdon</button>
      </div>
   );
}
