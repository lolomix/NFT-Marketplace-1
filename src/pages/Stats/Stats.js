import Footer from "../../component/molecules/Footer/Index"
import Navbar from "../../component/molecules/Navbar"
import Table from "../../component/molecules/Table"


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