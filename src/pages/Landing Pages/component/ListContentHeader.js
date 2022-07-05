import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"
import { Link } from "react-router-dom";
import { useState } from "react"
import "./style.css"

export default function ListContentHeader () {
    const [isFirst, setFirst] = useState(true);
    
    const onClick = () => {
        setFirst(!isFirst);
    }

    return (
            <div class="container d-flex justify-content-center flex-warp ">
                    <div class="mb-4 list-content">
                        {isFirst && ( <div>
                        <button className="mx-4" onClick={onClick}><MdNavigateBefore size={20}/></button>
                        <Link to="/Explore"><img src="https://i.postimg.cc/Jz7Ls0VW/IMG-20220428-041128.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/5NxG3rPB/IMG-20220428-041114.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/9F8xBQw2/IMG-20220428-041150.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/TPmCGj72/IMG-20220428-041137.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/Yq9RjBns/IMG-20220428-041058.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/bJ0PGtJp/IMG-20220428-041016.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/nV72D1pv/IMG-20220428-041028.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/cL8wpxCf/IMG-20220428-041041.jpg"></img></Link>
                        <button onClick={onClick} className="mx-4"><MdNavigateNext size={20} /></button>
                        </div> )}
                        {!isFirst && ( <div>
                        <button onClick={onClick} className="mx-4"><MdNavigateBefore size={20}/></button>
                        <Link to="/Explore"><img src="https://i.postimg.cc/Jz7Ls0VW/IMG-20220428-041128.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/5NxG3rPB/IMG-20220428-041114.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/9F8xBQw2/IMG-20220428-041150.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/nV72D1pv/IMG-20220428-041028.jpg"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/cL8wpxCf/IMG-20220428-041041.jpg"></img></Link>
                        <button onClick={onClick} className="mx-4"><MdNavigateNext size={20} /></button>
                        </div>)}
                    </div>
             </div>
        
    )
}