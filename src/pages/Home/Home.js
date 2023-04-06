import React, { useState, useEffect } from "react";
import Style from "./Home.module.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";



function Home() {
  const [popular, setPopular] = useState([]);
  //const [inputMovie,setInputMovie]=useState(" ");
  const[search,setSearch]=useState("");

  
   //fetch all popular movies using api stored in popular useState(show on ui in home page) using map method.
  useEffect(() => {
   fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);
  


  return (
    <>
      <div>
        <span className={Style.in}>
          <input type="text" 
          className={Style.input}
          onChange={(e)=>setSearch(e.target.value)}
         />
        </span>
      </div>
            

  

      <div className={Style.slider}>
        {popular.filter((movie)=>{
          return movie.original_title.toLowerCase().includes(search.toLowerCase())
        })
        
        
        .map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className={Style.posterimg}>
              <div className={Style.tittle}>
                {movie.original_title}
                <br />
                <span className={Style.rating}>
                  Rating:{movie ? movie.vote_average : ""}
                </span>
              </div>

              <span>
                {/*https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg*/}
                <img
                  className={Style.imghome}
                     src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
              </span>

              <div className={Style.show}>
                <div className={Style.title}>
                  {movie ? movie.original_tittle : ""}
                </div>
              </div>

              <div className={Style.description}>
                {movie ? movie.overview.slice(1, 140) + "..." : ""}              
              </div>
            </div>
            <br />
          </Link>
        ))
 
        }
      </div>
      <Footer/>
    </>
  );
}
export default Home;


