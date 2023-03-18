import axios from "axios"
export const ADD_MY_FAVORITES = 'ADD_MY_FAVORITES';
export const DELETE_MY_FAVORITES = 'DELETE_MY_FAVORITES';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';


export const addMyFavorites = (character) =>{
    return function (dispatch) {
        axios.post('http://localhost:3001/rickandmorty/favs', character)
        .then((response) => {
            return dispatch({
                type: ADD_MY_FAVORITES,
                payload: response.data,
            })
        })
    }   
}

export const deleteMyFavorites = (id) =>{
    return function (dispatch) {
        axios.delete('http://localhost:3001/rickandmorty/favs/'+id)
        .then((response) => {
            return dispatch({
                type: DELETE_MY_FAVORITES,
                payload: response.data,
            })
        })
    }
}

export const filterCards = (gender) =>{
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) =>{
    return{
        type: ORDER,
        payload: id
    }
}