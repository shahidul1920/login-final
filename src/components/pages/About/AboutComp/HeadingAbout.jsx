import React from 'react'

export const HeadingAbout = () => {
    return (
        <div className='my-[5rem] text-center capitalize grid gap-[2rem]'>
            <h1 className='text-4xl font-bold max-w-[680px] text-green-600 mx-auto'>do you know you are in the right place to sell or buy anything</h1>
            <p className='max-w-[680px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus quasi quae officia rem quod atque et tenetur, accusamus consequatur!</p>
            <div className="mt-6 flex gap-3 align-center justify-center">
                <button className="btn btn-primary text-white btn-success">Shop Now</button>
                <button className="btn btn-outline btn-success">Sell Now</button>
            </div>
        </div>
    )
}
