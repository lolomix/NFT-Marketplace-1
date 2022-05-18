import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Swal from "sweetalert2";

export default function DashboardCreate () {

    const [link, setLink] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const onChangePrice = (e) => {
        let value = e.target.value
        setPrice(value) 
      }

    const onChangeDescription = (e) => {
        let value = e.target.value
        setDescription(value) 
      }

    const onChangeName = (e) => {
        let value = e.target.value
        setName(value) 
      }

    const onChangeLink = (e) => {
        let value = e.target.value
        setLink(value) 
      }

    const onUpload = () => {
        if ( name != "" && link != "" && description != "" && price != "" ) {
            return true
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Upload Gagal',
                text: 'Input Harus diisi dengan lengkap',
              })
        }
    }


    return (

        
        <div class="Dashboard text-light pb-2 ">
            <Navbar/>
            <div class="container">

            <div class="row mt-4">
            
            <div class="col-3">
            <div class="row">
            <a class="mb-4 mt-4 " style={{textDecoration: 'none', color:'#C93D8D'}}  >Create New Collection</a>
            <Link to="/My-Collection" style={{textDecoration: 'none'}}><a>My Collection</a></Link>
            </div>
            </div>
            <div class="col create-collection">
                <form class="mt-4">
                    <label class="external-link ">External Link</label>
                    <input type="Link" value={link} onChange={onChangeLink}></input>
                </form>

                <form class="mt-4">
                    <label class="name">Name</label>
                    <input type="text" value={name}  onChange={onChangeName}></input>
                </form>

                <form class="mt-4">
                    <label class="description">Description</label>
                    <input type="text" value={description} onChange={onChangeDescription}></input>
                </form>

                <form class="mt-4 form-price">
                    <label class="price">Price</label>
                    <input type="number"value={price}  onChange={onChangePrice}></input>
                </form>

                <a class="btn-upload" type="button" onClick={onUpload}>Upload</a>

            </div>
            </div>

            </div>
            <Footer/>
        </div>
    )
}