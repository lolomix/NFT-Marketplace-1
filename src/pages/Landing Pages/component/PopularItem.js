import React from 'react'
import { gql, useQuery } from "@apollo/client";
import Card from '../../../component/molecules/Card';
import Title from '../../../component/molecules/Title/Index';


const listPopular = gql`
query MyQuery {
    popular {
      image
      name
      price
      description
      id
    }
  }
`

export default function PopularItem() {
  const listPopularQuery = useQuery(listPopular)

  return (
    <>
    <section className="mt-5">
                <div className="container">
                 <Title title="Popular Item"/>
                    <div className="popular-item d-flex justify-content-between">
                        {listPopularQuery.data?.popular.map((list) => (
                        <Card
                        image = {list.image}
                        name = {list.name}
                        description = {list.description}
                        price = {list.price}
                        id = {list.id}
                        />
                    ))}         
                </div>                    
                </div>
            </section>
            </>
  )
}
