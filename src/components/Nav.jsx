import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-x-10 mb-10 '>
      {/* <Link to="/">Home</Link> */}
      {/* isse pageresolad ni hota h */}
      <NavLink style={(e) => e.isActive ? { textDecoration: "underline" } : {}} className={(e) => e.isActive ? "text-red-500" : ""} to="/">Home</NavLink>
      <NavLink style={(e) => e.isActive ? { textDecoration: "underline" } : {}} className={(e) => e.isActive ? "text-red-500" : ""} to="/About">About</NavLink>
      <NavLink style={(e) => e.isActive ? { textDecoration: "underline" } : {}} className={(e) => e.isActive ? "text-red-500" : ""} to="/Service">Service</NavLink>
      <NavLink style={(e) => e.isActive ? { textDecoration: "underline" } : {}} className={(e) => e.isActive ? "text-red-500" : ""} to="/List">List</NavLink>

    </div>
  )
}

export default Nav