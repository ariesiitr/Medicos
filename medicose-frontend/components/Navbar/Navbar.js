import React from 'react';
import Link from 'next/link';
import NavItem from './NavItem';

const MENU_LIST = [
	{
		text: 'Dashboard',
		href: '/DoctorHome',
	},
	{
		text: 'Appointments',
		href: '/appointmentes',
	},
	{
		text: 'Doctors',
		href: '/doctors',
	},
	{
		text: 'Pharmacy',
		href: '/pharmacy',
	},
];
// var hamburger=null;
// var navMenu=null;
if (typeof window !== 'undefined') {
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav__menu-list');

	if (hamburger) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			navMenu.classList.toggle('active');
		});
		document.querySelectorAll('.nav-link').forEach((n) =>
			n.addEventListener('click', () => {
				hamburger.classList.remove('active');
				navMenu.classList.remove('active');
			})
		);
	}
}

const Navbar = () => {
	return (
		<header>
			<nav className="nav">
				<div className="nav-left">
					<Link legacyBehavior href={'/'}>
						<a>
							<div className="logo">
								<img id="img1" src="/Vector_white.png" alt="vector" />
								<img src="/Group 23.png" id="img2" alt="" />
							</div>
						</a>
					</Link>
				</div>

				<div className="hamburger">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>

				<div className="nav__menu-list">
					{MENU_LIST.map((menu, idx) => {
						return (
							<div key={menu.text} className="nav-link">
								<NavItem {...menu} />
							</div>
						);
					})}
				</div>

				<div className="nav-right">
					<Link legacyBehavior href={'/'}>
						<a>
							<div className="user-logo">
								<img src="/User_logo.png" alt="" />
							</div>
						</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
