import React, { useState } from 'react'
import { IoPricetag } from "react-icons/io5"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import {FaEthereum} from "react-icons/fa"

export default function Listings({price}) {
    const [openListing, setOpenListing] = useState(false)

    const handleListing = () => {
        setOpenListing(!openListing)
    }

  return (
    <div className="border rounded mt-3 p-3">
        <div className="d-flex justify-content-between">
        <div><IoPricetag size={20} className="me-3"/>Listings</div>
        {!openListing ? <button onClick={handleListing}><FiChevronDown size={20}/></button> : <button onClick={handleListing}><FiChevronUp size={20}/></button>}
      </div>
      {openListing && (
        <table className="table text-light table-borderless mt-3 ">
        <thead>
          <tr>
            <th scope="col">Price</th>
            <th scope="col">USD Price</th>
            <th scope="col">Expiration</th>
            <th scope="col">From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row"><FaEthereum className='me-2'/>{price}</td>
            <td>${price*1.716}</td>
            <td>3 Months</td>
            <td style={{color : '#be237b'}} >Muchlisaryn</td>
            <td><button style={{backgroundColor : '#be237b'}} className="px-4 p-1 rounded">Buy</button></td>
          </tr>
        </tbody>
      </table>
      )}
    </div>
  )
}
