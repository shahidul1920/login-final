import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Catgr from '../HomePage/HomeComp/Catgr'

export const ProductCat = () => {

    const catType = useLoaderData()

    return (
        <div>

            <Catgr />

            <div className='flex gap-4 flex-wrap'>
                {catType?.map((product, i) => (
                    <div key={i} className="card card-compact bg-base-100 max-w-[380px] catProd shadow-xl">
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