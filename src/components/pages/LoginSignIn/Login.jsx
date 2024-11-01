import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider';


export default function Login() {

    const [errorsLog, setErrors] = useState('')

    const {signinUser, googleLog} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const area = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState:{errors} } = useForm();
    const handleLogIn = (data) =>{

        signinUser(data.email, data.password)
        .then((result)=>{
            navigate(area, {replace:true})
            const user = result.user;
        }).catch(error=>{
            setErrors(error.message) 
            console.log(error);
                       
        })     
    }

    return (
        <div className='mainContainer'>
            <form onSubmit={handleSubmit(handleLogIn)} className="card-body max-w-[500px] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register('email', {required: 'enter email'})} className="input input-bordered" />
                    {errors.email && <p className='label-text text-red-400'>{errors.email.message}</p> }
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" {...register('password', {required: 'must enter', pattern:{
                        value: /(?=.*\d)(?=.*[A-Z])/,
                        message:'password must follow regex pattern'
                    }})} placeholder="password" className="input input-bordered" />
                    
                    {errors.password && <p className='label-text text-red-400'>{errors.password.message}</p> }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="noAcc">
                    <Link to='/signin'>You new here? Create an account for free!</Link>
                </div>
                <p>{errorsLog == "Firebase: Error (auth/invalid-credential)." ? <p className='label-text text-red-400'>Create Account</p> : ''}</p>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button onClick={()=>(googleLog())} className="btn btn-outline">Continue with Google</button>
                </div>
            </form>
        </div>
    )
}
