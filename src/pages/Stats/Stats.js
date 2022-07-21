import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import Table from "../../component/Table"

export default function Stats () {
    return (
        <div>
           <div style={{background : '#1F0443', width : '100%', height : '100%'}}>
           <Navbar/>
            <div className="container">
                <Table/>
            </div>
           <Footer/>
           </div>
            
        </div>
    )
}