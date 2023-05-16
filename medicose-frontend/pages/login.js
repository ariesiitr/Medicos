import React from 'react';
import Logindesign from '../components/Login/Logindesign';
import Image from 'next/image';
import Loginform from '../components/Login/Forms';
import MobNavbar from '../components/navbar/MobNavbar';

function LoginPage() {
	return (
		<div className="loginContainer">
			<div className="loginDesignContainer">
				<Logindesign />
			</div>
			<div>
				<MobNavbar />
				<div className="loginFormContainer">
					<div className="okGestureIcon">
						<Image src="/healthy.png" width={95} height={111} />
					</div>
					<Loginform />
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
