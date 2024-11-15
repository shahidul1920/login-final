import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider';
import { UserProfile } from './UserProfile';
import { UserProduct } from './UserProduct';
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {

  const { user } = useContext(AuthContext)
  const uploaderData = useLoaderData()

  const handleSubmitProd = (e) => {
    e.preventDefault();
    const dataFrom = e.target;
    const brand = dataFrom.brand.value;
    const category = dataFrom.category.value;
    const imgLink = dataFrom.imgLink.value;
    const details = dataFrom.details.value;
    const price = `BDT ${dataFrom.price.value}`;
    const uploadedBy = user.displayName;
    const uploaderMail = user.email
    const uploaderID = user.uid

    const dataDetailsUpload = {
      uploaderID,
      brand,
      category,
      imgLink,
      details,
      price,
      uploaderMail,
      uploadedBy
    }
    fetch('https://backend-for2ndmarket.vercel.app/products', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataDetailsUpload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          alert(`product uloaded`)
        }
      })

  }
  return (
    <div className='mainContainer'>

      <div className="userDetails">
        <UserProfile />
      </div>

      <div className="card my-[5rem] bg-base-100 w-[600px] mx-auto shrink-0 shadow-2xl">

        <div className="left flex-1 flex justify-center text-center mt-[2rem] flex-col gap-[2rem]">
          <h1 className='text-2xl font-bold color-m'>
            Post your product
          </h1>
        </div>

        <form onSubmit={handleSubmitProd} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name or Brand</span>
            </label>
            <input type="text" placeholder="Product Name or Brand" name='brand' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name='category' className="select select-bordered w-full">
              <option disabled selected>Select Product Type</option>
              <option>Electronics</option>
              <option>Hobby</option>
              <option>Books</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image</span>
            </label>
            <input type="text" placeholder="Paste Image Link" name='imgLink' className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Decription and Details</span>
            </label>
            <textarea className='input input-bordered' name="details" id=""></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Asking Price</span>
            </label>
            <input type="number" placeholder="Enter Asking Price" name='price' className="input input-bordered" />
          </div>


          <div className="form-control mt-6">
            <button className="btn btn-primary">Upload Product</button>
          </div>
        </form>

      </div>

      <div className="uploaderHistory">
        <div className='text-center mb-[3rem]'>
          <h1 className='text-3xl font-semibold text-black'>Your recent posts</h1>
          <p className='max-w-[740px] mx-auto mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius non quod assumenda, cupiditate labore possimus
          </p>
        </div>
        <UserProduct upoloderData={uploaderData} />
      </div>

    </div>
  )
}
