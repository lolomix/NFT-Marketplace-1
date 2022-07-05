import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer';
import Swal from "sweetalert2";
import { gql ,useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./payment.css"

const onPayment = () => {
    if (true) {
        Swal.fire({
            icon: 'success',
            title: 'Pembelian Berhasil',
          })
    }
}

const listItem = gql`
query MyQuery {
    explore_nft {
      gambar
      name
      description
      price
      id
    }
  }
`


export default function Payment () {
    const listItemQuery = useQuery(listItem);
    const {id} = useParams();
    console.log(id)

    return (
        <div class="Payment">
            <Navbar/>
           <div class="container text-light">
           <div class="py-5">
            {listItemQuery.data?.explore_nft.filter(list => list.id == id).map((list) => (
            <div  class="row">
                <div class="col d-flex justify-content-center">
                    <img class="Payment-image " src={list.gambar}></img>
                </div>
                <div class="col">
                    <h1>{list.description}</h1>
                    <a>{list.name}</a>
                    <hr/>
                    <a class="Summary">Payment</a>
                    <div class="row mt-4">
                        <div class="d-flex justify-content-start col"><a>{list.name}</a></div>
                        <div class="d-flex justify-content-end col"><a>{list.description}</a></div>
                    </div>
                    <div class ="row mt-2">
                        <div class="d-flex justify-content-start col"><a>Price</a></div>
                        <div class="content-end d-flex justify-content-end col"><a>$ {list.price*198556}</a></div>
                    </div>
                    <div class="row mt-2">
                        <div class="d-flex justify-content-start col"><a>Network Fee</a></div>
                        <div class="content-end d-flex justify-content-end col"><a>$ 80</a></div>
                    </div>
                    <hr/>
                    <div class="row mb-4">
                        <div class="d-flex justify-content-start col"><a>Total</a></div>
                        <div class="content-end d-flex justify-content-end col"><a>$ {list.price*198556+80}</a></div>
                    </div>
                    <a class="btn btn-payment" onClick={onPayment}>Buy</a>
                </div>
            </div>
           ))}
            </div>
           </div>
            <Footer/>
        </div>
    )
}