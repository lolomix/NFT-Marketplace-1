import React from "react"
import "./style.css"

class Header extends React.Component () {
   render () {
    return (
        <div>
            <header>
             <div class="container Header">
             <div class="row  ">
                  <div class="title col-lg-4">
                   <h1>Create and Sell Your Digital Masterpiece</h1>
                   <p class="">The Biggest marketplace that sells digital asset from crypto</p>
                   <a class="btn-solid-lg" href="#">Explore</a>
                  </div>

                  <div class="img col-lg">
                      <img src=""></img>
                      <p>Artist Name</p>
                      <p>Description</p>
                  </div>
              </div>
             </div>
          </header>
        </div>     
  )
   }
}

export default Header