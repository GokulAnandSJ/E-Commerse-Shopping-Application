import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiUserCircle } from 'react-icons/pi';

const Headers = () => {
  let [isOpen,setIsOpen]=useState(false)
  return (
    <>
    <div className='h-20 w-full flex items-center justify-center '>
      
        <div className='  h-16 w-4/5  border-solid bg-white flex items-center justify-evenly'>
          <div className='  w-fit'>
            
            <img  className=' ml-20 h-10' src="/src/Images/Flip_Logo.png" alt="" title='FlipKart'/>

          </div>
          <div className='w-4/5'>
             <input  title='Search for Products, Brands and more' className='  font-medium h-10 w-full p-1 bg-sky-50 rounded-xl outline-none border-white' type="search"  placeholder=' Search for Products, Brands and More ' />
          </div>
        </div>
        <div className=' h-16 w-2/5  bg-white flex items-center justify-around'>

               
        <div className="relative"  onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
      <span
        className="cursor-pointer   flex items-center justify-center text-lg hover:text-white hover:bg-blue-500 p-3 hover:rounded-xl"
       >
       <PiUserCircle/><Link to='/login'>Login</Link> 
      </span>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-md p-4 ">
          <ul>
            <li className="mb-2">
              <Link className='flex items-center justify-between border-solid border-b-2 p-2' title='Sign Up'>
              <div>New Customer?</div>
              <div>
                <Link className='text-blue-500 font-bold' title='Sign Up' to='/register' >Sign Up</Link>
              </div>
               </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='My Profile' to='/login'>
              <Link to='/login'>My Profile</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='Flipkart Plus Zone'>
              <Link>Flipkart Plus Zone</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='Orders'>
              <Link>Orders</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='WishList'>
              <Link>WishList</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p-1" title='Rewards'>
              <Link>Rewards</Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 p1" title='GiftCards'>
              <Link>GiftCards</Link>
            </li>
          </ul>
        </div>
      )}
    </div>

            <div className='text-lg' title='Become a Seller' >
              <Link to='/register'>Become a Seller</Link>
            </div> 
  
    
        </div>
    </div>
    </>
  )
}

export default Headers


{/* <div>

</div>
<div className='flex item-center justify-around'>
<Link to={"/"}>Logo</Link>
 <Link to={"/login"}>Login</Link>
<Link to={"/register"}>Register</Link>
</div> */}