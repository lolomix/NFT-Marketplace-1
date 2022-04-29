import React from "react"
import './pages.css'
import img_2 from "../img/Vadim.jpg"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { Link } from "react-router-dom"


function Header () {
    return (
        <div>
            <Navbar/>
            <div class="LandingPage">
            <header>
             <div class="Header container col">
             <div class="row  ">
                  <div class="title col-lg-4">
                   <h1>Create and Sell Your Digital Masterpiece</h1>
                   <p class="">The Biggest marketplace that sells digital asset from crypto</p>
                   <a class="btn-solid-lg" href="#">Explore</a>
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
              <div class="container d-flex justify-content-center">
                    <div class="mb-4">
                        <a><img src="https://i.postimg.cc/Jz7Ls0VW/IMG-20220428-041128.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/5NxG3rPB/IMG-20220428-041114.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/9F8xBQw2/IMG-20220428-041150.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/TPmCGj72/IMG-20220428-041137.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/Yq9RjBns/IMG-20220428-041058.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/bJ0PGtJp/IMG-20220428-041016.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/nV72D1pv/IMG-20220428-041028.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/cL8wpxCf/IMG-20220428-041041.jpg"></img></a>
                    </div>
              </div>
              
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


            <div class="Popular">
                <div class="container">
                <h2 class="mb-4 row">Popular item</h2>
                    <div class="popular-item row">
                        <div class="col">
                            <div class="popular-image">
                                <img src="https://i.postimg.cc/gjCnwdQ9/andre-robida-JCPz-An5u-D9-Q-unsplash.jpg"></img>
                                <p>Andre Robida
                                    <a>price</a>
                                </p>
                                <p>Digital Render Art</p>
                                <Link to="#"><a class="btn-buy d-flex justify-content-center"> Buy Now</a></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          <div class="Category">
            <div class="container">
                <h2 class="mb-4 row">Category</h2>
                    <div class="Category-item row">
                        <div class="col pt-4">
                            <div class="item-image item-image-1 ">
                                <div class=" d-flex justify-content-end">
                                    <div class="Category-item-title d-flex justify-content-end">Photography</div>
                                </div>
                            </div>
                        </div>

                        <div class="col pt-4 ">
                            <div class="item-image item-image-2 ">
                                <div class=" d-flex justify-content-end">
                                    <div class="Category-item-title d-flex justify-content-end">Digital Arts</div>
                                </div>
                            </div>
                        </div>

                        <div class="col pt-4">
                            <div class="item-image item-image-3 ">
                                <div class=" d-flex justify-content-end">
                                    <div class="Category-item-title d-flex justify-content-end">Music</div>
                                </div>
                            </div>
                        </div>
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
         <Footer/>    
        </div>
        )
   }


export default Header