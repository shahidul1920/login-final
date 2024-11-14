import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'
import Discount from '../HomePage/HomeComp/Discount'

export const Contact = () => {
    const { user } = useContext(AuthContext)

    const handleContact = (e) => {
        e.preventDefault();
        const formInf = e.target;
        const name = formInf.name.value;
        const mail = formInf.mail.value;

    }

    return (
        <div className='mainContainer mt-[4rem]'>

            <div className='formSec flex'>
                <div className="mainForm flex-1">
                    <form onSubmit={handleContact} className="card-body max-w-[500px] mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='mail' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter your message</span>
                            </label>
                            <input type="text" name='message' placeholder="Enter your message" className="input h-[140px] input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-outline">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="rightSec contactImg flex-1 grid place-items-center">
                    <img src="https://images.pexels.com/photos/5410084/pexels-photo-5410084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>


            <div className="dicountSection">
                <Discount />
            </div>


        </div>
    )
}
