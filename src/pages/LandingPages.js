import React from "react";
import './pages.css';
import './media.css';
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import icon from "../img/ethereum.png";
import { gql, useQuery } from "@apollo/client";
import ListContentHeader from "./component/ListContentHeader";

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
            <div class="LandingPage">
            <Navbar/>
            <header row>
             <div class="Header container col">
             <div class="row  ">
                  <div class="title col-lg-4">
                   <h1>Create and Sell Your Digital Masterpiece</h1>
                   <p class="">The Biggest marketplace that sells digital asset from crypto</p>
                   <Link to="Explore" style={{textDecoration: 'none'}}><a class="btn-solid-lg" >Explore</a></Link>
                  </div>

                  <div class="image img_1 col">
                      <a><img src="https://i.postimg.cc/pVhWYp6Q/Vadim.jpg"></img></a>
                      <p class="name">Vadim Bogulov</p>
                      <p class="Description">Mona Liza from lego tiles</p>
                  </div>

                  <div class="image img_2 col">
                      <a><img src="https://i.postimg.cc/CMJSCbFQ/Philip.jpg"></img></a>
                      <p class="name">Penna Magalhães</p>
                      <p class="Description">Human art</p>
                  </div>

                  <div class="image img_3 col">
                      <a><img src="https://i.postimg.cc/fR4hvC9D/Nicola.jpg"></img></a>
                      <p class="name">Nicola POWYS</p>
                      <p class="Description">Arts & Culture</p>
                  </div> 
              </div>
             </div>
          </header>

          <div class="header2">
            <ListContentHeader/>
          </div>

          <div class="content2 text-light">
              <div class="container d-flex justify-content-center">
                  <div class="">
                        <ul>
                            <li class="total">51+</li>
                            <li class="title-total">Artwork</li>
                        </ul>

                        <ul>
                            <li class="total">99+</li>
                            <li class="title-total">Artist</li>
                        </ul>

                        <ul>
                            <li class="total">90+</li>
                            <li class="title-total">Aucations</li>
                        </ul>
                  </div>
              </div>
          </div>


            

          <div class="Category">
            <div class="container">
                <h2 class="mb-4 row">Category</h2>
                    <div class="Category-item row">
                        <div class="col pt-4">
                            <Link to="#" style={{textDecoration: 'none'}}>
                            <div class="category-image item-image-1 ">
                                <div class=" d-flex justify-content-end">
                                    <div class="Category-item-title d-flex justify-content-end">Photography</div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        
                        <div class="col pt-4 ">
                        <Link to="/Explore" style={{textDecoration: 'none'}}>
                            <div class="category-image item-image-2 ">
                                <div class=" d-flex justify-content-end">
                                    <div class="Category-item-title d-flex justify-content-end">Digital Arts</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        

                        <div class="col pt-4">
                            <div class="category-image item-image-3 ">
                                <div class=" d-flex justify-content-end">
                                    <div class="Category-item-title d-flex justify-content-end">Music</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>

          <div class="Popular">
                <div class="container">
                 <h2 class="mb-4 row">Popular item</h2>
                    <div class="popular-item row">
                        {listPopularQuery.data?.popular.map((list) => (
                        <div class="col p-2">   
                            <div class="popular-image">
                                    <div class="popular-item-image">
                                    <img src={list.image}></img>
                                    </div>
                                    <div class="desc-item row mt-3">
                                        <div class="col-7">
                                            <p class="Artist-Name">{list.name}</p>
                                        </div>
                                            <div class="col d-flex justify-content-end">
                                                    <p>Price</p>   
                                            </div>
                                    </div>
                                    <div class="row mb-4">
                                            <div class="col popular-description">
                                                <a>{list.description}</a>
                                            </div>
                                            <div class="col-5 d-flex justify-content-end">
                                                <a><img src={icon}></img></a>
                                                <p>{list.price}</p>
                                            </div>
                                        </div>
                                    <Link to={`/Payment/${list.id}`} style={{textDecoration: 'none'}}>
                                        <a class="btn-buy d-flex justify-content-center">Buy Now</a>
                                    </Link>
                        </div>
                        </div>
                    ))}         
                </div>                    
                </div>
            </div>

        <div class="Content-last-background ">
            <div class="container d-flex justify-content-center">
                <div class="Content-last">
                    <h1>Ready To Collect NFT</h1>
                    <p>You can collect NFT from sells out digital asset in here</p>
                    <Link to="#" style={{textDecoration: 'none'}}><a class="btn-start" >Start Today</a></Link>
                </div>
            </div>
        </div>

         </div> 
         <div class="background-footer">
            <Footer/>
            </div>
        </div>
        
        )
   }
