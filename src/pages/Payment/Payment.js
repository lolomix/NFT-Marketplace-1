import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer';
import { gql ,useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./payment.css"
import ArtistProfile from './Component/ArtistProfile';
import ItemImage from './Component/ItemImage';
import Graphic from './Component/Graphic';
import Listings from './Component/Listings';
import CurrentPrice from './Component/CurrentPrice';
import Offers from './Component/Offers';

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
                    <CurrentPrice price={list.price}/>
                    <Graphic/>
                    <Listings
                    price={list.price}/>
                    <Offers/>
                </div>
            </div>
           ))}
            </div>
           </div>
            <Footer/>
        </div>
    )
}