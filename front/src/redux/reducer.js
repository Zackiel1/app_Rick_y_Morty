import { ADD_MY_FAVORITES, DELETE_MY_FAVORITES, FILTER, ORDER } from "./actions";

const inicialState = {
    myFavorites: [],
    allCharacters: [],
};

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case ADD_MY_FAVORITES:
            return{
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload
            }
        case DELETE_MY_FAVORITES:
            return{
                ...state,
                myFavorites: action.payload,
            }  
        case FILTER:
            let copyAllCharacter = [...state.allCharacters];
            
            return{
               ...state,
               myFavorites: copyAllCharacter.filter((character)=>{
                return character.gender === action.payload;
            }) 
            }
        case ORDER:
            let copyCharacter = [...state.allCharacters];

            if(action.payload === "Ascendente"){
                let orderCharacter = copyCharacter.sort((a, b) => a.id - b.id)
                return{
                    ...state,
                    myFavorites: orderCharacter
                }   
            }
            if(action.payload === "Decendente"){
                let orderCharacter = copyCharacter.sort((a, b) => b.id - a.id)
                return{
                    ...state,
                    myFavorites: orderCharacter
                }   
            }               
        default:
            return{...state}
    }
}

export default reducer;


