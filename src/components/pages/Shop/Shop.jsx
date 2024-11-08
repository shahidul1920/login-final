import React, { useEffect, useState } from 'react'
import Catgr from '../HomePage/HomeComp/Catgr'
import { useLoaderData } from 'react-router-dom'

export const Shop = () => {

  //const [allProduct, setAllProduct] = useState()

  // useEffect(() => {
  //   fetch('http://localhost:3000/products')
  //     .then(res => res.json())
  //     .then(data => setAllProduct(data))
  // }, [])

  const allProduct = useLoaderData()

  return (
    <div className='mainContainer'>
      <Catgr />


      <div className="allProduct grid gap-4 grid-cols-3">
        {allProduct?.map((product, i) => (
          <div key={i} className="card card-compact bg-base-100 max-w-[380px] shadow-xl">
            <figure className='figurel'>
              <img
                src={product.imgLink}
                alt={product.brand} />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{product?.brand}</h2>
                <h2 className="card-title">{product?.price}</h2>
              </div>
              <p>{product.category}</p>
              <p>Owner : {product.uploadedBy}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
