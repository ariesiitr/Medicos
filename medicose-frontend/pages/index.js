import React, { Children, Component } from 'react';
import * as ReactDOM from "react-dom";
import RegisterAsDoctor from '../components/Register/RegisterAsDoctor'
import LoginPage from './Login'
import RegisterAs from './RegisterAs'
import App from '../pages/_app';
import Homepage from '../components/dashboard/Doctor/Homepage'
import PatientHomepage from '../components/dashboard/Patient/Homepage'


<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
/>;


export default function Home() {
	return (
		<>
		{/* <RegisterAsDoctor/> */}
   <LoginPage/>
		{/*<Homepage/> */}
    {/*<PatientHomepage/>*/}
		
  {/* <RouterProvider router={router} />  */}
	
    </>
  )

}
