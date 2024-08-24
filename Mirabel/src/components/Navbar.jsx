// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {assets} from '../assets/assets'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {

    // eslint-disable-next-line no-unused-vars
    const [visible,setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <img src={assets.logo} className='w-36' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-full border-non h-[2px] bg-gray-700 hidden '/>
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-full border-non h-[2px] bg-gray-700 hidden '/>
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-full border-non h-[2px] bg-gray-700 hidden '/>
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-full border-non h-[2px] bg-gray-700 hidden '/>
            </NavLink>

        </ul>
        <div className='flex items-center gap-6'>
            <img src={assets.search} className='w-5 cursor-pointer' alt=""/>

            <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile} alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>     
            <Link to='/cart' className='relative'>
                <img className='w-5 cursor-pointer' src={assets.cart} alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>35</p>
            </Link>      
            <img onClick={()=>setVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden' alt="" /> 
        </div> 
        {/* Sidebar menu for small creen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' : 'w-0'}` }>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
        </div>      

    </div>
  )
}

export default Navbar
