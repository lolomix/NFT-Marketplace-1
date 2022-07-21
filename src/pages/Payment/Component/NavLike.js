import React, { useState }  from 'react'
import {FaEthereum} from "react-icons/fa"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"



export default function NavLike() {

  const [Like, setLike] = useState("true")

  const handleLike = () => {
    setLike(!Like)
  }

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <button className='p-2'><FaEthereum size={20}/></button>
        <div className='p-2 d-flex flex-row align-items-center'>
            <div className='pe-2'>17</div>
            <button>{Like? <AiOutlineHeart size={20} onClick={handleLike}/> : <AiFillHeart onClick={handleLike} size={20} style={{color : ' #be237b'}}/>}</button>
        </div>
      </div>
    </div>
  )
}
