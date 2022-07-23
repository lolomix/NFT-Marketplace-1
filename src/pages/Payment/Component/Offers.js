import React, { useState } from 'react'
import { IoPricetag } from "react-icons/io5"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import {FaEthereum} from "react-icons/fa"
import {MdList} from "react-icons/md"

export default function Offers({}) {
    const [openListing, setOpenListing] = useState(false)

    const handleListing = () => {
        setOpenListing(!openListing)
    }

  return (
    <div className="border rounded mt-3 p-3">
        <div className="d-flex justify-content-between">
        <div><MdList size={20} className="me-3"/>Offers</div>
        {!openListing ? <button onClick={handleListing}><FiChevronDown size={20}/></button> : <button onClick={handleListing}><FiChevronUp size={20}/></button>}
      </div>
      {openListing && (
        <table className="table text-light table-borderless mt-3 ">
        <thead>
          <tr>
            <th scope="col">Price</th>
            <th scope="col">USD Price</th>
            <th scope="col">Floor Difference</th>
            <th scope="col">Expiration</th>
            <th scope="col">From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row"><FaEthereum className='me-2'/>2.5</td>
            <td>$4,809.20</td>
            <td>97% below</td>
            <td>2 days</td>
            <td style={{color : '#be237b'}}>JG_Wenworth</td>
          </tr>
          
          <tr>
            <td scope="row"><FaEthereum className='me-2'/>2.5</td>
            <td>$4,809.20</td>
            <td>97% below</td>
            <td>2 days</td>
            <td style={{color : '#be237b'}}>JG_Wenworth</td>
          </tr>
          
          <tr>
            <td scope="row"><FaEthereum className='me-2'/>0.43</td>
            <td>$29.82</td>
            <td>100% below</td>
            <td>About 2 Hours</td>
            <td style={{color : '#be237b'}}>RelifesX</td>
          </tr>

          <tr>
            <td scope="row"><FaEthereum className='me-2'/>0.52</td>
            <td>$38.56</td>
            <td>100% below</td>
            <td>12 days</td>
            <td style={{color : '#be237b'}}>HisExcellency</td>
          </tr>
        </tbody>
      </table>
      )}
    </div>
  )
}

