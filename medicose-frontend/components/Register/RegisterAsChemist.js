import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import { Authenticate } from '../utils';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const RegisterAsChemist = () => {
//  const url="http://127.0.0.1:8000/clinic/chemistlogin";
const [chemistName, setchemistName] = useState('');
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [storeName, setstoreName] = useState('');
  const [shopAddress, setshopAddress] = useState('');
  const [openingTime, setopeningTime] = useState('');
  const [closingTime, setclosingTime] = useState('');
  const [contactNo, setcontactNo] = useState('');
  const [license, setlicense] = useState('');
  const [upiId, setupiId]= useState('');
  const router = useRouter();

  const submit = () => {
    console.log('started')
    if (chemistName === '') {
      alert('Please enter Your Name');
      console.log('CN')
    } else if (password === '') {
      toast.warning('Please enter Password ');
    } else if (Confirmpassword=== '') {
      toast.warning('Please enter Confirm Password');
    } else if (storeName=== '') {
      toast.warning('Please enter your Store Name');
    } else if (shopAddress === '') {
      toast.warning('Please enter your Store Address');
    } else if (openingTime=== '') {
      toast.warning('Please enter opening Time of your Store');
    }else if (closingTime=== '') {
      toast.warning('Please enter closing Time of your Store');
    }else if (license=== '') {
      toast.warning('Please upload your license');
    }else if (upiId=== '') {
      toast.warning('Please enter your Upi Id');
    }
     else {
      if (password?.length > 7) {
        if (password === Confirmpassword) {
          axios.post('http://127.0.0.1:8000/clinic/chemistlogin', {
          
              chemistName: chemistName,
              password: password,
              openingTime: openingTime,
              closingTime: closingTime,
              storeName : storeName,
              contactNo: contactNo,
              shopAddress : shopAddress,
              license: license,
              upiId: upiId,            
           
        })
            .then((res) => {
              if (res.status === 200) {
                console.log(res.data)
                Authenticate(res.data.n, res.data.e_id, res.data.at);
                
              }
            })
            .catch((err) => {
              toast(err.response.data.error);
            });
        } else {
          toast('password doesnot match');
        }
      } else {
        toast('password should have 8 or more characters');
      }
    }

   };


  return (
    <div>
        <div className="upper">
            <Navbar/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

        
            
     
              <span className='registerform_label' >Chemist Name   </span>
              <input className='chemistName' type="text" 
               onChange={(e) => setchemistName(e.target.value)} value={chemistName} placeholder='Enter your name' />
              
              <span className='registerform_label' >Password</span>
              <input className='password' type="text" onChange={(e) => setpassword(e.target.value)} value={password} placeholder='Enter your password' />
              
              <span className='registerform_label' >Confirm Password</span>
              <input className='password' type="text" onChange={(e) => setConfirmpassword(e.target.value)} value={Confirmpassword} placeholder='Enter confirm password' />
             
              <span className='registerform_label'>Name of Store</span>
              <input className='storeName' type="text" id='storeName' onChange={(e) => setstoreName(e.target.value)} value={storeName} placeholder='Enter the name of your store' />
              

              <span >Address</span>
              <input type="address" className='shopAddress' onChange={(e) => setshopAddress(e.target.value)} value={shopAddress} placeholder='Enter your address' />

              <span htmlFor="openingTime">Opens at</span>
              <input type='time' className='openingTime' onChange={(e) => setopeningTime(e.target.value)} value={openingTime} placeholder='Choose opening time'></input>

              <span htmlFor="closingTime">Closes at</span>
              <input type='time' className='closingTime' onChange={(e) => setclosingTime(e.target.value)} value={closingTime} placeholder='Choose closing time'></input>

             

              
              
          
              
            </div>

            <div className="column2">
            
            <span htmlFor="contactNo">Contact Number</span>
            <input type="number" className='contactNo' onChange={(e) => setcontactNo(e.target.value)} value={contactNo} placeholder='Enter your contact no.' />

             <span>Enter your UPI ID</span>
              <input type='text' className='upiId' onChange={(e) => setupiId(e.target.value)} value={upiId} placeholder='UPI Id               @ okhdfcbank'></input>

              <span>Upload your license:</span>
              <input type='file' className='license' onChange={(e) => setlicense(e.target.value)} value={license} id='license'></input>

              <button className='btn-submit' type='button' onClick={submit}>Submit</button>
             
            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )
} 

export default RegisterAsChemist