import React,{useEffect, useState} from 'react'
import Navbar from '../components/navbar/NavbarRegister'
import StateDropdown from '../components/Register/StateDropdown'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
// import alert from 'react-alert'
const RegisterAsPatient = () => {
  

const StateData=[
  {
    value: 1,
    span: 'Andhra Pradesh',
  },
  {
    value: 2,
    span: 'Arunachal Pradesh',
  },
  {
    value: 3,
    span: 'Assam',
  },
  {
    value: 4,
    span: 'Bihar',
  },
  {
    value: 5,
    span: 'Chhattisgarh',
  },

  {
    value: 6,
    span: 'Goa',
  },
  {
    value: 7,
    span: 'Gujarat',
  },
  {
    value: 8,
    span: 'Haryana',
  },
  {
    value: 9,
    span: 'Himachal Pradesh',
  },
  {
    value: 10,
    span: 'Jharkhand',
  },
  {
    value: 11,
    span: 'Karnataka',
  },
  {
    value: 12,
    span: 'Kerala',
  },
  {
    value: 13,
    span: 'Madhya Pradesh',
  },
  {
    value: 14,
    span: 'Maharashtra',
  },
  {
    value: 15,
    span: 'Manipur',
  },
  {
    value: 16,
    span: 'Meghalaya',
  },
  {
    value: 17,
    span: 'Mizoram',
  },
  {
    value: 18,
    span: 'Nagaland',
  },
  {
    value: 19,
    span: 'Odisha',
  },
  {
    value: 20,
    span: 'Puducherry',
  },
  {
    value: 21,
    span: 'Punjab',
  },
  {
    value: 22,
    span: 'Rajasthan',
  },
  {
    value: 23,
    span: 'Sikkim',
  },
  {
    value: 24,
    span: 'Tamil Nadu',
  },
  {
    value: 25,
    span: 'Telangana',
  },
  {
    value: 26,
    span: 'Tripura',
  },
  {
    value: 27,
    span: 'Uttar Pradesh',
  },
  {
    value: 28,
    span: 'Uttarakhand',
  },
  {
    value: 29,
    span: 'West Bengal',
  },
  {
    value: 30,
    span: 'Delhi',
  },
  {
    value: 31,
    span: 'Ladakh',
  },
  {
    value: 32,
    span: 'Jammu & Kashmir',
  },

  {
    value: 33,
    span: 'Puducherry',
  },
  ,
  {
    value: 34,
    span: 'Lakshadweep',
  },
  {
    value: 35,
    span: 'Lakshadweep',
  },
  {
    value: 36,
    span: 'Chandigarh',
  },
  {
    value: 36,
    span: 'Dadra and Nagar Haveli and Daman & Diu',
  },
  {
    value: 37,
    span: 'Andaman and Nicobar Islands',
  },
];


 const [PatientName, setPatientName] = useState("")
 const [Dob, setDob] = useState("")
 const [Bloodgroup, setBloodgroup] = useState("")
 const [Address, setAddress] = useState("")
 const [State1, setState1] = useState("")
 const [City, setCity] = useState("")
 const [Gender, setGender] = useState("")
 const [ContactNo, setContactNo] = useState("")
const [Password, setPassword] = useState("")
const [pass_error, setpass_error] = useState('');
const [pass_error_bool, setpass_error_bool] = useState(false);


const PatientAPI = `http://127.0.0.1:8000/patient/patientlogin`;

const passValidate = () => {
  setTimeout(function () {
    if (Password.length < 7) {
      setpass_error_bool(true);
      setpass_error('Password should be more than 8 letters');
    } else {
      setpass_error_bool(false);
      setpass_error('');
    }
  }, 100000);
};
const FetchApi = (method, url, params, TokenValue) => {
  return new Promise((resolve, reject) => {
    if (TokenValue) {
      axios({
        method: method,
        url: url,
        data: params,
        headers: {
          Authorization: 'Token ' + TokenValue,
        },
        responseType: 'json',
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    } else {
      axios({
        method: method,
        url: url,
        data: params,
        responseType: 'json',
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    }
  });
};



function submit1() {
  if (Password.length > 7) {
    // console.log('Submitting form...');
    NavigatePatientHomepage();
    FetchApi(
      'POST',
      PatientAPI,
      {
        patientName: PatientName,
        dob: Dob,
        bloodGroup: Bloodgroup,
        address: Address,
        state: State1,
        city: City,
        gender: Gender,
        contactNo: ContactNo,
        password: Password,
  
      },
      null
    )
  }
}

const router=useRouter();

const NavigatePatientHomepage=()=>{
    router.push('/PatientHomePage')
}





console.log(Dob)

  return (
    <div>
        <div className="upper">
            <Navbar/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

            
              <span  className='form' htmlFor="patientName">Patient Name</span>
              <input type="text" id='patientName' onChange={(e) => setPatientName(e.target.value)} placeholder='Enter your name' />

              <span   className='form' htmlFor="password">User Password</span>
              <input type="text" id='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />

              <span className='form' htmlFor="gender">Gender</span>
              <select id="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="choose">Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>

              </select>

              <span className='form' htmlFor="dob">Date of Birth</span>
              <input type="date" id='dob' onChange={(e) => setDob(e.target.value)} placeholder='Enter your age' />
              
              <span className='form' htmlFor="bloodGroup">Blood Group</span>
              <select type="text" id='bloodGroup' onChange={(e) => setBloodgroup(e.target.value)} >
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

              <span className='form' htmlFor="contactNo">Contact Number</span>
              <input type="number" id='contactNo' onChange={(e) => setContactNo(e.target.value)} placeholder='Enter your contact no.' />


             
           
              
            </div>

            <div className="column2">
           
              <span className='form' htmlFor="address">Address</span>
              <input type="address" id='address' onChange={(e) => setAddress(e.target.value)} placeholder='Enter your address' />

              <span className='form' htmlFor="state">State</span>
              {/* <select options={StateData} id='state' onChange={(e) => handle(e)} value={data.state} /> */}
              <input type='text' id='state' onChange={(e) => setState1(e.target.value)} placeholder='Enter your state'></input>
              

              <span className='form' htmlFor="city">City</span>
              <input type='text' id='city' onChange={(e) => setCity(e.target.value)} placeholder='Enter your city'></input>

              
              <button className='btn-submit' type='submit'  onClick={() => {
                
                submit1();
              }}>Submit</button>
             



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
      
      )
    }
    
    
    export default RegisterAsPatient