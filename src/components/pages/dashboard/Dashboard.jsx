import React, { useState } from 'react'

export default function Dashboard() {

  const [uploadProduct, setUploadProduct] = useState()


  return (
    <div className='mainContainer'>

      <div className="card bg-base-100 w-[600px] mx-auto shrink-0 shadow-2xl">

        <div className="left flex-1 flex justify-center text-center mt-[2rem] flex-col gap-[2rem]">
          <h1 className='text-2xl font-bold color-m'>
            Post your product
          </h1>
        </div>

        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name or Brand</span>
            </label>
            <input type="email" placeholder="text" name='brand' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>Select Product Type</option>
              <option>Electronics and Devices</option>
              <option>Pet and Trees</option>
              <option>Books and Information</option>
            </select>            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>



      </div>
    </div>
  )
}
