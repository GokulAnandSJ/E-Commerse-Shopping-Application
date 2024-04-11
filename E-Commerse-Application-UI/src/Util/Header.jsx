import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex item-center justify-around bg-blue-500 text slat'>

      <Link to={"/"}>Logo</Link><br/>
      <br/>

      <Link to={"/login"}>Login</Link><br/>
      <br/>
      <Link to={"/register"}>Register</Link><br/>
     </div>
  )
}

export default Header
