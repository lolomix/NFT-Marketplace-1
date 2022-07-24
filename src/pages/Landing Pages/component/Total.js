import React from 'react'

export default function Total() {

    const data = [
        {
        title : "Artwork",
        total : 52
        },
        {
        title : "Artist",
        total : 99
        },
        {
        title : "Aucations",
        total : 80
         },
    ]

  return (
    <div className="container d-flex justify-content-center align-items-stretch">
                        {data?.map(item=>(
                        <div className='px-4' style={{textAlign : 'center'}}>
                            <div className="fs-4 fw-bold">{item.total}RB</div>
                            <div className="title-total">{item.title}</div>
                        </div>))}
    </div>
  )
}
