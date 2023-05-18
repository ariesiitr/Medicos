import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Loginform() {
	const [userName, setuserName] = useState('');
	const [Password, setPassword] = useState('');
	const [pass_error, setpass_error] = useState('');
	const [Error, setError] = useState("")
	const [pass_error_bool, setpass_error_bool] = useState(false);

	const LOGIN_API = `http://127.0.0.1:8000/login/`;

	const passValidate = () => {
		setTimeout(function () {
			if (Password.length < 7) {
				setpass_error_bool(true);
				setpass_error('Password should be more than 8 letters');
			} else {
				setpass_error_bool(false);
				setpass_error('');
			}
		}, 100000);
	};
	const router = useRouter();
	const submit = () => {
		if (Password.length > 7) {
		  FetchApi('POST', LOGIN_API, { username: userName, password:Password })
			.then(data => {
			  if (data.success === 'Doctor login successful') {
				// Redirect to the doctor dashboard page
				router.push('/dashboard/Doctor/Homepage');
			  } 
			  if (data.success === 'Patient login successful') {
				// Redirect to the doctor dashboard page
				router.push('/dashboard/Patient/Homepage');
			  } 
			  if (data.success === 'Chemist login successful') {
				// Redirect to the doctor dashboard page
				router.push('/dashboard/Chemist/Homepage');
			  } 
			  
			  else {
				setError('Login unsuccessful');
			  }
			})
			.catch(error => {
			  setError('Error occurred during login');
			  console.error('Error:', error);
			});
		} else {
		  setError('Password should be more than 8 characters');
		}
	  };
	
	  const FetchApi = (method, url, params) => {
		return new Promise((resolve, reject) => {
		  axios({
			method: method,
			url: url,
			data: params,
			responseType: 'json',
		  })
			.then(res => resolve(res.data))
			.catch(err => reject(err));
		});
	  };

	return (
		<>
			<div className="greet">Hello ! Welcome Back</div>
			<div>
				<div className="inputLabel">Username</div>
				<input
					type="text"
					placeholder="Enter your username"
					className="Input"
					onChange={(e) => setuserName(e.target.value)}
				/>
			</div>
			<div>
				<div className="inputLabel">Password</div>
				<input
					type="password"
					placeholder="Enter your Password"
					className="Input"
					onChange={(e) => {
						setPassword(e.target.value);
						passValidate();
					}}
				/>
			</div>
			<div className="checkboxContainer">
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						height: '1rem',
						gap: '0.5rem',
						alignItems: 'center',
					}}
				>
					<input type="checkbox" className="Input" />
					<label>Remember me</label>
				</div>
				<div
					style={{
						color: '#089996',
						cursor: 'pointer',
					}}
				>
					Forgot your password?
				</div>
			</div>

			<button
				className="btn"
				style={{
					backgroundColor: '#089996',
					color: '#FFFFFF',
				}}
				onClick={() => {
					submit();
				}}
			>
				Login
			</button>
			<hr />
			{/* 
			<button
				className="btn"
				style={{
					backgroundColor: '#FFFFFF',
					color: 'black',
				}}
			>
				<Image
					src="/googleLogo.png"
					width={30}
					height={35}
					style={{ marginRight: '16px' }}
				/>
				Login with Google
			</button> */}
			<div>
				<text> Don’t have an account?</text>
				<span
					style={{
						cursor: 'pointer',
						color: '#089996',
						marginLeft: '10px',
					}}
				>
					<Link href="/RegisterAs/RegisterAs">Create Account</Link>
				</span>
			</div>
		</>
	);
}


function Otpform() {
	const [isVerified, setisVerified] = useState(true);
	function Verify() {
		setisVerified(false);
	}
	return (
		<>
			<div className="greet">Create your account</div>
			<div>
				<div className="inputLabel">OTP</div>
				{isVerified ? (
					<>
						{' '}
						<input
							type="text"
							placeholder="Enter One Time Password"
							className="Input"
						/>
						<button
							className="btn"
							onClick={Verify}
							style={{
								marginTop: '2.5rem',
							}}
						>
							Verify
						</button>
					</>
				) : (
					<>
						{' '}
						<div className="invalidOtp">
							<input
								type="text"
								placeholder="Enter One Time Password"
								className="Input"
							/>
							<img
								src="/vector.png"
								width={20}
								height={20}
								style={{
									marginLeft: '-2rem',
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

export { Otpform };
