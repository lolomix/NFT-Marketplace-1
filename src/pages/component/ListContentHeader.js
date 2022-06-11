import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"
import { useEffect, useState } from "react"

export default function ListContentHeader () {
    const [isFirst, setFirst] = useState(true);
    
    const onClick = () => {
        setFirst(!isFirst);
    }

    return (
            <div class="container d-flex justify-content-center">
                    <div class="mb-4">
                        <div>
                        <button><MdNavigateBefore/></button>
                        <a><img src="https://i.postimg.cc/Jz7Ls0VW/IMG-20220428-041128.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/5NxG3rPB/IMG-20220428-041114.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/9F8xBQw2/IMG-20220428-041150.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/TPmCGj72/IMG-20220428-041137.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/Yq9RjBns/IMG-20220428-041058.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/bJ0PGtJp/IMG-20220428-041016.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/nV72D1pv/IMG-20220428-041028.jpg"></img></a>
                        <a><img src="https://i.postimg.cc/cL8wpxCf/IMG-20220428-041041.jpg"></img></a>
                        <button><MdNavigateNext onClick={onClick}/></button>
                        </div>
                </div>
             </div>
        
    )
}