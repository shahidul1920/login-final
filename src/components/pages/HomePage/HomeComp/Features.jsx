import React from 'react'

export default function Features() {
    return (
        <div className='sectionCol py-[5rem] mt-[6rem]'>
            <div className="heading">
                <h1 className='text-3xl mb-8 text-black font-semibold text-center'>Our Key Features</h1>
            </div>

            <div className="smallCards mainContainer flex gap-[2rem]">

                <div className="card hover:bg-[#999] hover:text-[#fff] bg-[#47c3b5] text-primary-content w-96">
                    <div className="card-body">
                        <div className="card-actions justify-start mb-[1rem]">
                            <button className="btn btn-outline border-white">
                                <img width="30" src="https://img.icons8.com/dotty/80/easy.png" alt="easy" />
                            </button>
                        </div>
                        <h2 className="card-title">Easy to Buy</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, eaque.</p>
                    </div>
                </div>

                <div className="card hover:bg-[#999] hover:text-[#fff] bg-[#47c3b5] text-primary-content w-96">
                    <div className="card-body">
                        <div className="card-actions justify-start mb-[1rem]">
                            <button className="btn btn-outline border-white">
                                <img width="30" src="https://img.icons8.com/ios/50/private2.png" alt="easy" />
                            </button>
                        </div>
                        <h2 className="card-title">Most secure</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, eaque.</p>
                    </div>
                </div>

                <div className="card hover:bg-[#999] hover:text-[#fff] bg-[#47c3b5] text-primary-content w-96">
                    <div className="card-body">
                        <div className="card-actions justify-start mb-[1rem]">
                            <button className="btn btn-outline border-white">
                                <img width="30" src="https://img.icons8.com/ios/50/share-2--v1.png" alt="easy" />
                            </button>
                        </div>
                        <h2 className="card-title">Build Network</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, eaque.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
