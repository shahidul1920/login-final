import React from 'react'

export default function Hero() {
    return (
        <div className='heroSec max-w-[1270px] bg-[#F4F2F3] rounded text-left text-[#000] flex'>
            <div className="left flex-1 flex justify-center flex-col gap-[2rem]">
                <h1 className='text-4xl font-bold color-m'>
                    Hello! What would you like to buy Sell?
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptatum numquam ut, quam animi molestiae autem corrupti aliquam sapiente earum quia blanditiis porro, similique necessitatibus itaque cupiditate expedita nostrum id? Blanditiis dolorum incidunt eum maiores aliquam aperiam ea sapiente iure numquam quia corrupti repudiandae ut, ratione necessitatibus voluptas consequuntur doloremque.
                </p>
                <div>
                    <button className="btn btn-outline rounded-[25px] btn-success">Explore More</button>
                </div>
            </div>
            <div className="right image flex-1">
                <img src="/src/assets/hero_png.svg" alt="" />
            </div>
        </div>
    )
}
