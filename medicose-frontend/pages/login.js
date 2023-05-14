import React from "react";
import Logindesign from "../components/Login/Logindesign";
import Image from "next/image";
import Loginform from "../components/Login/Forms";
import MobNavbar from "../components/navbar/MobNavbar"
<<<<<<< HEAD
import DoctorHomepage from '../components/dashboard/Doctor/Homepage'
=======
>>>>>>> 640617f11de5c08ced13cd3f54ee3548f8ddf937




function login() {
  return (
    <div className="loginContainer">
      <div className="loginDesignContainer">
        <Logindesign />
      </div>
      <div>
<<<<<<< HEAD
      <MobNavbar />
=======
      {/* <MobNavbar /> */}
>>>>>>> 640617f11de5c08ced13cd3f54ee3548f8ddf937
      <div className="loginFormContainer">
        <div className="okGestureIcon">
          <Image src="/healthy.png" width={95} height={111} />
        </div>
        <Loginform/>
        </div>
      </div>
    </div>
    
    
  );
}

export default login;
