import React from "react";
import Logindesign from "../components/Logindesign";
import Image from "next/image";
import Loginform from "../components/Forms";
import { Signupform,Otpform } from "../components/Forms";
import { useState } from "react";

function login() {
  const [renderId, setrenderId] = useState(0);
  function NavigateToSignup() {
    setrenderId(1);
  }
  function NavigateToOtpform() {
    setrenderId(2);
  }
  return (
    <div className="loginContainer">
      <div className="loginDesignContainer">
        <Logindesign />
      </div>
      <div className="loginFormContainer">
        <div className="okGestureIcon">
          <Image src="/healthy.png" width={95} height={111} />
        </div>
        {renderId == 0 && <Loginform NavigateToSignup={NavigateToSignup} />}
        {renderId == 1 && <Signupform NavigateToOtpform={NavigateToOtpform} />}
        {renderId == 2 && <Otpform />}
      </div>
    </div>
  );
}

export default login;
