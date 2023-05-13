import Link from 'next/link'
import React, { Component } from 'react'
import RegisterAs from '../components/RegisterPage/RegisterAs'
import RegisterAsChemist from '../components/RegisterPage/RegisterAsChemist'
import Navbar from '../components/Navbar/NavbarRegister'
import NavbarDashboard from '../components/Navbar/NavbarDashboard'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import DoctorCalender from '../components/DoctorDashboard/DoctorCalender'
import DoctorHome from '../components/DoctorDashboard/DoctorHome'
import RegisterAsPatient from '../components/RegisterPage/RegisterAsPatient'
import RegisterAsDoctor from '../components/RegisterPage/RegisterAsDoctor'
import ChemistHome from '../components/ChemistDashboard/ChemistHome'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />



export default function Home() {
  return (
    <>
    {/* <RegisterAs/> */}
    {/* <DoctorCalender/> */}
    {/* <ChemistHome/> */}
    {/* <DoctorHome/> */}
    <RegisterAsChemist/>
    {/* <RegisterAsPatient/> */}
    {/* <RegisterAsDoctor/> */}
    
    
    </>
  )
}
