import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'
import icon from "../img/ethereum.png"

export default function Explore () {
    return (
        <div>
        <Navbar/>
        <div class="Explore">
            <div class="container">
                
                <div class="p-4">
                <h1>Explore</h1>
                </div>

                <div class="Content-explorer pb-4 row">

                <div class="col p-2 text-light">   
                            <div class="popular-image">
                                    <img src="https://i.postimg.cc/gjCnwdQ9/andre-robida-JCPz-An5u-D9-Q-unsplash.jpg"></img>
                                    <div class="row mt-3 mb-4">
                                        <div class="col-7">
                                            <p class="Artist-Name">Andre Robida</p>
                                        </div>
                                            <div class="col-4 d-flex justify-content-end">
                                                    <p>Price</p>   
                                            </div>
                                        <div class="row">
                                            <div class="col-sm-7">
                                                <a>Digital Render Art</a>
                                            </div>
                                            <div class="col-5 d-flex justify-content-end">
                                                <a><img src={icon}></img></a>
                                                <p>9</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="#" style={{textDecoration: 'none'}}>
                                        <a class="btn-buy d-flex justify-content-center">Buy Now</a>
                                    </Link>
                                </div>
                    </div>
                    

                </div>
            </div> 
        </div>
        <Footer/>
    </div>
    )
}