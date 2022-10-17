import Navbar from '../../component/molecules/Navbar'
import { gql, useQuery } from '@apollo/client'
import "./Explorer.css"
import Filter from './component/filter'
import Card from '../../component/molecules/Card'
import Footer from '../../component/molecules/Footer/Index'
import CardSkeleton from '../../component/molecules/CardSkeleton'
import LoadingSvg from '../../component/atoms/Loading'

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
        return <LoadingSvg/>
    }
    if(error) {
        <h1>Null</h1>
    }

    return (
        <div>
        <div className="Explore">
        <Navbar/>
            <div className="container">

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