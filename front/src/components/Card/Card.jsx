import React, { useEffect, useState } from "react";
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addMyFavorites, deleteMyFavorites } from "../../redux/actions";

function Card(props) {

   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false);
         props.deleteMyFavorites(props.id);
      } else {
         setIsFav(true);
         props.addMyFavorites(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={style.divPersonaje}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.button} onClick={() => props.onClose(props.id)}>X</button>
         
         <Link className={style.link} to={`/detail/${props.id}`}>
            <h2 className={style.name}>{props.name}</h2>
         </Link>
                 
         <h2 className={style.species}>{props.species}</h2>
         <h2 className={style.gender}>{props.gender}</h2>
         <img className={style.image}  src={props.image} alt={props.name} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addMyFavorites: (id) => {dispatch(addMyFavorites(id))},
      deleteMyFavorites: (id) => {dispatch(deleteMyFavorites(id))}
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


