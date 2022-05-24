import { Link } from 'react-router-dom'

export default function DigitalArts ({
    name,
    gambar,
    description,
    price,
    id
}) {
    
    return (
       
    <div class="col p-2 text-light">   
        <div class="explorer-item ">
                <div class="item-image pb-4">
                <img src={gambar}></img>
                </div>
                <div class="desc-item row mt-3">
                    <div class="col-7">
                        <p class="Artist-Name">{name}</p>
                    </div>
                        <div class="col d-flex justify-content-end">
                                <p>Price</p>   
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-7">
                            <a>{description}</a>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <a><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/ethereum.png?alt=media&token=593235eb-5855-426c-8541-03c97a84216f"></img></a>
                            <p>{price}</p>
                        </div>
                </div>
                    <Link to={`/Payment/${id}/`}  style={{textDecoration: 'none'}}><a class="btn-buy d-flex justify-content-center">Buy Now</a></Link>
            </div>
    </div>
    )
}