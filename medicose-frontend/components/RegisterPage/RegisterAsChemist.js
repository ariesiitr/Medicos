import React,{useState} from 'react'
import NavbarRegister from '../Navbar/NavbarRegister'
import axios from 'axios';
import router from 'next/router';
import { toast } from 'react-toastify';


import DoctorCalender from '../DoctorDashboard/DoctorCalender';

const RegisterAsChemist = () => {
 const url="http://127.0.0.1:8000/clinic/chemistlogin";
 const [data,setData]=useState({
  chemistName:"",
  password:"",
  shopAddress:"",
  contactNo:"",
  upiId:"",
  license:"",
  storeName:"",
  openingTime:"",
  closingTime:"",

 })
const newData={
  chemistName:data.chemistName,
  password:data.password,
  shopAddress: data.shopAddress,
  contactNo: data.contactNo,
  upiId: data.upiId,
  license: data.license,
  storeName: data.storeName,
  openingTime: data.openingTime,
  closingTime: data.closingTime
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
  if (chemistName === '') {
    toast.warning('Please enter Your Name');
  } else if (password === '') {
    toast.warning('Please enter Password ');
  // } else if (Confirmpassword=== '') {
  //   toast.warning('Please enter Confirm Password');
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
  else{
    if(password?.length>7){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
      router.push('/www.google.com')
      
    }
    else{
      toast('password should have 8 or more characters');
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

        
            

              <span className='form' htmlFor="chemistName">Chemist Name</span>
              <input type="text" id='chemistName' onChange={(e) => handle(e)} value={data.chemistName} placeholder='Enter your name' />
              
              <span className='form' htmlFor="password">Password</span>
              <input type="text" id='password' onChange={(e) => handle(e)} value={data.password} placeholder='Enter your password' />

              <span className='form' htmlFor="storeName">Name of Store</span>
              <input type="text" id='storeName' onChange={(e) => handle(e)} value={data.storeName} placeholder='Enter the name of your store' />
              

              <span className='form' htmlFor="shopAddress">Address</span>
              <input type="address" id='shopAddress' onChange={(e) => handle(e)} value={data.shopAddress} placeholder='Enter your address' />

              <span className='form' htmlFor="openingTime">Opens at</span>
              <input type='time' id='openingTime' onChange={(e) => handle(e)} value={data.openingTime} placeholder='Choose opening time'></input>

              <span className='form' htmlFor="closingTime">Closes at</span>
              <input type='time' id='closingTime' onChange={(e) => handle(e)} value={data.closingTime} placeholder='Choose closing time'></input>

              <span className='form' htmlFor="contactNo">Contact Number</span>
              <input type="number" id='contactNo' onChange={(e) => handle(e)} value={data.contactNo} placeholder='Enter your contact no.' />

              
              
            
              
            </div>

            <div className="column2">
            


             <span className='form' htmlFor="upiId">Enter your UPI ID</span>
              <input type='text' id='upiId' onChange={(e) => handle(e)} value={data.upiId} placeholder='UPI Id               @ okhdfcbank'></input>

              <span className='form' htmlFor="license">Upload your license:</span>
              <input type='file' onChange={(e) => handle(e)} value={data.license} id='license'></input>

              <button className='btn-submit' type='submit' onClick={handle}>Submit</button>
              



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )
}

export default RegisterAsChemist























// import React,{useState} from 'react'
// import Navbar from '../Navbar/Navbar'
// import axios from 'axios';

// const RegisterAsChemist = () => {
//  const url="http://127.0.0.1:8000/clinic/chemistlogin";
//  const [data,setData]=useState({
//   chemistName:"",
//   password:"",
//   shopAddress:"",
//   contactNo:"",
//   upiId:"",
//   license:"",
//   storeName:"",
//   openingTime:"",
//   closingTime:"",

//  })
// const newData={
//   chemistName:data.chemistName,
//   password:data.password,
//   shopAddress: data.shopAddress,
//   contactNo: data.contactNo,
//   upiId: data.upiId,
//   license: data.license,
//   storeName: data.storeName,
//   openingTime: data.openingTime,
//   closingTime: data.closingTime
// }
// async function submit(e){
//   e.preventDefault();
//   try{
//     const res = await axios.post(url,
//         JSON.stringify(newData),{
//           headers: {
//             'Content-Type' : 'application/json',
//             "Accept":"application/json"
//           }
//         },router.push('/')
//     );

//   }catch(error){
// }  
// }  

// function handle(e){
//   const newdata={...data}
//   newdata[e.target.id]=e.target.value
//   setData(newdata)
//   console.log(newdata)
// }
//   return (
//     <div>
//         <div className="upper">
//             <Navbar/>
//         </div>
//         <div className="main">

//         <div className="column">
         
//             <div className="column1">

        
//             {/* <form method='post' onSubmit={(e)=>submit(e)} > */}

//               <span className='registerform_span' htmlFor="chemistName">Chemist Name</span>
//               <input className='registerform_input' type="text" id='chemistName' onChange={(e) => handle(e)} value={data.chemistName} placeholder='Enter your name' />
              
//               <span className='registerform_span' htmlFor="password">Password</span>
//               <input className='registerform_input' type="text" id='password' onChange={(e) => handle(e)} value={data.password} placeholder='Enter your password' />

//               <span className='registerform_span' htmlFor="storeName">Name of Store</span>
//               <input className='registerform_input' type="text" id='storeName' onChange={(e) => handle(e)} value={data.storeName} placeholder='Enter the name of your store' />
              

//               <span htmlFor="shopAddress">Address</span>
//               <input type="address" id='shopAddress' onChange={(e) => handle(e)} value={data.shopAddress} placeholder='Enter your address' />

//               <span htmlFor="openingTime">Opens at</span>
//               <input type='time' id='openingTime' onChange={(e) => handle(e)} value={data.openingTime} placeholder='Choose opening time'></input>

//               <span htmlFor="closingTime">Closes at</span>
//               <input type='time' id='closingTime' onChange={(e) => handle(e)} value={data.closingTime} placeholder='Choose closing time'></input>

//               <span htmlFor="contactNo">Contact Number</span>
//               <input type="number" id='contactNo' onChange={(e) => handle(e)} value={data.contactNo} placeholder='Enter your contact no.' />

              
              
//             {/* </form> */}
              
//             </div>

//             <div className="column2">
//             {/* <form method='post' onSubmit={(e)=>submit(e)} > */}


//              <span htmlFor="upiId">Enter your UPI ID</span>
//               <input type='text' id='upiId' onChange={(e) => handle(e)} value={data.upiId} placeholder='UPI Id               @ okhdfcbank'></input>

//               <span htmlFor="license">Upload your license:</span>
//               <input type='file' onChange={(e) => handle(e)} value={data.license} id='license'></input>

//               <button className='btn-submit' type='submit' onClick={handle}>Submit</button>
//               {/* </form> */}



//             </div>

          
        
//         </div>
//         </div>
        
       

       
//       </div>
//   )
// }

// export default RegisterAsChemist