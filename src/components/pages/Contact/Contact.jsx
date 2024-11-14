import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'

export const Contact = () => {
    const {handleContact} = useContext(AuthContext)
    return (
        <div className='mainContainer'>

            <div className='formSec'>
                <form onSubmit={handleContact} className="card-body max-w-[500px] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your message</span>
                        </label>
                        <input type="text" placeholder="Enter your message" className="input h-[140px] input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-outline">Submit</button>
                    </div>
                </form>
            </div>



            
        </div>
    )
}
