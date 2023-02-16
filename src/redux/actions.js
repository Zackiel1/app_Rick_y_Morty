export const ADD_MY_FAVORITES = 'ADD_MY_FAVORITES';
export const DELETE_MY_FAVORITES = 'DELETE_MY_FAVORITES';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addMyFavorites = (character) =>{
    return {
        type: ADD_MY_FAVORITES,
        payload: character
    }
}

export const deleteMyFavorites = (id) =>{
    return{
        type: DELETE_MY_FAVORITES,
        payload: id
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