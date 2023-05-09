import React from 'react'
import Navbar from './Navbar'
import StateDropdown from './StateDropdown'
import Link from 'next/link';



const RegisterAsPatient = () => {
  return (
    <div>
        <div className="upper">
            <Navbar/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

            <form action="/send-data-here" method="post">

              <label htmlFor="gender">Gender</label>
              <select id="gender">
                <option value="choose">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>

              </select>

              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id='dob' placeholder='Enter your age' />

              <label htmlFor="blood">Blood Group</label>
              <select type="text" id='blood' >
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

              <label htmlFor="contact">Contact Number</label>
              <input type="number" id='contact' placeholder='Enter your contact no.' />

              <label htmlFor="address">Address</label>
              <input type="address" id='address' placeholder='Enter your address' />

              <label htmlFor="pincode">Pincode</label>
              <input type="pincode" id='pincode' placeholder='Enter the pincode' />
            </form>
              
            </div>

            <div className="column2">
              <form action="/send-data-here" method="post">

              <label htmlFor="state">State</label>
              <StateDropdown/>

              <label htmlFor="city">City</label>
              <input type='text' id='city' placeholder='Choose your city'></input>

              <label htmlFor="problem">Any previous medical problems</label>
              <textarea type='textarea' cols='true' id='problems' placeholder='Enter previous medical history'></textarea>

              <label htmlFor="upi">Enter your UPI ID</label>
              <input type='text' id='upi' placeholder='UPI Id'></input>
              <button className='btn-submit' type='submit'>Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
      
      )
    }
    
    
    export default RegisterAsPatient
    
   