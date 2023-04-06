import React, { useState, useEffect } from "react";
import Style from "./card.module.css"; //scleton effect
import { Link } from "react-router-dom";

//getting props from movieList inside "Card" that provide all movie information.
//Inside "Link" path of that specific movie.By clicking each card show data of that specific movie.

const Card = ({ movie }) => {
 // console.log(movie)
  return (
    <>
    
      <Link to={`/movie/${movie.id}`}>
        <div className={Style.cards}>
          <img
            className={Style.cardimg}
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ""
            }`}
          />

          <div className={Style.cardOverlay}>

            <div className={Style.cardtitle}>
              {movie ? movie.original_tittle : ""}
            </div>

            <div className={Style.cardruntime}>
              {movie ? movie.release_date : ""}

              <span className={Style.cardrating}>
                {movie ? movie.vote_average : ""}
              </span>

            </div>

            <div className={Style.carddescription}>
              {movie ? movie.overview.slice(0, 118) + "..." : ""}
            </div>
            
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
