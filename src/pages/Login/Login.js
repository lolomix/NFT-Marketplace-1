import Navbar from "../../component/Navbar/Navbar"
import { useEffect, useState } from "react"
import Footer from "../../component/Footer/Footer"
import { Logo } from "../../component/Logo"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { gql, useLazyQuery } from "@apollo/client"
import Loading from "../../component/Loading"

const GetUser = gql`
query MyQuery($_eq: String, $_eq1: String) {
    login(where: {email: {_eq: $_eq}, password: {_eq: $_eq1}}) {
      id
      email
      password
    }
  }
`


export default function Login () {

    const baseError = {email: ""}
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [erorMasage, setErorMassage] = useState (baseError);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.com+)*$/
    const [getData, {data, loading, error}] = useLazyQuery(GetUser);
    let Navigate = useNavigate();

    useEffect (() => {
        if (data?.login.length === 1) {
            if (loading) {
                <Loading/>
            }
            Swal.fire({
                icon: 'success',
                title: 'Login Berhasil',
              })
            return Navigate("/")
        }
    })

    if (error){
        <h1>Eror</h1>
    }
    const onChangeEmail = (e) => {
        let value = e.target.value
        setEmail(value) 
      }
    
    const onChangePassword = (e) => {
        let value = e.target.value
        setPassword(value) 
      }

    const onLogin = () => {
        getData ({ variables : { _eq : email, _eq1: password } });

        

        if (!regexEmail.test(email)) {
            setErorMassage ({...erorMasage,[email] : Swal.fire({
                icon: 'error',
                title: 'Email tidak valid',
              })})
        } if (password == "") {
            Swal.fire({
                icon: 'error',
                title: 'Password Wajib di isi',
              })
        } if ( email != "" == password != "" ) {
            Swal.fire({
                icon: 'error',
                title: 'Form Masih Kosong',
              })
        }
    } 

    if (loading) {
        <Loading/>
    }

    return (
        <div>
             <div style={{background : '#1F0443', width : '100%', height : '100%'}}>
             <Navbar/>
             <div class="container pt-4">
                <div class="row d-flex justify-content-center align-items-center">
                <div class="col">
                    <div style={{backgroundColor : '#361561', borderRadius : ' 20px '}}>
                    <div class="row g-0">
                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/NFT-art.jpg?alt=media&token=1d0f4ac4-c277-421a-9819-7a672b830c26" alt="login form" class="img-fluid" />
                        </div>
                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
                        <div class="card-body p-4 p-lg-5 text-light">

                            <form>

                            <div class="d-flex align-items-center mb-3 pb-1">
                                <span class="fw-bold mb-0"><Logo/></span>
                            </div>

                            <h5 class="fw-normal mb-3 pb-3">Login</h5>

                            { data &&  <a class="alert bg-danger"><span>Error! </span>Anda Belum terdaftar!</a>}
       
                            <div class="form-outline mb-4 mt-4">
                                <label class="form-label" for="form2Example17">Email</label>
                                <input type="email" id="form2Example17" class="form-control form-control-lg form" value={email} onChange={onChangeEmail} />
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27">Password</label>
                                <input type="password" id="form2Example27" class="form-control form-control-lg form" value={password} onChange={onChangePassword}/>
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
            </div>
            
        </div>
    )
   
}