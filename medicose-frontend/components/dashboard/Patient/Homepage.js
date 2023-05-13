import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavbarDashboard from '../../navbar/NavDashboard';
import VerticalNavbarDashboard from '../../navbar/VerticalNav';
import axios from 'axios';

function PatientHomepage() {
	const [pageId, setpageId] = useState(1);
	const [Appointment, setAppointment] = useState([]);
	const [Doctors, setDoctors] = useState([]);
	console.log(Appointment);
	// useEffect(() => {
	// 	const response = axios.get('Appointment_API');
	// 	setAppointment(response.data);
	// }, []);
	// useEffect(() => {
	// 	const res = axios.get('ListOfDoctors_API');
	// 	setDoctors(res.data);
	// }, []);
	return (
		<div className="patientHomepage">
			<NavbarDashboard />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<VerticalNavbarDashboard />
				<div className="patientHomepageContainer">
					<div className="patientProfile">
						<div className="patientProfileDetails">
							<Image
								// src={profile_image? Profile_image : "/profilePic.png"}
								src="/profilePic.png"
								width={72}
								height={72}
							/>
							{/* <div>{patient_name}</div> */}
							<div className="patientName">patient_name</div>
						</div>
					</div>
					<div className="patientAppointment">
						<div
							style={{
								width: '90%',
								height: '5rem',
								display: 'flex',
								gap: '2.25rem',
								borderBottom: '2px solid #737E87',
							}}
						>
							<button
								className="appointmentsText"
								onClick={(e) => setpageId(1)}
							>
								Appointments
							</button>
							<button
								className="requestAppointment"
								nClick={(e) => setpageId(2)}
							>
								Request Appointment
							</button>
						</div>
						{pageId === 1 && (
							<>
								{Appointment.length === 0 ? (
									<div className="doctorName" id="noAppointment">You haven't booked any Appointment</div>
								) : (
									Appointment.map(
										({
											doctor_name,
											specification,
											appointment_date,
											appointment_time,
										}) => {
											return (
												<div className="patientProfile">
													<div className="patientProfileDetails">
														<Image
															// src={profile_image? Profile_image : "/profilePic.png"}
															src="/profilePic.png"
															width={60}
															height={60}
														/>
														<section>
															<div className="doctorName">{doctor_name}</div>
															<div className="specification">{specification}</div>
														</section>
														<section>
															<div
																className="specification"
																style={{
																	color: '#061b2d',
																	fontWeight: '600',
																}}
															>
																{appointment_date}
															</div>
															<div className="specification">
																{appointment_time}
															</div>
														</section>
													</div>
												</div>
											);
										}
									)
								)}
							</>
						)}
						{pageId === 2 && <></>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PatientHomepage;
