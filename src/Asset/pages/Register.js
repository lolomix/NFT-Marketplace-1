import Navbar from "../component/Navbar"
import { useState } from "react"
import Footer from "../component/Footer"
import { Logo } from "../component/Logo"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"



export function Register() {

    const baseError = {
        email: "",
      }
    

    const [firstName, setfirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [erorMasage, setErorMassage] = useState (baseError);
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.com+)*$/
    
    const onChangeFirstName = (e) => {
        let value = e.target.value
        setfirstName(value)
     }

    const onChangeLastName = (e) => {
      let value = e.target.value
      setLastName(value)
   }

    const onChangeEmail = (e) => {
        let value = e.target.value
        setEmail(value) 
      }
    
    const onChangePassword = (e) => {
        let value = e.target.value
        setPassword(value) 
      }

      const onChangeConfirmPassword = (e) => {
        let value = e.target.value
        setConfirmPassword(value) 
      }

    const onLogin = () => {
        if (!regexEmail.test(email)) {
            setErorMassage ({...erorMasage,[email] : Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: 'Email yang anda masukan tidak valid',
              })})
        } if( email == "") {
          Swal.fire({
            icon: 'error',
            title: 'Email Belum Di isi',
            text: 'Silahkan Cek Kembali Email Anda',
          })
        }if (password == "") {
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: 'Password wajib di isi',
              })
        } if ( password != ConfirmPassword ) {
          Swal.fire({
            icon: 'error',
            title: 'Password harus sama',
            text: 'Silahkan di cek kembali',
          })
        } if ( email != "" == password != "" == firstName != "" == lastName != "" ) {
          Swal.fire({
              icon: 'error',
              title: 'Form Harus di isi semuanya',
              text: 'Silahkan cek kembali',
            })
      }
    } 
    return (
        <div>
             <section class="Login">
             <Navbar/>
             <div class="login-content container">
                <div class="row d-flex justify-content-center align-items-center">
                <div class="col ">
                    <div class="card">
                    <div class="row g-0">
                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/NFT-art.jpg?alt=media&token=1d0f4ac4-c277-421a-9819-7a672b830c26" class="img-fluid" alt="Responsive image" />
                        </div>
                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
                        <div class="card-body p-4 p-lg-5 text-light">

                            <form>

                            <div class="d-flex align-items-center mb-3 pb-1">
                                <span class="fw-bold mb-0"><Logo/></span>
                            </div>

                            <h5 class="fw-normal mb-3 pb-3">Login</h5>

                            <div class="row">
                            <div class="form-outline mb-4 col">
                                <label class="form-label" for="form2Example17">First Name</label>
                                <input type="text" id="form2Example17" class="form-control form-control-lg form" value={firstName} onChange={onChangeFirstName}/>
                            </div>
                              <div class="col">
                              <label class="form-label" for="form2Example17">Last Name</label>
                                <input type="text" id="form2Example17" class="form-control form-control-lg form" value={lastName} onChange={onChangeLastName} />
                              </div>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27">Email</label>
                                <input type="email" id="form2Example27" class="form-control form-control-lg form" value={email} onChange={onChangeEmail}/>
                            </div>


                            <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27">Password</label>
                                <input type="password" id="form2Example27" class="form-control form-control-lg form" value={password} onChange={onChangePassword}/>
                            </div>

                            <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27">Confirm Password</label>
                                <input type="password" id="form2Example27" class="form-control form-control-lg form" value={ConfirmPassword} onChange={onChangeConfirmPassword }/>
                            </div>

                            <div class="mb-4 btn-login">
                                <a type="button" class="btn btn-lg text-light" onClick={onLogin}>Register</a>
                            </div>

                            <div class="mt-5">
                            <p>Already Registered? <Link to="/Login" style={{textDecoration: 'none'}}><a class="Register">Login Now</a></Link></p>
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