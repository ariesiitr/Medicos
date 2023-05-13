import React,{useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import StateDropdown from './StateDropdown'
import Link from 'next/link';
import axios from 'axios';
const RegisterAsPatient = () => {
  
const [state,setState] = useState("");
const StateData=[
  {
    value: 1,
    label: 'Andhra Pradesh',
  },
  {
    value: 2,
    label: 'Arunachal Pradesh',
  },
  {
    value: 3,
    label: 'Assam',
  },
  {
    value: 4,
    label: 'Bihar',
  },
  {
    value: 5,
    label: 'Chhattisgarh',
  },

  {
    value: 6,
    label: 'Goa',
  },
  {
    value: 7,
    label: 'Gujarat',
  },
  {
    value: 8,
    label: 'Haryana',
  },
  {
    value: 9,
    label: 'Himachal Pradesh',
  },
  {
    value: 10,
    label: 'Jharkhand',
  },
  {
    value: 11,
    label: 'Karnataka',
  },
  {
    value: 12,
    label: 'Kerala',
  },
  {
    value: 13,
    label: 'Madhya Pradesh',
  },
  {
    value: 14,
    label: 'Maharashtra',
  },
  {
    value: 15,
    label: 'Manipur',
  },
  {
    value: 16,
    label: 'Meghalaya',
  },
  {
    value: 17,
    label: 'Mizoram',
  },
  {
    value: 18,
    label: 'Nagaland',
  },
  {
    value: 19,
    label: 'Odisha',
  },
  {
    value: 20,
    label: 'Puducherry',
  },
  {
    value: 21,
    label: 'Punjab',
  },
  {
    value: 22,
    label: 'Rajasthan',
  },
  {
    value: 23,
    label: 'Sikkim',
  },
  {
    value: 24,
    label: 'Tamil Nadu',
  },
  {
    value: 25,
    label: 'Telangana',
  },
  {
    value: 26,
    label: 'Tripura',
  },
  {
    value: 27,
    label: 'Uttar Pradesh',
  },
  {
    value: 28,
    label: 'Uttarakhand',
  },
  {
    value: 29,
    label: 'West Bengal',
  },
  {
    value: 30,
    label: 'Delhi',
  },
  {
    value: 31,
    label: 'Ladakh',
  },
  {
    value: 32,
    label: 'Jammu & Kashmir',
  },

  {
    value: 33,
    label: 'Puducherry',
  },
  ,
  {
    value: 34,
    label: 'Lakshadweep',
  },
  {
    value: 35,
    label: 'Lakshadweep',
  },
  {
    value: 36,
    label: 'Chandigarh',
  },
  {
    value: 36,
    label: 'Dadra and Nagar Haveli and Daman & Diu',
  },
  {
    value: 37,
    label: 'Andaman and Nicobar Islands',
  },
];

// useEffect(() => {
//   setMobile();
// }, []);
// if (RenderId == 0) {
//   const handle = (e) => {
//     setState(e);
//   };
// }

  const url="http://127.0.0.1:8000/patient/patientlogin";
  const [data,setData]=useState({
    patientName:"",
    password:"",
    dob:"",
    bloodGroup:"",
    address:"",
    state:"",
    city:"",
    gender:"",
    contactNo:"",

  })
  const newData = {
    patientName: data.patientName,
    password:data.password,
    dob: data.dob,
    bloodGroup: data.bloodGroup,
    address: data.address,
    state: data.state,
    city: data.city,
    gender: data.gender,
    contactNo: data.contactNo,

  }
  async function submit(e){
    e.preventDefault();
    try{
      const res = await axios.post(url,
          JSON.stringify(newData),{
            headers: {
              'Content-Type' : 'application/json',
              "Accept":"application/json"
            }
          }
      );

    }catch(error){
  }  
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

            <form method='post' onSubmit={(e)=>submit(e)} id="myForm">

              <label htmlFor="patientName">Patient Name</label>
              <input type="text" id='patientName' onChange={(e) => handle(e)} value={data.patientName} placeholder='Enter your name' />

              <label htmlFor="password">User Password</label>
              <input type="text" id='password' onChange={(e) => handle(e)} value={data.password} placeholder='Enter your password' />

              <label htmlFor="gender">Gender</label>
              <select id="gender" onChange={(e) => handle(e)} value={data.gender}>
                <option value="choose">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>

              </select>

              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id='dob' onChange={(e) => handle(e)} value={data.dob} placeholder='Enter your age' />
              {/* <label htmlFor="bloodGroup">Blood Group</label>
              <input type="text" id='bloodGroup' onChange={(e) => handle(e)} value={data.bloodGroup} placeholder='Enter your blood Group' /> */}

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


             
            </form>
              
            </div>

            <div className="column2">
            <form method='post' id="myForm" onSubmit={(e)=>submit(e)}>
             
              <label htmlFor="address">Address</label>
              <input type="address" id='address' onChange={(e) => handle(e)} value={data.address} placeholder='Enter your address' />

              <label htmlFor="state">State</label>
              {/* <select options={StateData} id='state' onChange={(e) => handle(e)} value={data.state} /> */}
              <input type='text' id='state' onChange={(e) => handle(e)} value={data.state} placeholder='Enter your state'></input>
              

              <label htmlFor="city">City</label>
              <input type='text' id='city' onChange={(e) => handle(e)} value={data.city} placeholder='Enter your city'></input>

              {/* <label htmlFor="problem">Any previous medical problems</label>
              <textarea type='textarea' cols='true' id='problems' placeholder='Enter previous medical history'></textarea> */}
{/* 
              <label htmlFor="upi">Enter your UPI ID</label>
              <input type='text' id='upi' placeholder='UPI Id'></input> */}
              <button className='btn-submit' type='submit' onClick={handle}>Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
      
      )
    }
    
    
    export default RegisterAsPatient
    
  