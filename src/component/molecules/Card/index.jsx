import { Link } from 'react-router-dom';
import {FaEthereum} from "react-icons/fa"
import Button from '../../atoms/Buttons';
import "./Card.css"

export default function Card (props) {

    const {image, name, description, price, id} = props

    return (
        <div>   
            <div className="card-nft p-4 text-light m-2">
                <div className="d-flex justify-content-center ">
                    <img src={image} alt="img-nft"/>
                </div>
                    <div className='py-3'>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="Artist-Name">{name}</p>
                            </div>
                                <div className="d-flex justify-content-end">
                                    <p>Price</p>   
                                </div>
                        </div>
                            <div className="d-flex justify-content-between">
                                <div className='text-truncate' style={{maxWidth : '150px'}}>{description}</div>
                                <div className="d-flex align-items-center">
                                    <FaEthereum/>{price}
                                </div>
                            </div>
                    </div>
                        <Link to={`/Payment/${id}`}>
                            <Button 
                                children="Buy Now"
                                className="btn btn-buy text-light p-2"/>
                        </Link>                   
            </div>
        </div>
    )
}