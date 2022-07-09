import React from 'react'
import NavLike from './NavLike'

export default function ItemImage({gambar}) {
  return (
    <div>
      <div className="col d-flex justify-content-center ">
                    <div className='border border-dark rounded-5'>
                    <div><NavLike/></div>
                    <img  src={gambar} alt="img-NFT"></img>
                    </div>
        </div>
    </div>
  )
}
