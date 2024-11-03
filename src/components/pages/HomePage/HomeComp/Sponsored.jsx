import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Sponsored() {

    const [spProduct, setSpProduct] = useState()

    useEffect(() => {
        fetch('sponsored.json')
            .then(res => res.json())
            .then(data => setSpProduct(data))
    }, [])

    console.log(spProduct);


    return (
        <div className='my-[2rem] mx-auto'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-semibold text-black'>Get the best deal</h1>
                <p className='max-w-[540px] mx-auto mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non quod assumenda, cupiditate labore possimus deserunt ratione quasi amet vero tenetur eum odio libero corrupti hic accusamus laudantium dignissimos, consectetur fugit! Recusandae rerum vel, similique eligendi porro aut quisquam quos?
                </p>
            </div>
            <div className='flex gap-[1rem] mx-auto'>
                {spProduct?.map((p, i) => (
                    <div key={i} className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure className='bg-white max-h-[280px]'>
                            <img
                                src={p.linkImg}
                                alt={p.title} />
                        </figure>
                        <div className="card-body text-left">
                            <div className='flex justify-between'>
                                <h2 className="card-title">{p.title}</h2>
                                <h2 className="card-title">{p.price}</h2>
                            </div>

                            <div className="flex justify-between grow-0">
                                <p>{p.des.slice(0, 30)}...</p>
                                <p className='text-[#47c3b5]'>{p.type}</p>
                            </div>

                            <div className="card-actions justify-start">
                                <button className="btn btn-outline btn-success rounded-[25px] mt-4">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
