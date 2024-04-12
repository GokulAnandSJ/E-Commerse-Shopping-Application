import React from 'react'

const Login = () => {


  let handle=()=>{
    console.log("hello")
    
  }


  return (
    <div >
      <form action="">
        <input type="email" placeholder='Enter Your Email'/> <br />
        <input type="password" name="" id="" placeholder='Enter Your Password' /> <br />
       <button type='submit' onClick={handle()}>Submit</button>
      </form>
    </div>
  )
}

export default Login
