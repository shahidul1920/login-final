import React from 'react'

export const UserProduct = ({upoloderData}) => {
    
  return (
    <div className='flex flex-wrap gap-[1rem]'>
        {upoloderData?.map((product, i) => (
          <div key={i} className="card catProd card-compact bg-base-100 max-w-[380px] shadow-xl">
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
              <div className="card-actions justify-around mt-[2rem]">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
