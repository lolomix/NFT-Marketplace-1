import React from "react"
import './pages.css'
import img_1 from "../img/Philip.jpg"
import img_2 from "../img/Vadim.jpg"
import img_3 from "../img/Nicola.jpg"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"


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
                      <a><img src={img_2}></img></a>
                      <p class="name">Vadim Bogulov</p>
                      <p class="Description">Mona Liza from lego tiles</p>
                  </div>

                  <div class="image img_2 col">
                      <a><img src={img_1}></img></a>
                      <p class="name">Artist Name</p>
                      <p class="Description">Description</p>
                  </div>

                  <div class="image img_3 col">
                      <a><img src={img_3}></img></a>
                      <p class="name">Nicola POWYS</p>
                      <p class="Description">Arts & Culture</p>
                  </div> 
              </div>
             </div>
          </header>

          <div class="content2 text-light">
              <div class="container d-flex justify-content-center">
                  <div class="">
                        <ul>
                            <li class="total">51+</li>
                            <li class="title-total">Artwork</li>
                        </ul>

                        <ul>
                            <li class="total">51+</li>
                            <li class="title-total">Artwork</li>
                        </ul>

                        <ul>
                            <li class="total">51+</li>
                            <li class="title-total">Artwork</li>
                        </ul>
                  </div>
              </div>
          </div>

          <div class="content3">
            <div class="container">
                    <h2>Category</h2>
                    
            </div>
          </div>
         </div> 
         <Footer/>    
        </div>
        )
   }


export default Header