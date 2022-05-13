import { Link } from 'react-router-dom'

export default function DigitalArts ({
    name,
    gambar,
    description,
    price
}) {
    return (
        
        <div class="col p-2 text-light">   
        <div class="popular-image">
                <div class="item-image pb-4">
                <img src={gambar}></img>
                </div>
                <div class="desc-item row mt-3 mb-4">
                    <div class="col-7">
                        <p class="Artist-Name">{name}</p>
                    </div>
                        <div class="col-4 d-flex justify-content-end">
                                <p>Price</p>   
                        </div>
                    <div class="row">
                        <div class="col-sm-7">
                            <a>{description}</a>
                        </div>
                        <div class="col-5 d-flex justify-content-end">
                            <a><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/ethereum.png?alt=media&token=593235eb-5855-426c-8541-03c97a84216f"></img></a>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
                <Link to="#" style={{textDecoration: 'none'}}>
                    <Link to="/Payment"  style={{textDecoration: 'none'}}><a class="btn-buy d-flex justify-content-center">Buy Now</a></Link>
                </Link>
            </div>
    </div>
    )
}