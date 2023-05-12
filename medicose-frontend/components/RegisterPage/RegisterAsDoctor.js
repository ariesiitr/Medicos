import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import MultiSelectDropdown from './MultiSelectDropdown'
import Axios from 'axios';
// import axios from 'axios'

const RegisterAsDoctor = () => {
  const url="http://127.0.0.1:8000/doctor/doctorlogin";
  const [data,setData] =useState({
        speciality:"",
        clinicName:"",
        contactNo:"",
        address:"",
        availableDays:"",
        appointmentendTime:"",
        appointmentstartTime:"",
        appointmentFees:"",
        license:""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
        speciality: data.speciality,
        clinicName: data.clinicName,
        contactNo: data.contactNo,
        address: data.address,
        availableDays: data.availableDays,
        appointmentendTime: data.appointmentendTime,
        appointmentstartTime: data.appointmentstartTime,
        appointmentFees: data.appointmentFees,
        license: data.license
    })
      .then((res) =>{
        console.log(res.data)
      })
  }
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }
  
  
  return (
    <div>
        <div className="upper">
            <Navbar/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

            <form onSubmit={(e)=>submit(e)} >
            

              {/* <label htmlFor="qualification">Qualification</label>
              <input type="text" id='qualification' placeholder='Enter your qualification' required /> */}

              <label htmlFor="speciality">Field</label>
              <input type="text" id='speciality' onChange={(e) => handle(e)} value={data.speciality} placeholder='Enter your field' required />

              <label htmlFor="clinicName">Clinic Name</label>
              <input type="text" id='clinicName' onChange={(e) => handle(e)} value={data.clinicName}  placeholder='Enter name of your clinic' required />

              <label htmlFor="contactNo">Contact Number</label>
              <input type="number" id='contactNo' onChange={(e) => handle(e)} value={data.contactNo} placeholder='Enter your contact no.' required />

              <label htmlFor="address">Address</label>
              <input type="address" id='address' onChange={(e) => handle(e)} value={data.address} placeholder='Enter your address' required />

              <label htmlFor="availableDays">Availibility</label>
              <MultiSelectDropdown id='availableDays' onChange={(e) => handle(e)} value={data.availableDays}/>
            </form>
              
            </div>

            <div className="column2">
              <form onSubmit={(e)=>submit(e)}>
              {/* <form> */}

              <label htmlFor="appointmentstartTime">Opens at</label>
              <input type='time' id='appointmentstartTime' onChange={(e) => handle(e)} value={data.appointmentstartTime} placeholder='Choose opening time'></input>

              <label htmlFor="appointmentendTime">Closes at</label>
              <input type='time' id='appointmentendTime'onChange={(e) => handle(e)} value={data.appointmentendTime} placeholder='Choose closing time'></input>

              <label htmlFor="appointmentFees">Consultancy fee</label>
              <input type='text' id='appointmentFees' onChange={(e) => handle(e)} value={data.appointmentFees} placeholder='In rupees'></input>

             <label htmlFor="upiId">Enter your UPI ID</label>
              <input type='text' id='upiId' onChange={(e) => handle(e)} value={data.upiId} placeholder='UPI Id               @ okhdfcbank'></input>

              <label htmlFor="license">Upload your license:</label>
              <input type='file' id='license' onChange={(e) => handle(e)} value={data.license}></input>

              <button className='btn-submit' type='submit'>Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )
}

export default RegisterAsDoctor