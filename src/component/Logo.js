import { Link } from 'react-router-dom'
import './style.css'

export function Logo () {
    return (
        <div>
            <a class="logo"><Link to="/" style={{textDecoration: 'none'}}><span>NFT</span> Collection</Link></a>
        </div>
    )
}