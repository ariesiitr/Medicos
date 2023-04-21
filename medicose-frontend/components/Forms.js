import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Loginform(props) {
  return (
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
      <button
        style={{
          backgroundColor: "#FFFFFF",
          color: "black",
        }}
      >
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
        <text> Don’t have an account?</text>
        <span
          style={{
            cursor: "pointer",
            color: "#089996",
            marginLeft: "10px",
          }}
        >
          <Link href="/register">
          Create Account
          </Link>
        </span>
      </div>
    </>
  );
}

function Signupform(props) {
  return (
    <>
      <div className="greet">Create your account</div>
      <div>
        <div className="inputLabel">Username</div>
        <input type="text" placeholder="Enter your Name" />
      </div>
      <div>
        <div className="inputLabel">Email</div>
        <input type="email" placeholder="Enter your Email" />
      </div>
      <div>
        <div className="inputLabel">Password</div>
        <input type="password" placeholder="Enter your Password" />
      </div>
      <div>
        <div className="inputLabel">Confirm Password</div>
        <input type="password" placeholder="Confirm password" />
      </div>
      <button onClick={props.NavigateToOtpform}>Signup</button>
    </>
  );
}

function Otpform() {
  return (
    <>
      <div className="greet">Create your account</div>
      <div>
        <div className="inputLabel">OTP</div>
        <input type="number" placeholder="Enter One Time Password" />
      </div>
      <button>Verify</button>
    </>
  );
}

export { Signupform, Otpform };
