import React, {useState} from 'react'
import {FaEthereum} from "react-icons/fa"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"


export default function ItemImage({gambar}) {
  const [Like, setLike] = useState("true")

  const dataLike = 17

  const handleLike = () => {
    setLike(!Like)
  }


  return (
    <div>
      <div className="col d-flex justify-content-center ">
                    <div className='border border-dark rounded-5'>
                    <div className='d-flex justify-content-between'>
                    <button className='p-3'><span style={{color : '#be237b'}}>Ethereum</span><FaEthereum size={20} className='ms-3'/></button>
                    <div className='p-3 d-flex flex-row align-items-center'>
                        <div className='pe-2'>{Like? dataLike : dataLike+1}</div>
                        <button>{Like? <AiOutlineHeart size={20} onClick={handleLike}/> : <AiFillHeart onClick={handleLike} size={20} style={{color : ' #be237b'}}/>}</button>
                    </div>
                  </div>
                    <img  src={gambar} alt="img-NFT"></img>
                    </div>
        </div>
    </div>
  )
}
