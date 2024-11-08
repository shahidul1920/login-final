import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'

export const UserProfile = () => {

    const { user } = useContext(AuthContext)
    console.log(user);


    return (
        <div className='bg-[#F4F2F3] mt-[3rem] p-[3rem] rounded shadow-black'>
            <div className="mainUser text-black">
                <div className="topLayer mb-8">
                    <div className="mainDetails flex gap-[2rem] items-center justify-center">
                        <div className="textDetails flex gap-[2rem] items-center justify-between">
                            <div>
                                <h3 className='text-2xl uppercase'>{user?.displayName}</h3>
                                <p>{user?.email}</p>
                            </div>

                            <div>
                                <p className='max-w-[400px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam culpa suscipit perspiciatis minus facilis deleniti asperiores dolores beatae nesciunt tenetur.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomLayer mt-3 mx-auto grid place-items-center">
                    <div className="stats shadow mx-auto">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">86%</div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-desc text-secondary">31 tasks remaining</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
