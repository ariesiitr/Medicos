import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Loginform() {


  const [userName, setuserName] = useState('');
  const [Password, setPassword] = useState('');
  const [pass_error, setpass_error] = useState('');
  const [pass_error_bool, setpass_error_bool] = useState(false);

	// console.log(Password);
	// console.log(userName);
	const router = useRouter();

	function submit() {
		if (Password.length > 7) {
		  FetchApi(
			'POST',
			LOGIN_API,
			{
			  username: userName,
			  password: Password,
			},
			null
		  )
			.then(response => {
			
			  return response.text;
			})
			.then(data => {
				if (data && data.success === '"Chemist login successful') {
				  window.location.href = '/chemist-page';
				} else if (data && data.success === 'Doctor login successful') {
				  window.location.href = '/doctor-page';
				} else if (data && data.success === 'Patient login successful') {
				  window.location.href = '/patient-page';
				} 
			})
			.catch(error => {
			  console.error(error);
			});
		}
	  }
	  

// console.log(Password);
// console.log(userName);

  function submit() {
    if (Password.length > 7) {
      FetchApi(
        'POST',
        LOGIN_API,
        {
          username: userName,
          password: Password,
        },
        null
      )
    }
  }

  return (
    <>
      <div className="greet">Hello ! Welcome Back</div>
      <div>
        <div className="inputLabel">Username</div>
        <input type="text" placeholder="Enter your username" 
        onChange={(e) => setuserName(e.target.value)}

        />
      </div>
      <div>
        <div className="inputLabel">Password</div>
        <input type="password" placeholder="Enter your Password" 
        onChange={(e) => 
          {setPassword(e.target.value);
          passValidate();
          }}
      
        />
      </div>
      <div className="checkboxContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "18px",
          }}
        >
          <input type="checkbox" className="Input" />
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
      className="btn"
        style={{
          backgroundColor: "#089996",
          color: "#FFFFFF",
        }}
        onClick={() => {
          submit();
        }}
      >
        Login
      </button>
      <hr />
      <button
      className="btn"
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
      <div>
        <text> Don’t have an account?</text>
        <span
          style={{
            cursor: "pointer",
            color: "#089996",
            marginLeft: "10px",
          }}
        >
          <Link href="/register">Create Account</Link>
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
        <input type="text" placeholder="Enter your Name" className="Input" />
      </div>
      <div>
        <div className="inputLabel">Email</div>
        <input type="email" placeholder="Enter your Email" className="Input" />
      </div>
      <div>
        <div className="inputLabel">Password</div>
        <input type="password" placeholder="Enter your Password" className="Input" />
      </div>
      <div>
        <div className="inputLabel">Confirm Password</div>
        <input type="password" placeholder="Confirm password" className="Input" />
      </div>
      <button className="btn" onClick={props.NavigateToOtpform} style={{
        marginTop: '2.5rem'
      }}>Signup</button>
    </>
  );
}

function Otpform() {
  const [isVerified, setisVerified] = useState(true);
  function Verify () {
    setisVerified(false)
  }
  return (
    <>
      <div className="greet">Create your account</div>
      <div>
        <div className="inputLabel">OTP</div>
        {isVerified ? (
          <>
            {" "}
            <input type="text" placeholder="Enter One Time Password" className="Input" />
            <button className="btn" onClick={Verify} style={{
              marginTop: "2.5rem"
            }}>Verify</button>
          </>
        ) : (
          <>
            {" "}
            <div className="invalidOtp">
              <input type="text" placeholder="Enter One Time Password" className="Input" />
              <img
                src="/vector.png"
                width={20}
                height={20}
                style={{
                  marginLeft: "-2rem",
                }}
              />
            </div>
            <div className="invalidOtpMessage">Invalid OTP</div>
            <button className="btn">Resend OTP</button>
          </>
        )}
      </div>
    </>
  );
}

export { Signupform, Otpform };
