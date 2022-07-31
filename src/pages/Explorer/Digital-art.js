import { Link } from 'react-router-dom'
import {FaEthereum} from "react-icons/fa"

export default function DigitalArts ({
    name,
    gambar,
    description,
    price,
    id
}) {
    
    return (
       
    <div className="p-2 text-light">   
        <div className="explorer-item ">
                <div className="item-image">
                <img src={gambar}></img>
                </div>
                <div className="desc-item d-flex justify-content-between mb-3">
                    <div className="Artist-Name">{name}</div>
                    <div>Price</div>
                </div>
                    <div className="d-flex justify-content-between mb-5">
                        <div className='text-truncate' style={{maxWidth : '150px'}}>{description}</div>
                        <div className="d-flex align-items-center">
                            <FaEthereum/>
                            <div>{price}</div>
                        </div>
                     </div>
                    <Link to={`/Payment/${id}/`}  style={{textDecoration: 'none'}}><div className="btn-buy d-flex justify-content-center">Buy Now</div></Link>
            </div>
    </div>
    )
}