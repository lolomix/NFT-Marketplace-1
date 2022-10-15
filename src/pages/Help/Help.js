import Footer from "../../component/molecules/Footer/Index"
import Navbar from "../../component/molecules/Navbar"
import "./Help.css"

export default function Help () {
    return (
        <div class="Help">
            <Navbar/>
            <div class="container text-light">
                <div class="pt-5">
                    <div class="d-flex justify-content-between flex-wrap">
                        <div class="p-4">
                            <div class="content-help">
                                <h3>Create Account</h3>
                                <p>Learn how to Create your account for starting buy and sell in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="p-4">
                            <div class="content-help">
                                <h3>Create Wallet</h3>
                                <p>Learn how to Create your account for starting buy and sell in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>
                        
                        <div class="p-4">
                            <div class="content-help">
                                <h3>Buying</h3>
                                <p>Learn how to buying in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="p-4">
                            <div class="content-help">
                                <h3>Selling</h3>
                                <p>Learn how to selling in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="p-4">
                            <div class="content-help">
                                <h3>Offering</h3>
                                <p>learn how to offering in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="p-4">
                            <div class="content-help">
                                <h3>FAQ</h3>
                                <p>Search your question in most frequently ask question</p>
                                <a class="btn btn-help text-light ">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}