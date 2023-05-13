import React from 'react'
import NavbarDashboard from './NavbarDashboard'
import VerticalNavbarDashboard from './VerticalNavbarDashboard'
import Link from 'next/link'

const DoctorHome = () => {
  return (
    <>
    <div className="d_upper">
        <NavbarDashboard/>
    </div>

    <div className="d_main">
      <div className="d_main-left">
        <VerticalNavbarDashboard/>
      </div>
    <div className="d_main-right">
      {/* <div className="heading">
        
        <h1>Reports</h1>
      </div>
      <input  id='search' placeholder='Enter Patient name or Patient Id' 
       /> */}
    </div>
    </div>
    </>
  )
}

export default DoctorHome