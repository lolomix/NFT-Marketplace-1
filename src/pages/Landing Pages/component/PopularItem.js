import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';
import {FaEthereum} from "react-icons/fa"

const listPopular = gql`
query MyQuery {
    popular {
      image
      name
      price
      description
      id
    }
  }
`

export default function PopularItem() {
  const listPopularQuery = useQuery(listPopular)

  return (
    <>
    <section className="Popular">
                <div className="container">
                 <h2 className="mb-4">Popular item</h2>
                    <div className="popular-item d-flex justify-content-between">
                        {listPopularQuery.data?.popular.map((list) => (
                        <div className="col p-2">   
                            <div className="popular-image">
                                    <div className="popular-item-image mb-5">
                                    <img src={list.image}></img>
                                    </div>
                                    <div>
                                      <div className="desc-item d-flex justify-content-between">
                                          <div>
                                              <p className="Artist-Name">{list.name}</p>
                                          </div>
                                              <div className="col d-flex justify-content-end">
                                              <p>Price</p>   
                                              </div>
                                      </div>
                                      <div className="d-flex justify-content-between mb-5">
                                              <div className="popular-description">
                                                  <div className='text-truncate' style={{maxWidth : '150px'}}>{list.description}</div>
                                              </div>
                                              <div className="d-flex align-items-center">
                                                  <FaEthereum/>
                                                  <div>{list.price}</div>
                                              </div>
                                          </div>
                                    </div>
                                    <Link to={`/Payment/${list.id}`} style={{textDecoration: 'none'}}>
                                        <div className="btn-buy d-flex justify-content-center">Buy Now</div>
                                    </Link>
                        </div>
                        </div>
                    ))}         
                </div>                    
                </div>
            </section>
            </>
  )
}
