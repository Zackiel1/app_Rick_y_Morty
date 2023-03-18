import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   

   return (
      <div className={style.divPersonajes}>
         {
            characters.map(per => 
      
               <Card
                key={per.name}
                name={per.name}
                species={per.species}
                gender={per.gender}
                image={per.image}
                onClose={props.onClose}
                id={per.id}
              />)
         }
         
      </div>
   )
}

