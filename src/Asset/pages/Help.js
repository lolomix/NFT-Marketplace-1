import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

export default function Help () {
    return (
        <div class="Help">
            <Navbar/>
            <div class="container text-light">
                <div class="row">
                    <a class="help-title pt-5 pb-4 fs-3">Help</a>
                    <div class="row">
                        <div class="col-sm">
                            <div class="content-help mt-4 mb-4">
                                <h3>Create Account</h3>
                                <p>Learn how to Create your account for starting buy and sell in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="col-sm">
                            <div class="content-help mt-4 mb-4">
                                <h3>Create Wallet</h3>
                                <p>Learn how to Create your account for starting buy and sell in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>
                        
                        <div class="col-sm">
                            <div class="content-help mt-4 mb-4">
                                <h3>Buying</h3>
                                <p>Learn how to buying in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="col-sm">
                            <div class="content-help mt-4 mb-4">
                                <h3>Selling</h3>
                                <p>Learn how to selling in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="col-sm">
                            <div class="content-help mt-4 mb-4">
                                <h3>Offering</h3>
                                <p>learn how to offering in NFT Everywhere</p>
                                <a class="btn btn-help text-light">Read More</a>
                            </div>
                        </div>

                        <div class="col-sm">
                            <div class="content-help mt-4 mb-4">
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