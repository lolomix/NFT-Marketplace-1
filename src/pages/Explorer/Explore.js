import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import { gql, useQuery } from '@apollo/client'
import DigitalArts from './Digital-art'
import Loading from "../../component/Loading"
import Menubar from './component/Menubar'

const GetDataExplorer = gql`
query MyQuery {
    explore_nft {
      gambar
      name
      description
      price
      id
    }
  }
`

export default function Explore () {
    const {data, loading, error} = useQuery(GetDataExplorer)

    if(loading) {
        return <Loading/>
    }
    if(error) {
        <h1>Null</h1>
    }

    return (
        <div>
        <div class="Explore">
        <Navbar/>
            <div class="container">
                
                <div class="row text-light pb-4 pt-4">
                    <div class="col">
                        <Menubar/>
                    </div>
                </div>

                <div class="Content-explorer d-flex justify-content-between flex-wrap">

                {data?.explore_nft.map((item) => 
                <DigitalArts
                    name={item.name}
                    gambar={item.gambar}
                    description={item.description}
                    price={item.price}
                    id={item.id}
                />
                )}
                </div>
            </div> 
            <Footer/>
        </div>
        
    </div>
    )
}