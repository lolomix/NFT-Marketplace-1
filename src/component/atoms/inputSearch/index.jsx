import "./Search.css"
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import Button from "../Buttons";

export default function Search () {

    const [value, setValue] = useState("")

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="Search ">
            <input className="text-light p-2" type="input" placeholder="Search item, collection, Artist" value={value} onChange={onChange}/>
            <Button className="p-2"><FaSearch/></Button>
        </div>
    )
}