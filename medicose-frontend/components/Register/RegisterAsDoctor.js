import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { toast } from 'react-toastify';
import NavbarRegister from '../Navbar/NavbarRegister'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
// import alert from 'react-alert'



const RegisterAsDoctor= () => {
  const[doctorName,setDoctorName] =useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const[speciality,setSpeciality]=useState("");
  const[clinicName,setClinicName]=useState("")
  const[contactNo,setContactNo]=useState("")
  const[address,setAddress]=useState("")
  const[availableDays,setAvailableDays]=useState("")
  const[appointmentstartTime,setAppointmentstartTime]=useState("");
  const[appointmentendTime,setAppointmentendTime]=useState("")
  const[appointmentFees,setAppointmentFees]=useState("")
  const[upiId,setUpiId]=useState("")
  const[license,setLicense]=useState("")
  
 
  const Submit =() =>{
    console.log('started')
    if(doctorName===''){
      alert('Pleaase enter your name');
      // toast.configure()
    }
    else if(speciality===''){
      alert('Please enter your speciality');
      // toast.configure()
    }
    else if(password ===''){
      alert('Plese enter your password  ');
      // toast.configure()
    }
    else if( clinicName===''){
      alert('Plese enter clinic name ')
      // toast.configure()
    }
    else if(contactNo ===''){
      alert('Plese enter your contact number  ');
      // toast.configure()
    }
    else if(address ===''){
      alert('Plese enter your address ')
      // toast.configure()
    }
    else if(availableDays ===''){
      alert('Plese enter the days you are available  ')
      // toast.configure()
    }
    else if(appointmentstartTime ===''){
      alert('Plese enter starting time  ')
      // toast.configure()
    }
    else if(appointmentendTime ===''){
      alert('Plese enter ending time  ')
      // toast.configure()
    }
    else if(appointmentFees ===''){
      alert('Plese enter fees  ')
      // toast.configure()
    }
    else if(upiId ===''){
      alert('Plese enter your UPI Id  ')
      // toast.configure()
    }
    else if(license===''){
      alert('Plese upload your license ')
      // toast.configure()
    }
    else {
      if(password?.length>7){
      if(password===confirmPassword){
        axios.post('http://127.0.0.1:8000/doctor/doctorlogin',{
          doctorName:doctorName,
          password: password,
          speciality: speciality,
          clinicName:clinicName,
          contactNo:contactNo,
          address:address,
         appointmentendTime:appointmentstartTime,
         appointmentstartTime:appointmentstartTime,
         appointmentFees:appointmentFees,
         availableDays:availableDays,
         license:license,
         upiId:upiId 
        })
        .then(res => {
          if(res.status === 201){
            console.log(res.data)
            router.push('/')

          }
          
        })
        .catch((err) => {
          
          toast(err.response.data.error)
        });
      
      }
       else {
        toast('password doesnot match');
      }
    } else {
      console.log('password should have 8 or more characters');
    }

  }

      }
  
  
  return (
    <div>
        <div className="upper">
            <NavbarRegister/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

           
            

              <span className='form' htmlFor="doctorName">Doctor Name</span>
              <input type="text" id='doctorName' onChange={(e) => setDoctorName(e.target.value)} value={doctorName} placeholder='Enter your name' required />

              <span className='form' htmlFor="password">Password</span>
              <input type="text" id='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your password' required />
              
              <span  className='form' htmlFor="confirmPassword">Confirm Password</span>
              <input type="text" id='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm your password' required />

              <span className='form' htmlFor="speciality">Field</span>
              <input type="text" id='speciality' onChange={(e) => setSpeciality(e.target.value)} value={speciality} placeholder='Enter your field' required />

              <span className='form' htmlFor="clinicName">Clinic Name</span>
              <input type="text" id='clinicName' onChange={(e) => setClinicName(e.target.value)} value={clinicName}  placeholder='Enter name of your clinic' required />

              <span className='form' htmlFor="contactNo">Contact Number</span>
              <input type="number" id='contactNo' onChange={(e) => setContactNo(e.target.value)} value={contactNo} placeholder='Enter your contact no.' required />

              <span className='form' htmlFor="address">Address</span>
              <input type="address" id='address' onChange={(e) => setAddress(e.target.value)} value={address} placeholder='Enter your address' required />

              <span className='form' htmlFor="availableDays">Availibility</span>
              <input type='text' id='availableDays' onChange={(e) =>setAvailableDays(e.target.value)} value={availableDays}/>
              {/* <MultiSelectDropdown id='availableDays' onChange={(e) => handle(e)} value={data.availableDays}/> */}
           
              
            </div>

            <div className="column2">
              

              <span className='form' htmlFor="appointmentstartTime">Opens at</span>
              <input type='time' id='appointmentstartTime' onChange={(e) => setAppointmentstartTime(e.target.value)} value={appointmentstartTime} placeholder='Choose opening time'></input>

              <span className='form' htmlFor="appointmentendTime">Closes at</span>
              <input type='time' id='appointmentendTime'onChange={(e) => setAppointmentendTime(e.target.value)} value={appointmentendTime} placeholder='Choose closing time'></input>

              <span className='form' htmlFor="appointmentFees">Consultancy fee</span>
              <input type='text' id='appointmentFees' onChange={(e) => setAppointmentFees(e.target.value)} value={appointmentFees} placeholder='In rupees'></input>

             <span className='form' htmlFor="upiId">Enter your UPI ID</span>
              <input type='text' id='upiId' onChange={(e) => setUpiId(e.target.value)} value={upiId} placeholder='UPI Id               @ okhdfcbank'></input>

              <span className='form' htmlFor="license">Upload your license:</span>
              <input type='file' id='license' onChange={(e) => setLicense(e.target.value)} value={license}></input>

              <button className='btn-submit' type='submit' onClick={Submit}>Submit</button>
             



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )

  }
export default RegisterAsDoctor