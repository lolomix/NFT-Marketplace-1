import Navbar from '../../component/molecules/Navbar'
import { gql ,useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import "./payment.css"
import ArtistProfile from './Component/ArtistProfile';
import ItemImage from './Component/ItemImage';
import Graphic from './Component/Graphic';
import Listings from './Component/Listings';
import CurrentPrice from './Component/CurrentPrice';
import Offers from './Component/Offers';
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
import Footer from '../../component/molecules/Footer/Index';



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
    const [usd, setUsd] = useState([])

    const APi_URL = `https://api.currencyfreaks.com/latest?apikey=${process.env.REACT_APP_KEY}&symbols=IDR`

    console.log(APi_URL)

    useEffect (() => {
        axios.get(APi_URL)
        .then((get) => {
            console.log(get.data)
            console.log("==> ", get.data.rates)
            setUsd(Object.values(get.data.rates))
        }).catch ((error)=> {
            console.log(error)
        })
    },[usd])

    

    return (
        <div className="Payment">
            <Navbar/>
           <div className="container text-light">
           <div className="py-5">
            {listItemQuery.data?.explore_nft.filter(list => list.id === id).map((list) => (
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
                    <CurrentPrice price={list.price} usd={usd}/>
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