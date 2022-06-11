import "./SearchBar.css"
import { FaSearch } from 'react-icons/fa';

export default function SearchBar () {
    return (
    <div>
        <div className="Search">
        <div className="input-group p-2 ">
            <input className="text-light" type="search" placeholder="Search item, collection"/>
            <button><FaSearch/></button>
        </div>
        </div>
    </div>
    )
}