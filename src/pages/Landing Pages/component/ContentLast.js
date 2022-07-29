import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentLast() {
  return (
    <>
    <section className="Content-last-background">
            <div className="container d-flex justify-content-center">
                <div className="Content-last">
                    <h1>Ready To Collect NFT</h1>
                    <p>You can collect NFT from sells out digital asset in here</p>
                    <Link to="/Login" style={{textDecoration: 'none'}}><a className="btn-start" >Start Today</a></Link>
                </div>
            </div>
        </section>
    </>
  )
}
