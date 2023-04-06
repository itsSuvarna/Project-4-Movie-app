import React from "react";
import Style from "./Header.Module.css";
import { CgProfile } from "react-icons/cg";
import {AiFillHeart} from "react-icons/ai"
import { Link } from "react-router-dom";
import Register from "../../pages/Register/Register";
import { fontSize, height } from "@mui/system";

//header of movie app
//by clicking option home,popular,upcoming,topreated,icons on ui it gives path for that specific.
function Header() {
  return (
    <>
      <div className={Style.header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>HOME </span>
        </Link>

        {/*https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US*/}
        <Link to="movies/popular" style={{ textDecoration: "none" }}>
          <span>POPULAR</span>
        </Link>

        {/*https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US*/}
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>UPCOMING</span>
        </Link>

        {/*https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US */}
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>TOP RATED</span>
        </Link>
        
        
        <Link to="/favouritemovies">
         <AiFillHeart
          style={{
            marginLeft:"7vw",
            color:"brown",
            fontWeight:"inherit",
            fontSize:"1.9vw",
            
          }}
          className={Style.favicon}/>
          </Link>


        <Register button={ <CgProfile
         style={{
            color: "red",
             marginLeft: "-1.45vw",
             height: "4vh",
             width: "4vw",
             marginTop:"0vh" }}
             />
          }
        />
       
    </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
        
    </>
  );
}
export default Header;
