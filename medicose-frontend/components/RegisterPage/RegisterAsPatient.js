import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import StateDropdown from './StateDropdown'
import Link from 'next/link';
import Axios from 'axios';

const RegisterAsPatient = () => {
  const url="";
  const [data,setData]=useState({
    dob:"",
    bloodGroup:"",
    address:"",
    state:"",
    city:"",
    gender:"",
    contactNo:"",

  })
function submit(e){
  e.preventdefault();
  Axios.post(url,{
    dob: data.dob,
    bloodGroup: data.bloodGroup,
    address: data.address,
    state: data.state,
    city: data.city,
    gender: data.gender,
    contactNo: data.contactNo,
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

              <label htmlFor="gender">Gender</label>
              <select id="gender">
                <option value="choose">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>

              </select>

              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id='dob' onChange={(e) => handle(e)} value={data.dob} placeholder='Enter your age' />

              <label htmlFor="bloodGroup">Blood Group</label>
              <select type="text" id='bloodGroup' onChange={(e) => handle(e)} value={data.bloodGroup} >
                <option value="choose">Choose your blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              <label htmlFor="contactNo">Contact Number</label>
              <input type="number" id='contactNo' onChange={(e) => handle(e)} value={data.contactNo} placeholder='Enter your contact no.' />

              <label htmlFor="address">Address</label>
              <input type="address" id='address' onChange={(e) => handle(e)} value={data.address} placeholder='Enter your address' />

             
            </form>
              
            </div>

            <div className="column2">
            <form onSubmit={(e)=>submit(e)} >

              <label htmlFor="state">State</label>
              <StateDropdown onChange={(e) => handle(e)} value={data.state} />

              <label htmlFor="city">City</label>
              <input type='text' id='city' onChange={(e) => handle(e)} value={data.city} placeholder='Enter your city'></input>

              {/* <label htmlFor="problem">Any previous medical problems</label>
              <textarea type='textarea' cols='true' id='problems' placeholder='Enter previous medical history'></textarea> */}
{/* 
              <label htmlFor="upi">Enter your UPI ID</label>
              <input type='text' id='upi' placeholder='UPI Id'></input> */}
              <button className='btn-submit' type='submit'>Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
      
      )
    }
    
    
    export default RegisterAsPatient
    
   