import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Swal from "sweetalert2";
import { gql ,useQuery } from "@apollo/client";

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
    const listItemQuery = useQuery(listItem)

    return (
        <div class="Payment">
            <Navbar/>
           <div class="container text-light">
           <div class="Payment-content">
            {listItemQuery.data?.explore_nft.map((list) => (
            <div  class="row">
                <div class="col d-flex justify-content-center">
                    <img class="Payment-image " src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/aldi-sigun-K-sdQ12jZeY-unsplash.jpg?alt=media&token=043aa742-15e2-46a9-8da9-4e8fdc6d11e4"></img>
                </div>
                <div class="col">
                    <h1>{list.description}</h1>
                    <p>{list.name}</p>
                    <hr/>
                    <a class="Summary">Payment</a>
                    <div class="row mt-4">
                        <div class="d-flex justify-content-start col"><a>{list.name}</a></div>
                        <div class="d-flex justify-content-end col"><a>{list.description}</a></div>
                    </div>
                    <div class ="row mt-2">
                        <div class="d-flex justify-content-start col"><a>Price</a></div>
                        <div class="content-end d-flex justify-content-end col"><a>${list.price*198556}</a></div>
                    </div>
                    <div class="row mt-2">
                        <div class="d-flex justify-content-start col"><a>Network Fee</a></div>
                        <div class="content-end d-flex justify-content-end col"><a>$ 80</a></div>
                    </div>
                    <hr/>
                    <div class="row mb-4">
                        <div class="d-flex justify-content-start col"><a>Total</a></div>
                        <div class="content-end d-flex justify-content-end col"><a>500</a></div>
                    </div>
                    <a class="btn btn-payment" onClick={onPayment}>Payment</a>
                </div>
 
            </div>
           ))}
            </div>
           </div>
            <Footer/>
        </div>
    )
}