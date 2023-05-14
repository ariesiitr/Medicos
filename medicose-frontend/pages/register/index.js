import React, { useState } from 'react';
import Logindesign from '../../components/Login/Logindesign';
import Image from 'next/image';
import { Signupform, Otpform } from '../../components/Login/Forms';
import MobNavbar from '../../components/navbar/MobNavbar';

function register() {
	const [renderId, setrenderId] = useState(0);
	function NavigateToOtpform() {
		setrenderId(1);
	}

	return (
		<div className="loginContainer">
			<div className="loginDesignContainer">
				<Logindesign />
			</div>
			<MobNavbar/>
			<div className="loginFormContainer">
				<div className="okGestureIcon">
					<Image src="/healthy.png" width={95} height={111} />
				</div>
				{renderId == 0 && <Signupform NavigateToOtpform={NavigateToOtpform} />}
				{renderId == 1 && <Otpform />}
			</div>
		</div>
	);
}

export default register;
