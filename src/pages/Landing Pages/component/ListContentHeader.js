import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io"
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
                    <div class="list-content">
                        {isFirst && ( <div>
                        <button className="mx-4" onClick={onClick}><IoIosArrowDropleft size={30}/></button>
                        <Link to="/Explore"><img src="https://i.postimg.cc/Jz7Ls0VW/IMG-20220428-041128.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/5NxG3rPB/IMG-20220428-041114.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/9F8xBQw2/IMG-20220428-041150.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/TPmCGj72/IMG-20220428-041137.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/Yq9RjBns/IMG-20220428-041058.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/bJ0PGtJp/IMG-20220428-041016.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/nV72D1pv/IMG-20220428-041028.jpg" alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://i.postimg.cc/cL8wpxCf/IMG-20220428-041041.jpg" alt="img"></img></Link>
                        <button onClick={onClick} className="mx-4"><IoIosArrowDropright size={30} /></button>
                        </div> )}
                        {!isFirst && ( <div>
                        <button onClick={onClick} className="mx-4"><IoIosArrowDropleft size={30}/></button>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210347.jpg?alt=media&token=bb177e50-9a88-4be6-923f-36126c9a6d8e"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210333.jpg?alt=media&token=a9166bea-f7fc-4edd-a2b7-8cb6ebd86646"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210319.jpg?alt=media&token=de2b1b9d-0841-4732-882f-f79c5b4fe5d7"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210256.jpg?alt=media&token=cf4e7d6a-530a-4b05-85ed-4deb944c35d2"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210246.jpg?alt=media&token=773a09b3-e114-4dae-9093-cf1c98fffdfe"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210233.jpg?alt=media&token=13c9bc0e-079a-4b0f-86c3-642914a29523"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210127.jpg?alt=media&token=2d6bc3ce-9621-42bc-93e9-87f0c8866dd2"alt="img"></img></Link>
                        <Link to="/Explore"><img src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/IMG_20220709_210205.jpg?alt=media&token=3ffd194b-0fad-4874-921c-1df8e5b9b125"alt="img"></img></Link>
                        <button onClick={onClick} className="mx-4"><IoIosArrowDropright size={30} /></button>
                        </div>)}
                    </div>
             </div>
        
    )
}