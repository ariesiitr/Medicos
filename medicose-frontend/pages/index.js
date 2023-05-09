import Link from 'next/link'
import React, { Component } from 'react'
import RegisterAs from './components/RegisterAs'
import RegisterAsPatient from './components/RegisterAsPatient'
import Navbar from './components/Navbar'
import NavbarDashboard from './components/NavbarDashboard'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />


export default function Home() {
  return (
    <>
    <RegisterAs/>
    {/* <NavbarDashboard/> */}
    {/* <>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<RegisterAs/>}/>
         </Routes>
         </BrowserRouter>
       
         </> */}
    
    </>
  )
}
