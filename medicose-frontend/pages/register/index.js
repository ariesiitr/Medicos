import React, { useState } from "react";
import Logindesign from "../components/Logindesign";
import Image from "next/image";
import { Signupform, Otpform } from "../components/Forms";
import Navbar from "../../components/navbar/Navbar"

function register() {
  const [renderId, setrenderId] = useState(0);
  function NavigateToOtpform () {
    setrenderId(1)
  }

  return (
    <div className="loginContainer">
      <div className="loginDesignContainer">
        <Logindesign />
      </div>
      <Navbar />
      <div className="loginFormContainer">
        <div className="okGestureIcon">
          <Image src="/healthy.png" width={95} height={111} />
        </div>
        {renderId == 0 && <Signupform 
        NavigateToOtpform={NavigateToOtpform}
        />}
        {renderId == 1 && <Otpform />}
      </div>
    </div>
  );
}

export default register;
