import Navbar from '../../component/molecules/Navbar'
import { gql, useQuery } from '@apollo/client'
import Loading from "../../component/Loading"
import "./Explorer.css"
import Filter from './component/filter'
import Card from '../../component/molecules/Card'
import Footer from '../../component/molecules/Footer/Index'
import CardSkeleton from '../../component/molecules/CardSkeleton'

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

                <div className="d-flex justify-content-between">
                    <div>
                    <Filter/>
                    </div>
                    <CardSkeleton/>

                    <div class=" d-flex flex-wrap">
                    {data?.explore_nft.map((item) => 
                    <Card 
                    name={item.name}
                    image={item.gambar}
                    description={item.description}
                    price={item.price}
                    id={item.id}
                    />
                    )}
                    </div>
                </div>
            </div> 
            <Footer/>
        </div>
        
    </div>
    )
}