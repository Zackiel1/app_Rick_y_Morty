import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

function Detail () {

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      console.log(character);

    return(
        <div className={style.container}>
            
           <h2>Nombre: {character.name}</h2>
            <br />
           <h3>Status: {character.status}</h3>
           <h3>Especie: {character.species}</h3>
           <h3>Genero: {character.gender}</h3>
           <h3>Origen: {character.origin?.name}</h3>
           <img src={character.image} alt={character.name}/>
        </div>
    )
}

export default Detail;
