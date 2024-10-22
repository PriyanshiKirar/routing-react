import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate= useNavigate();
  const submitHander=(e)=>{
e.preventDefault();
navigate("/");
  }
  return (
  <>
  {/* <h1>sevices</h1> */}
  <form  onSubmit={submitHander}>

  <button className=' border border-green-200 px-3 py-2'>submit</button>
  </form>
  </>

  )
}

export default Service