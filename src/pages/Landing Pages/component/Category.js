import React from 'react'
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <>
     <section className="Category">
            <div className="container">
                <h2 className="row">Category</h2>
                    <div className="Category-item row">
                        <div className="col pt-4">
                            <Link to="#" style={{textDecoration: 'none'}}>
                            <div className="category-image item-image-1 ">
                                <div className=" d-flex justify-content-end">
                                    <div className="Category-item-title d-flex justify-content-end">Photography</div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        
                        <div className="col pt-4 ">
                        <Link to="/Explore" style={{textDecoration: 'none'}}>
                            <div className="category-image item-image-2 ">
                                <div className=" d-flex justify-content-end">
                                    <div className="Category-item-title d-flex justify-content-end">Digital Arts</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        

                        <div className="col pt-4">
                        <Link to="/Explore" style={{textDecoration: 'none'}}>
                            <div className="category-image item-image-3 ">
                                <div className=" d-flex justify-content-end">
                                    <div className="Category-item-title d-flex justify-content-end">Music</div>
                                </div>
                            </div>
                        </Link>
                        </div>
                    </div>
            </div>
          </section>
    </>
  )
}
