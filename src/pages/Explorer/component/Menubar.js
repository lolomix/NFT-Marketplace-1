import { NavLink } from "react-router-dom"
import "../component/style.css"
import {FaFilter} from "react-icons/fa"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useState } from "react"


const Menubar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? '600' : 'normal',
            color: isActive ? '#C93D8D' : 'white',
            backgroundColor: isActive ? 'white' : 'none',
            borderRadius: isActive ? '10px' : 'none',

        }
    }

    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false)
    const [openPrice, setOpenPrice] = useState(false)
    const [filter , setfilter] = useState(false)

    const handlePrice= () => {
        setOpenPrice(!openPrice)
    }


    const handleLicense = () => {
        setOpen(!open)
    }

    const handleFilter = () => {
        setfilter(!filter)
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="col">
                <NavLink className={`menu-bar p-3 `} style={navLinkStyles} to="/Explore">Digital Art</NavLink>
                <NavLink className={`menu-bar p-3 `} style={navLinkStyles} to="/Photography">Photography</NavLink>
                <NavLink className={`menu-bar p-3 `} style={navLinkStyles} to="/Music">Music</NavLink>
                </div>
                <div className="d-flex justify-content-end">
                {filter && ( <> 
                    <div>
                <button onClick={handlePrice} className="filter-menu border border-dark p-2 px-4">Price: $0 - $1,000,000,000 {openPrice ? <FiChevronUp/> : <FiChevronDown/>}</button>
                { openPrice && (
                    <div className="dropdown-price  position-absolute py-2 px-2">
                    <div className="d-flex flex-row">
                    <input type="number" className="border border-dark" min="0"/>
                    <div className="text-black p-2">-</div>
                    <input type="number" className="border border-dark" min="1"/>
                    </div>
                    <button className=" text-white btn mt-2">Apply</button>
                </div>
                )}
                </div>
                <div>
                <button onClick={handleLicense} className="filter-menu border border-dark p-2 px-2">License: All {open ? <FiChevronUp/> :  <FiChevronDown/> }</button>
                    {open && (
                        <div className="dropdown position-absolute text-black px-2 py-2 " >
                            <div className="border-bottom py-1" >All</div>
                            <div className="border-bottom py-1" >Token rights</div>
                            <div className="py-1">Resource Rights</div>
                        </div>
                    )}
                </div>
                </> )}
                <div >
                <button className="filter p-2 " onClick={handleFilter}><FaFilter/> Filter</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Menubar