import React from 'react'

export default function Discount() {
    return (
        <div className='flex disc-r rounded bg-[#47c3b5]'>

            <div className="left text-cen flex-1 text-white">
                <h1 className='text-4xl'>
                    50% OFF Electronics Components
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, commodi?</p>
                <div>
                    <button className="btn btn-primary rounded-[25px] btn-success">Success</button>
                </div>
            </div>

            <div className="right flex-1 grid place-items-center">
                <img src="/src/assets/laptop-prod.png" alt="laptop product" />
            </div>

        </div>
    )
}
