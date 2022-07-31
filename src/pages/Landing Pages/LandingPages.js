import React from "react";
import '../pages.css';
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import { Link } from "react-router-dom";

import Total from "./component/Total";
import Category from "./component/Category";
import Header from "./component/Header";
import PopularItem from "./component/PopularItem";
import ContentLast from "./component/ContentLast";



export default function LandingPage () {
    

    return (
        <>
            <div className="LandingPage">
            <Navbar/>
            <Header/>
            <Total/>
            <Category/>
            <PopularItem />
            <ContentLast/>
         </div> 
         <div className="background-footer" >
            <Footer/>
            </div>
        </>
        
        )
   }
