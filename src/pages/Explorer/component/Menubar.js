import { NavLink } from "react-router-dom"
import "../component/style.css"
import {FaFilter} from "react-icons/fa"
import {FiChevronDown} from "react-icons/fi"


const Menubar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? '600' : 'normal',
            color: isActive ? '#C93D8D' : 'white',
            backgroundColor: isActive ? 'white' : 'none',
            borderRadius: isActive ? '10px' : 'none',

        }
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                <NavLink className={`menu-bar p-3 `} style={navLinkStyles} to="/Explore">Digital Art</NavLink>
                <NavLink className={`menu-bar p-3 `} style={navLinkStyles} to="/Photography">Photography</NavLink>
                <NavLink className={`menu-bar p-3 `} style={navLinkStyles} to="/Music">Music</NavLink>
                </div>
                <div className="col d-flex justify-content-end">
                <button className="filter-menu border border-dark p-2 px-4">Price: $0 - $1,000,000,000 <FiChevronDown/></button>
                <button className="filter-menu border border-dark p-2 px-2">License: All <FiChevronDown/></button>
                <button className="filter p-2 "><FaFilter/> Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Menubar