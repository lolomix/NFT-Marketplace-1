import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import IMG from '../img/Nicola.jpg'

export function Login () {
    return (
        <div>
            <Navbar/>
            <div class="Login">
            <div class="container form-login gradient-form">
               <div class="card row d-flex justify-content-center">
                   <div class=" col-xl-10">
                <div class=" text-light">
                   <div class="row g-0 ">
                       <div class="col-lg-6">
                       <div class="card-body p-md-5 mx-md-4">
       
                       <div class="">
                           <h4 class="mt-1 mb-5 pb-1">Login</h4>
                       </div>
       
                       <form>
       
                           <div class="form-outline mb-4">
                           <label class="form-label" for="form2Example11">Usernam or Email</label>
                           <input type="email" id="form2Example11" class="form-control"
                               placeholder="Phone number or email address" />
                           
                           </div>
       
                           <div class="form-outline mb-4">
                           <input type="password" id="form2Example22" class="form-control" />
                           <label class="form-label" for="form2Example22">Password</label>
                           </div>
       
                           <div class="text-center pt-1 mb-5 pb-1">
                           <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Login</button>
                           <a class="text-muted" href="#!">Forgot password?</a>
                           </div>
       
                           <div class="d-flex align-items-center justify-content-center pb-4">
                           <p class="mb-0 me-2">Don't have an account?</p>
                           <button type="button" class="btn btn-outline-danger">Create new</button>
                           </div>
       
                       </form>
       
                       </div>
                       </div>
                       <div class="col-lg-6 d-flex .align-items-sm-end">
                           <img src={IMG}/>
                       </div>
                   </div>
               </div>
               </div>
           </div>
           </div>
          
       </div>
       <Footer/>
        </div>
    )
   
}