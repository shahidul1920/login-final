import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

export default function Header() {

    const {user,userSignOut} = useContext(AuthContext);
    

    const menus = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/'>Contact</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
        </>
    )

    return (
        <div>
            <div className="navbar px-[2rem]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {menus}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#47c3b5] text-xl">Shopico</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal active:text-[#47c3b5] px-1 text-black">
                        {menus}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ? <button onClick={userSignOut}>Sign out</button> : <Link to='/login' className='btn'>Log in</Link>}                    
                </div>
            </div>
        </div>
    )
}
