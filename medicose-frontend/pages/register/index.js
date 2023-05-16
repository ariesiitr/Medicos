import React, { useEffect, useState } from 'react';
import Logindesign from '../../components/Login/Logindesign';
import Image from 'next/image';
import MobNavbar from '../../components/navbar/MobNavbar';
import { useRouter } from 'next/router';
import RegisterAs from '../../components/register/RegisterAs';
import RegisterAsDoctor from '../../components/register/RegisterAsDoctor';
import RegisterAsPatient from '../../components/register/RegisterAsPatient';
import RegisterAsChemist from '../../components/register/RegisterAsChemist';

function register() {
	// const router = useRouter();
	const [Username, setUsername] = useState('');
	const [Password, setPassword] = useState('');
	const [Email, setEmail] = useState('');
	const [ConfirmPassword, setConfirmPassword] = useState('');
	const [RenderId, setRenderId] = useState(1);

	function NavigateToOtpform() {
		// if (Username.length < 7) {
		// 	alert('username cannot be less than 7 characters');
		// } else if (Email.length === 0) {
		// 	alert('Email cannot be empty');
		// } else if (Password.length < 7 || Password !== ConfirmPassword) {
		// 	alert('please check your password');
		// } else {
		// 	const ValidateEmail = () => {
		// 		const Format = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		// 		if (!Format.test(Email)) {
		// 			setEmail('');
		// 			alert('invalid email');
		// 		} else {
		// 			setRenderId(2);
		// 		}
		// 	};
		// 	ValidateEmail()
		// }
		setRenderId(2);
		
	}

	const PatientLogin = () => {
		setRenderId(3);
	};
	const DoctorLogin = () => {
		setRenderId(4);
	};
	const ChemistLogin = () => {
		setRenderId(5);
	};

	return (
		<>
			{RenderId === 1 && (
				<div className="loginContainer">
					<div className="loginDesignContainer">
						<Logindesign />
					</div>
					<MobNavbar />
					<div className="loginFormContainer">
						<div className="okGestureIcon">
							<Image src="/healthy.png" width={95} height={111} />
						</div>
						{/* <Signupform NavigateToOtpform={NavigateToOtpform} /> */}
						<>
							<div className="greet">Create your account</div>
							<div>
								<div className="inputLabel">Username</div>
								<input
									type="text"
									placeholder="Enter your Name"
									className="Input"
									value={Username}
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
							</div>
							<div>
								<div className="inputLabel">Email</div>
								<input
									type="email"
									placeholder="Enter your Email"
									className="Input"
									value={Email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div>
								<div className="inputLabel">Password</div>
								<input
									type="password"
									placeholder="Enter your Password"
									className="Input"
									value={Password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div>
								<div className="inputLabel">Confirm Password</div>
								<input
									type="password"
									placeholder="Confirm password"
									className="Input"
									value={ConfirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								/>
							</div>
							<button
								className="btn"
								onClick={NavigateToOtpform}
								style={{
									marginTop: '2.5rem',
								}}
							>
								Signup
							</button>
						</>
					</div>
				</div>
			)}
			{RenderId === 2 && (
				<>
					<RegisterAs
						PatientLogin={PatientLogin}
						DoctorLogin={DoctorLogin}
						ChemistLogin={ChemistLogin}
					/>
				</>
			)}
			{RenderId === 3 && (
				<>
					<RegisterAsPatient />
				</>
			)}
			{RenderId === 4 && (
				<>
					<RegisterAsDoctor />
				</>
			)}
			{RenderId === 5 && (
				<>
					<RegisterAsChemist />
				</>
			)}
		</>
	);
}

export default register;
