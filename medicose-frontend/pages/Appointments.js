import { useState } from 'react'
import React from 'react'
import NavbarDashboard from '../components/navbar/NavbarDashboard'
import VerticalNavbarDashboard from '../components/navbar/VerticalNav'

const ChemistHome = () => {
  const [toggleState,setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index)
    setToggleState(index);
  }

  return (
    <div style={{padding:"35rem"}}>Appointments Page Under Maintenance, Please visit later.<br></br>We appreciate your patience.</div>
  )
}

export default ChemistHome