import React from "react";
import Logindesign from "../components/Logindesign";
import Image from "next/image";
import { useState } from "react";

function login() {
  const [renderId, setrenderId] = useState(0);
  return (
    <div className="loginContainer">
      <div className="loginDesignContainer">
        <Logindesign />
      </div>
      <div className="loginFormContainer">
        <div className="okGestureIcon">
          <Image src="/healthy.png" width={95} height={111} />
        </div>
        {renderId == 0 && (
          <>
            <div className="greet">Hello ! Welcome Back</div>
            <div>
              <div className="inputLabel">Username</div>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div>
              <div className="inputLabel">Password</div>
              <input type="password" placeholder="Enter your Password" />
            </div>
            <div className="checkboxContainer">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "18px",
                }}
              >
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <div
                style={{
                  color: "#089996",
                  cursor: "pointer",
                }}
              >
                Forgot your password?
              </div>
            </div>

            <button
              style={{
                backgroundColor: "#089996",
                color: "#FFFFFF",
              }}
            >
              Login
            </button>
            <hr />
            <button>
              <Image
                src="/googleLogo.png"
                width={30}
                height={35}
                style={{ marginRight: "16px" }}
              />
              Login with Google
            </button>
            <hr />
            <div>
              <span> Don’t have an account?</span>
              <span>Create Account</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default login;
