import { Link } from 'react-router-dom'
import './Logo.css'

export function Logo () {
    return (
        <div>
            <a className="logo"><Link to="/" style={{textDecoration: 'none'}}><span>NFT</span> Collection</Link></a>
        </div>
    )
}

