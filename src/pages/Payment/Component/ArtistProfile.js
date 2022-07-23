import React, { useState } from 'react'
import {MdVerified, MdShare} from "react-icons/md"
import {TbCurrencyEthereum} from "react-icons/tb"
import { BsCode, BsFillEyeFill, BsFillHeartFill, BsFacebook, BsTwitter } from "react-icons/bs"

export default function ArtistProfile({name, list}) {

  const [share , setShare ] = useState("true")

  const handleShare = () => {
    setShare(!share)
  }

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center pb-4'>
      <div className='d-flex'>
        <div style={{color : '#be237b', marginRight : '20px', fontSize : '20px'}}>{name}</div>
        <MdVerified size={30} />
      </div>
        <div>
          <button onClick={handleShare}><MdShare size={20} /></button>
          {!share && (
            <div className='position-absolute translate-middle-x m-2' style={{background : '#be237b', borderRadius : 5}}>
            <div className='p-2 '><TbCurrencyEthereum size={20}/><span className='ps-2'>Copy Link</span></div>
            <div className='p-2 '><BsFacebook size={20}/> <span className='ps-2'>Share on Facebook</span></div>
            <div className='p-2 '><BsTwitter size={20}/> <span className='ps-2'>Share on Twitter</span></div>
            <div className='p-2 '><BsCode size={20}/> <span className='ps-2'>Emded Item</span></div>
          </div>
          )}
        </div>
        
        
      </div>
      <div className='fs-2 pb-2'>{list}</div>
      <div className='d-flex align-items-center'>
      <div className='pe-5'>Owned By <button style={{color : '#be237b'}}>Muchlisaryn</button></div>
      <div className='pe-5'><BsFillEyeFill size={20} className="me-2"/>800 Views</div>
      <div className='pe-5'><BsFillHeartFill size={20} className="me-2"/>17 Favorite</div>
      </div>
    </div>
  )
}
