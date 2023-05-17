
import React,{useState} from 'react'
import NavbarRegister from '../../components/navbar/NavbarRegister'
import { useRouter } from 'next/router';



if (typeof window !== 'undefined') {
	var container1 = document.querySelector('#container1');
	var image1 = document.getElementById('patient');
	var para1 = document.getElementById('para1');

	if (container1) {
		container1.addEventListener('mouseover', function () {
			patient.src = '/Patient_h.png';
			para1.style.color = 'white';
		});
		container1.addEventListener('mouseout', function () {
			patient.src = '/Patient.png';
			para1.style.color = '#089996';
		});
	}

	var container2 = document.querySelector('#container2');
	var image2 = document.getElementById('doctor');
	var para2 = document.getElementById('para2');

	if (container2) {
		container2.addEventListener('mouseover', function () {
			doctor.src = '/Doctor_h.png';
			para2.style.color = 'white';
		});

		container2.addEventListener('mouseout', function () {
			doctor.src = '/Doctor.png';
			para2.style.color = '#089996';
		});
	}

	var container3 = document.querySelector('#container3');
	var image3 = document.getElementById('chemist');
	var para3 = document.getElementById('para3');

	if (container3) {
		container3.addEventListener('mouseover', function () {
			chemist.src = '/Chemist_h.png';
			para3.style.color = 'white';
		});

		container3.addEventListener('mouseout', function () {
			chemist.src = '/Chemist.png';
			para3.style.color = '#089996';
		});
	}
}

const RegisterAs = (props) => {
    const router = useRouter();

    const NavigateToPatientRegister = () => {
        router.push('/RegisterAs/RegisterAsPatient');
      };

	  const NavigateToDoctorRegister = () => {
        router.push('/RegisterAs/RegisterAsDoctor');
      };
	  const NavigateToChemistRegister = () => {
        router.push('/RegisterAs/RegisterAsChemist');
      };








  return (
    <div>
    <div className="upper">
    <NavbarRegister/>
    

			<div className="main">
				<div className="heading">
					<h2>Register as</h2>
				</div>

				<div className="containers">

					<button legacyBehavior onClick={NavigateToPatientRegister} style={{border:"none"}}>
						<div className="container" id="container1" onClick={NavigateToPatientRegister}>
							<img src="/Patient.png" id="patient" alt="" />
							<p id="para1">As a Patient</p>
						</div>
					</button>

					<button legacyBehavior onClick={NavigateToDoctorRegister} style={{border:"none"}}>
						<div className="container" id="container2">
							<img src="/Doctor.png" id="doctor" alt="" />
							<p id="para2">As a Doctor</p>
						</div>
					</button>

					<button legacyBehavior onClick={NavigateToChemistRegister} style={{border:"none"}} >
						<div className="container" id="container3">
							<img src="/Chemist.png" id="chemist" alt="" />
							<p id="para3">As a Chemist</p>
						</div>
					</button>

				</div>
			</div>
		</div>
    </div>
	);
};

export default RegisterAs;
