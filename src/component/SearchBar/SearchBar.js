import "./index.css"
import { FaSearch } from 'react-icons/fa';

export default function SearchBar () {
    return (
    <div>
        <div className='border border-white p-1'>
            <input type="search" className='border-right-0 border bg-transparent'/>
            <FaSearch/>
        </div>
    </div>
    )
}