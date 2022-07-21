import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer';
import Swal from "sweetalert2";
import { gql ,useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./payment.css"
import NavLike from './Component/NavLike';
import ArtistName from './Component/ArtistProfile';
import ArtistProfile from './Component/ArtistProfile';
import ItemImage from './Component/ItemImage';
import Graphic from './Component/Graphic';
import Listings from './Component/Listings';

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
        <div className="Payment">
            <Navbar/>
           <div className="container text-light">
           <div className="py-5">
            {listItemQuery.data?.explore_nft.filter(list => list.id == id).map((list) => (
            <div className="row">
                <div className="col d-flex justify-content-center ">
                <ItemImage gambar={list.gambar}/>
                </div>
                <div className="col">
                    <div className='pb-4 border-bottom'>
                    <ArtistProfile
                     name={list.name}
                     list={list.description}/>
                    </div>
                    <Graphic/>
                    <Listings
                    price={list.price}/>
                    <a className="Summary">Payment</a>
                    <div className="row mt-4">
                        <div className="d-flex justify-content-start col"><a>{list.name}</a></div>
                        <div className="d-flex justify-content-end col"><a>{list.description}</a></div>
                    </div>
                    <div className ="row mt-2">
                        <div className="d-flex justify-content-start col"><a>Price</a></div>
                        <div className="content-end d-flex justify-content-end col"><a>$ {list.price*198556}</a></div>
                    </div>
                    <div className="row mt-2">
                        <div className="d-flex justify-content-start col"><a>Network Fee</a></div>
                        <div className="content-end d-flex justify-content-end col"><a>$ 80</a></div>
                    </div>
                    <hr/>
                    <div className="row mb-4">
                        <div className="d-flex justify-content-start col"><a>Total</a></div>
                        <div className="content-end d-flex justify-content-end col"><a>$ {list.price*198556+80}</a></div>
                    </div>
                    <a className="btn btn-payment" onClick={onPayment}>Buy</a>
                </div>
            </div>
           ))}
            </div>
           </div>
            <Footer/>
        </div>
    )
}