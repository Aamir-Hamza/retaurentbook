import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
   <>
  <Link to={"/home"}>Setting</Link>
  <br></br>
  <Link to={"/booking"}>Booking</Link>
   
   
   
   </>
  )
}

export default Sidebar