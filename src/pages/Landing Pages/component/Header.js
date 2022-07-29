import React from 'react'
import ListContentHeader from './ListContentHeader'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Header() {
  return (
    <>
    <header>
             <div className="Header container">
             <div className="d-flex justify-content-between py-3">
                  <div className="title">
                   <h1>Create and Sell Your Digital Masterpiece</h1>
                   <p>With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
                   <Link to="Explore" style={{textDecoration: 'none'}}><a className="btn-solid-lg" >Explore</a></Link>
                  </div>
                  <div classNameName="img-header" ><img style={{borderRadius : '20px 40px'}} src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/unnamed.gif?alt=media&token=8fd2f4d5-cdaf-46e5-9f94-9ca12f9f0938" /></div>
              </div>
             </div>
          </header>
          
          <div className="header2">
            <ListContentHeader/>
          </div>
    </>
  )
}
