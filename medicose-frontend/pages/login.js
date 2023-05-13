import React from "react";
import Logindesign from "../components/Logindesign";
import Image from "next/image";
import Loginform from "../components/Forms";
import Navbar from "../components/navbar/Navbar"



function login() {
  return (
    <div className="loginContainer">
      <div className="loginDesignContainer">
        <Logindesign />
      </div>
      <div>
      <Navbar />
      <div className="loginFormContainer">
        <div className="okGestureIcon">
          <Image src="/healthy.png" width={95} height={111} />
        </div>
        <Loginform/>
        </div>
      </div>
    </div>
    // <DoctorHome/>
  );
}

export default login;
