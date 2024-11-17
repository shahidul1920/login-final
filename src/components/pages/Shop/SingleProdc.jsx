import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const SingleProdc = () => {
    const theProduct = useLoaderData()
    return (
        <div>
            <div className="hero bg-base-200 min-h-[700px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={theProduct.imgLink}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{theProduct.brand}</h1>
                        <h1 className="text-3xl font-bold">{theProduct.category}</h1>
                        <h1 className="text-3xl font-bold">{theProduct.price}</h1>
                        <h1 className="text-2xl font-bold">{theProduct.uploaderMail}</h1>
                        <p className="py-6">
                            {theProduct.details}
                        </p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
