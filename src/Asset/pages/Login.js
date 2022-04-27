import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import IMG from '../img/Nicola.jpg'
import { Logo } from "../component/Logo"
import { Link } from "react-router-dom"






export default function Login () {
    return (
        <div>
            <Navbar/>
             <section class="vh-100 Login">
             <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card">
                    <div class="row g-0">
                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                        <img src={IMG} alt="login form" class="img-fluid" />
                        </div>
                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
                        <div class="card-body p-4 p-lg-5 text-light">

                            <form>

                            <div class="d-flex align-items-center mb-3 pb-1">
                                <span class="fw-bold mb-0"><Logo/></span>
                            </div>

                            <h5 class="fw-normal mb-3 pb-3">Login</h5>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example17">Username or email</label>
                                <input type="email" id="form2Example17" class="form-control form-control-lg form" />
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27">Password</label>
                                <input type="password" id="form2Example27" class="form-control form-control-lg form" />
                            </div>

                            <a class="small text-muted" href="#!">Forgot password?</a>

                            <div class="pt-3 mb-4">
                                <a class="btn-login" onClick="$">Login</a>
                            </div>

                            <p class="pb-lg-2 pt-5" >Don't have an account? <Link to="/Register" style={{textDecoration: 'none'}}><a class="Register">Register here</a></Link></p>
                            </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer/>
        </div>
    )
   
}