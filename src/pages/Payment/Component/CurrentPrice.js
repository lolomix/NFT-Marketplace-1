import React from 'react'
import {FaEthereum, FaWallet} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import { IoPricetag } from "react-icons/io5"
import Swal from "sweetalert2";

export default function CurrentPrice({price, usd}) {

    const onPayment = () => {
            Swal.fire({
                icon: 'success',
                title: 'Pembelian Berhasil',
              })
    }

  return (
    <div className='py-2'>
    <div className='pb-4 d-flex align-items-center' style={{color : '#be237b'}}><BiTimeFive className='me-3'/>Sale ends October 17, 2022 at 1:47pm GMT+7 </div>
    <div>Current Price</div>
    <div className='d-flex justify-content-between align-items-center py-3'>
        <div className='d-flex align-items-center '>
            <FaEthereum size={25}/>
            <div className='px-3 fs-2 fw-bold'>{price}</div>
            <div className='text-white-50'>(${price*usd})</div>
        </div>
        <div className='d-flex'>
            <button style={{backgroundColor : '#be237b'}} className="d-flex align-items-center p-3 rounded" onClick={onPayment}>
            <FaWallet size={30}/>
            <div className='mx-3'>Buy now</div>
            </button>
            <button className="d-flex align-items-center p-3 rounded ms-3 border">
            <IoPricetag size={30}/>
            <div className='mx-3'>Make Ofer</div>
            </button>
        </div>
    </div>
    </div>
  )
}
