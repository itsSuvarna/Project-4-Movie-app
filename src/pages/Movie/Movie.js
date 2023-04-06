import Style from "./Movie.module.css"
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai"


const Movie=()=>{
    const [movie,setMovie]=useState();
    const [favMovie,setFavMovie]=useState(JSON.parse(localStorage.getItem("favouriteMovie"))|| []);
    console.log(movie)
    console.log(favMovie)

     //get value  of dynmically created params (id) from url which is after "movie/"
    const {id} =useParams();

    useEffect(()=>{
        getData()
    },[])

//by clicking on single movie on ui, it fetch data using that "specific id" inside getdata
        const getData=()=>{
         fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
          .then(res => res.json())
          .then(data => setMovie(data));}
     
          //console.log(movie)
         
//by clicking add to favourite movie option on ui, add that movie data inside localstorage,by event handlefav
         {/* const handleFav=()=>{
                setFavMovie([...favMovie,movie]);
               }
              localStorage.setItem("favouriteMovie",JSON.stringify(favMovie))*/}


                {/*
                const handleFav=(id)=>{ 
                  if(favMovie.filter((x)=>x===checkMovie)){
                      alert("movie is present")
                  }else{
                  setFavMovie([...favMovie,checkMovie]);
                   localStorage.setItem("favouriteMovie",JSON.stringify(favMovie))
                  }
                }
             console.log(id)
              */}

             useEffect(()=>{
               localStorage.setItem("favouriteMovie",JSON.stringify(favMovie))
               },[favMovie]
               )
              
             


            useEffect(()=>{
              const storedData = favMovie;
              const checkMovie = movie;
               for(let i=0;i<storedData.length;i++){
                if(checkMovie===storedData[i]){
                  alert("movie present")
                    break;
                }else{
                    setFavMovie((storedData)=>[...storedData,checkMovie])
                }
               }
              
            })

          

              

    return(
        <>

        <div className={Style.moviediv}>
          <h1>movie information</h1>

            <span className={Style.favourite}>
               <button  onClick={()=>handleFav(movie.id)}> 
               ADD TO FAVOURITE:<AiFillHeart style={{color:"red",fontSize:"20px"}}/>
               </button>
            </span>
              
            <div >
                  <div className={Style.moviename}>{movie?movie.original_tittle :""}</div> 
                    <div className={Style.movieinforuntime}>
                      movie time :{movie? movie.runtime +"min":""}
                      <div>
                        Rating:{movie ? movie.vote_average : ""}
                        <div className={Style.movieinfodescription}>
                        describtion: {movie ? movie.overview.slice(1, 140) + "..." : ""}     
                       </div>
                    </div>
                  </div>
                <div >
                 <img className={Style.movieinfoposter} src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:""}`}/>
                </div>

            </div>
      </div>
           
        </>
    )
}
export default Movie;