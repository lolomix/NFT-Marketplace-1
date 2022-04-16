import Navbar from "./Navbar"
import React from "react"
import Header from "./Header"

class Home extends React.Component {
   render () {
    return (
        <div>
            <Navbar/>
            <div>
                <Header/>
            </div>
        </div>  
    )
   }
}

export default Home