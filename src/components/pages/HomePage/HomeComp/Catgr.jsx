import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Catgr() {

    const [catgr, setCatgr] = useState()

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatgr(data))
    }, [])

    return (
        <div className='mx-auto my-[4rem]'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-semibold text-black'>Explore our best products certified by <span className='text-[#47c3b5]'>Shopico</span></h1>
            </div>
            <div className='flex gap-[1rem] mx-auto'>
                {catgr?.map((e, i) => (
                    <div key={i} className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                                src={e.linkImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body cardText text-left">
                            <h2 className="card-title text-3xl text-white">{e.title}</h2>
                            <p className='text-white'>{e.des.slice(0, 30)}....</p>
                            <div className="card-actions justify-start">
                                <Link to={`/shop/${e?.cat}`}>
                                    <button className="btn btn-primary btn-success rounded-[25px]">Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
