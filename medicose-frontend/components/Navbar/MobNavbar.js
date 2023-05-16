import React from 'react';
import Image from 'next/image';

function MobNavbar() {
	return (
		<div className="navbarContainer">
			<div>
				<Image src="/MedicosLogo.png" width={88} height={22} />
			</div>
			<div>
				<Image src="/hamburger.png" width={32} height={36} />
			</div>
		</div>
	);
}

export default MobNavbar;
