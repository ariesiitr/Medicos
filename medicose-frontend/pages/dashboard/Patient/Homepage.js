import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavbarDashboard from '../../../components/navbar/NavbarDashboard';
import VerticalNav from '../../../components/navbar/VerticalNav'
import axios from 'axios';

function PatientHomepage() {
	const [pageId, setpageId] = useState(1);
	const [Appointment, setAppointment] = useState([]);
	const [Doctors, setDoctors] = useState([]);
	const [Search, setSearch] = useState('');
	console.log(Appointment);
    const [data, setData] = useState(null);
  const [users,setUsers]=useState([]);
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get('http://localhost:8000/patient/patientappointdetails');
			setData(response.data);
			if(data.length>0){
			  setUsers(data)
			}
		  } catch (error) {
			console.error(error);
		  }
		};
	  
		fetchData();
	  }, []);

const patientName = data?.data[0]?.patientName; 

	const RequestAppointment = () => {
		const Btn = document.querySelector('.appointmentBtn');
		Btn.disabled = true;
	};
	return (
		<div className="patientHomepage">
			<NavbarDashboard />
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
						<div className="patientName">{patientName}</div>
					</div>
				</div>
				<div className="patientAppointment">
					<div className="pageIdBtn">
						<button className="appointmentsText" onClick={(e) => setpageId(1)}>
							Appointments
						</button>
						<button
							className="requestAppointment"
							onClick={(e) => setpageId(2)}
						>
							Request Appointment
						</button>
						<button
							className="requestAppointment"
							onClick={(e) => setpageId(3)}
						>
							My Reports
						</button>
					</div>
					{pageId === 1 && (
						<>
							{Appointment.length === 0 ? (
								<div className="doctorName" id="noAppointment">
									You haven't booked any Appointment
								</div>
							) : (
								Appointment.map(
									({
										id,
										doctor_name,
										specification,
										appointment_date,
										appointment_time,
									}) => {
										return (
											<div className="patientProfile" key={id}>
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
					{pageId === 2 && (
						<>
							{Doctors.filter((Doctors) => {
								return Search.toLowerCase() === ''
									? Doctors
									: Doctors.doctor_name.toLowerCase().includes(Search);
							}).map(
								({
									doctor_name,
									specification,
									appointment_date,
									appointment_time,
								}) => {
									return (
										<>
											<input
												type="text"
												value={Search}
												onChange={(e) => setSearch(e.target.value)}
												className="reportSearchbox"
												style={{ marginTop: '1.5rem', marginLeft: '1.5rem' }}
												placeholder="Search by the name of doctor"
											/>
											<div className="patientProfile">
												<div className="patientProfileDetails">
													<Image
														// src={profile_image? Profile_image : "/profilePic.png"}
														src="/profilePic.png"
														width={60}
														height={60}
													/>
													<section>
														<div className="doctorName">doctor_name</div>
														<div className="specification">specification</div>
													</section>
													<section>
														<div
															className="specification"
															style={{
																color: '#061b2d',
																fontWeight: '600',
															}}
														>
															appointment_date
														</div>
														<div className="specification">
															appointment_time
														</div>
													</section>
												</div>
												<button
													className="appointmentBtn"
													onClick={RequestAppointment}
												>
													Request
												</button>
											</div>
										</>
									);
								}
							)}
						</>
					)}
					{pageId === 3 && <div></div>}
				</div>
			</div>
		</div>
	);
}

export default PatientHomepage;
