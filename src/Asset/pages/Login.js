import Navbar from "../component/Navbar"
import { useState } from "react"
import Footer from "../component/Footer"
import IMG from '../img/Nicola.jpg'
import { Logo } from "../component/Logo"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"



export default function Login () {

    const baseError = {
        email: "",
        Password: "",
      }
    
    const [email, setEmail] = useState("")
    const [erorMasage, setErorMassage] = useState (baseError);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/
    
    const onChangeEmail = (e) => {
        let value = e.target.value
        setEmail(value) 
      }

    const onLogin = () => {
        if (!regexEmail.test(email)) {
            setErorMassage ({...erorMasage,[email] : Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Format Email anda salah',
              })})
        } else {
            Swal.fire(
                'Good job!',
                'Login Succcess',
                'success'
              )
        }
    } 

    return (
        <div>
             <section class="Login">
             <Navbar/>
             <div class="login-content container">
                <div class="row d-flex justify-content-center align-items-center">
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
                                <label class="form-label" for="form2Example17">Email</label>
                                <input type="email" id="form2Example17" class="form-control form-control-lg form" value={email} onChange={onChangeEmail} />
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27">Password</label>
                                <input type="password" id="form2Example27" class="form-control form-control-lg form"/>
                            </div>

                            <div class="row pb-4">
                                <div class="col-12 col-md-8">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                                <div class="col-6 col-md-4 d-flex justify-content-end "><Link to="$" style={{textDecoration: 'none'}}><a class="Forgot-pw">Forgot password?</a></Link></div>
                            </div>

                            <div class="mb-4 btn-login">
                                <a type="button" class="btn btn-lg text-light" onClick={onLogin}>Login</a>
                            </div>

                            <div class="mt-5">
                            <p>Don't have an account? <Link to="/Register" style={{textDecoration: 'none'}}><a class="Register">Register here</a></Link></p>
                            </div>
                            </form>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
            </section>
            
        </div>
    )
   
}