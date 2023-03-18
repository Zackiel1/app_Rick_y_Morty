import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = (props) => {

    const dispatch = useDispatch();

    const handleSelect = (e) => {
        if(e.target.name === "order"){
            return dispatch(orderCards(e.target.value))
        }
        if(e.target.name === "filter"){
            return dispatch(filterCards(e.target.value))
        }
    }

    return(
        <div >
        <div>
            <select name="order" onClick={handleSelect}>
                <option value="order">Order by</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Decendente">Decendente</option>
            </select>
            <select name="filter" onClick={handleSelect}>
                <option value="filter">Filter by</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>    
          {props.myFavorites?.map(char => (
                <Card
                key={char.name}
                name={char.name}
                species={char.species}
                gender={char.gender}
                image={char.image}
                id={char.id}
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);