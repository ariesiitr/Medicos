import React, { Children, Component } from 'react';
import * as ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
// import {
// 	useRouter,
// 	createBrowserRouter,
// 	RouterProvider,
//   } from "react-router-dom";
//   import { BrowserRouter, Routes, Route } from "react-router-dom";

  import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
/>;
import RegisterAsDoctor from '../components/Register/RegisterAsDoctor'
import login from './login';
import RegisterAs from '../components/Register/RegisterAs'
import App from '../pages/_app';
import Homepage from '../components/dashboard/Doctor/Homepage'


// if(typeof window !== "undefined"){
// 	const router = createBrowserRouter([
// 		{
// 			path: '/',
// 			element : <App />,
// 			Children:[
// 				{
// 					path: '/RegisterAsDoctor',
// 					element: <RegisterAsDoctor/>

// 				}
// 			]
// 		}
// 	])

// }


export default function Home() {
	return (
		<>
		{/* <RegisterAsDoctor/> */}
		{/* <RegisterAs/> */}
		<Homepage/>
		
  {/* <RouterProvider router={router} />  */}
	
    </>
  )

}
