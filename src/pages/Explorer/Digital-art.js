import { Link } from 'react-router-dom'

export default function DigitalArts ({
    name,
    gambar,
    description,
    price,
    id
}) {
    
    return (
       
    <div className="pb-2 text-light">   
        <div className="explorer-item ">
                <div className="item-image pb-4">
                <img src={gambar}></img>
                </div>
                <div className="desc-item row">
                    <div className="col-7">
                        <p className="Artist-Name">{name}</p>
                    </div>
                        <div className="col d-flex justify-content-end">
                                <p>Price</p>   
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-7">
                            <a>{description}</a>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <a><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/ethereum.png?alt=media&token=593235eb-5855-426c-8541-03c97a84216f"></img></a>
                            <p>{price}</p>
                        </div>
                </div>
                    <div className=''>
                    <Link to={`/Payment/${id}/`}  style={{textDecoration: 'none'}}><a className="btn-buy d-flex justify-content-center">Buy Now</a></Link>
                    </div>
            </div>
    </div>
    )
}