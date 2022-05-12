import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import { gql, useQuery } from '@apollo/client'
import DigitalArts from './Digital-art'

const GetDataExplorer = gql`
query MyQuery {
    explore_nft {
      gambar
      name
      description
      price
    }
  }
  
`

export default function Explore () {
    const {data, loading, error} = useQuery(GetDataExplorer)

    if(loading) {
        <h1>loading</h1>
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
                        <a class="ex-title fs-3">Explorer</a>
                        <a class="ex-menu">Photography</a>
                        <a class="ex-menu menu-active">Digital Art</a>
                        <a class="ex-menu">Music</a>
                    </div>
                </div>

                <div class="Content-explorer pb-4 row">

                {data?.explore_nft.map((item) => 
                <DigitalArts
                    name={item.name}
                    gambar={item.gambar}
                    description={item.description}
                    price={item.price}
                />
                )}
                </div>
            </div> 
            <Footer/>
        </div>
        
    </div>
    )
}