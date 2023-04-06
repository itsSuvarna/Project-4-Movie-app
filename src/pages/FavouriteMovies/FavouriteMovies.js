import React, { useState } from "react";
import Style from "./FavouriteMovies.module.css";


 //get "favuritemovie" from localstorage  and show on ui inside favourite icon section
function FavouriteMovies() {
  const [favMoviedata,setFavMoviedata]=useState(JSON.parse(localStorage.getItem("favouriteMovie"))|| [])
//console.log(favMoviedata)
 

 return (
  <>
    <h1>favourite movie</h1>
   {favMoviedata?.map((fav)=>{
    return(
    <div key={fav.id}>
      <div className={Style.moviename}>
        {fav.original_tittle}
      </div>
      <div className={Style.movieruntime}>
        {fav.runtime + "min"}
      </div>
      <div>
        <img
          className={Style.movieposter}
          src={`https://image.tmdb.org/t/p/original${fav.backdrop_path}`}/>
            
      </div>
    </div>
    )
    })
   }
  </>
);
}
export default FavouriteMovies;








