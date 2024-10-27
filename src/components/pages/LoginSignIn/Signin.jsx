import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider';

export default function Signin() {

    const {userCreate, googleLog, updateUser} = useContext(AuthContext)

    const { register, handleSubmit, formState:{errors} } = useForm();
    
    const handleSignUp = (data)=>{
        console.log(data);
        userCreate(data.email, data.password)
        .then((result) =>{
            const user = result.user;
            console.log(user);
            const dataUpUser = {
                displayName:data.text
            }
            updateUser(dataUpUser)
            .then(()=>{})
            .catch(error=>{console.log(error);
            })
        })
        .catch((error) =>{
            console.log(error);
            
        })
    }

  return (
    <div className='mainContainer'>
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body max-w-[500px] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('text', {required: 'enter name'})} type="text" placeholder="Name" className="input input-bordered" />
                    {errors.text && <p className='label-text text-red-400'>{errors.text.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email', {required: 'Please enter your mail'})} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className='label-text text-red-400'>{errors.email.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register('password',{required:'must enter a storng password', pattern:{value: /(?=.*\d)(?=.*[A-Z])/, message:'password must follow regex pattern'}})} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='label-text text-red-400'>{errors.password.message}</p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="noAcc">
                    <Link to='/login'>You already have an account? click to login!</Link>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Creat Account</button>
                </div>
                <div className="divider">OR</div>
                <div className="form-control">
                    <button onClick={()=>(googleLog())} className="btn btn-outline">Continue with Google</button>
                </div>
            </form>
        </div>
  )
}
