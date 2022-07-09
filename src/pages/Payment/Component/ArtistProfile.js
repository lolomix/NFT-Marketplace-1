import React, { useState } from 'react'
import {MdVerified, MdShare} from "react-icons/md"
import { BsFillPeopleFill, BsFillEyeFill, BsFillHeartFill, BsFacebook, BsTwitter } from "react-icons/bs"

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
            <div className='position-absolute top-20 end-0 translate-middle-x m-2' style={{background : '#be237b', borderRadius : 5}}>
            <div className='p-2 '>Copy Link</div>
            <div className='p-2 '><BsFacebook size={20}/> <span className='ps-2'>Share on Facebook</span></div>
            <div className='p-2 '><BsTwitter size={20}/> <span className='ps-2'>Share on Twitter</span></div>
            <div className='p-2  ' ><BsFacebook size={20}/> <span className='ps-2'>Emded Item</span></div>
          </div>
          )}
        </div>
        
        
      </div>
      <div className='fs-2 pb-2'>{list}</div>
      <div className='d-flex align-items-center'>
      <div className='pe-5'><BsFillPeopleFill size={20}/> 800</div>
      <div className='pe-5'><BsFillEyeFill size={20}/> 800</div>
      <div className='pe-5'><BsFillHeartFill size={20}/> 800</div>
      </div>
    </div>
  )
}
