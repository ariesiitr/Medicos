import React from "react";
import Logindesign from "../components/Login/Logindesign";
import Image from "next/image";
import Loginform from "../components/Login/Forms";
import Navbar from "../components/navbar/Navbar"
import DoctorHomepage from '../components/dashboard/Doctor/Homepage'




function login() {
  return (
    // <div className="loginContainer">
    //   <div className="loginDesignContainer">
    //     <Logindesign />
    //   </div>
    //   <div>
    //   <Navbar />
    //   <div className="loginFormContainer">
    //     <div className="okGestureIcon">
    //       <Image src="/healthy.png" width={95} height={111} />
    //     </div>
    //     <Loginform/>
    //     </div>
    //   </div>
    // </div>
    // <RegisterAsPatient/>
    <DoctorHomepage/>
  );
}

export default login;
