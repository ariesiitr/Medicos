import { useState } from 'react'
import React from 'react'
import NavbarDashboard from '../Navbar/NavbarDashboard'
import VerticalNavbarDashboard from '../Navbar/VerticalNavbarDashboard'

const ChemistHome = () => {
  const [toggleState,setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index)
    setToggleState(index);
  }

  return (
    <div>Chemist HomePage Under Maintenance, Please visit later.<br></br>We appreciate your patience.</div>
  )
}

export default ChemistHome