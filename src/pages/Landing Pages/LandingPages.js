import React from "react";
import '../pages.css';
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import { Link } from "react-router-dom";
import icon from "../../img/ethereum.png";
import { gql, useQuery } from "@apollo/client";
import ListContentHeader from "./component/ListContentHeader";
import Total from "./component/Total";
import Category from "./component/Category";
import PopularItem from "./component/PopularItem";

const listPopular = gql`
query MyQuery {
    popular {
      image
      name
      price
      description
      id
    }
  }
`

export default function Header () {
    const listPopularQuery = useQuery(listPopular)

    return (
        <div>
            <div className="LandingPage">
            <Navbar/>
            <header row>
             <div className="Header container">
             <div className="d-flex justify-content-between py-3">
                  <div className="title">
                   <h1>Create and Sell Your Digital Masterpiece</h1>
                   <p>With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
                   <Link to="Explore" style={{textDecoration: 'none'}}><a className="btn-solid-lg" >Explore</a></Link>
                  </div>
                  <div classNameName="img-header"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/unnamed.gif?alt=media&token=8fd2f4d5-cdaf-46e5-9f94-9ca12f9f0938" /></div>
              </div>
             </div>
          </header>

          <div className="header2">
            <ListContentHeader/>
          </div>
         <Total/>
         <Category/>
         <PopularItem/>

          <div className="Popular">
                <div className="container">
                 <h2 className="mb-4">Popular item</h2>
                    <div className="popular-item d-flex justify-content-between">
                        {listPopularQuery.data?.popular.map((list) => (
                        <div className="col p-2">   
                            <div className="popular-image">
                                    <div className="popular-item-image">
                                    <img src={list.image}></img>
                                    </div>
                                    <div className="desc-item row mt-3">
                                        <div className="col-7">
                                            <p className="Artist-Name">{list.name}</p>
                                        </div>
                                            <div className="col d-flex justify-content-end">
                                            <p>Price</p>   
                                            </div>
                                    </div>
                                    <div className="row mb-4">
                                            <div className="col popular-description">
                                                <a>{list.description}</a>
                                            </div>
                                            <div className="col-5 d-flex justify-content-end">
                                                <a><img src={icon}></img></a>
                                                <p>{list.price}</p>
                                            </div>
                                        </div>
                                    <Link to={`/Payment/${list.id}`} style={{textDecoration: 'none'}}>
                                        <a className="btn-buy d-flex justify-content-center">Buy Now</a>
                                    </Link>
                        </div>
                        </div>
                    ))}         
                </div>                    
                </div>
            </div>

        <div className="Content-last-background ">
            <div className="container d-flex justify-content-center">
                <div className="Content-last">
                    <h1>Ready To Collect NFT</h1>
                    <p>You can collect NFT from sells out digital asset in here</p>
                    <Link to="/Login" style={{textDecoration: 'none'}}><a className="btn-start" >Start Today</a></Link>
                </div>
            </div>
        </div>

         </div> 
         <div className="background-footer">
            <Footer/>
            </div>
        </div>
        
        )
   }
