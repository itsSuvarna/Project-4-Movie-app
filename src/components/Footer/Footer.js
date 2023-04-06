import React from "react";
import Style from "./Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

//footer of movie app

function Footer() {
  return (
    <>
      <div className={Style.footer}>
        <div>
          <div className={Style.headericon}>
            <Link to="https://www.google.com/search?client=firefox-b-d&q=developers.themoviedb.org">
                <AiFillFacebook /></Link>
            <Link to="https://www.google.com/search?client=firefox-b-d&q=developers.themoviedb.org">
                <BsTwitter /></Link>
            <Link to="https://www.google.com/search?client=firefox-b-d&q=developers.themoviedb.org">
                <BsInstagram /></Link>
            <Link to="https://www.google.com/search?client=firefox-b-d&q=developers.themoviedb.org">
                <AiOutlineMail /></Link>
          </div>
          <div className={Style.copyright}>
            Copyright © 2000-2023 , movie.com
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
