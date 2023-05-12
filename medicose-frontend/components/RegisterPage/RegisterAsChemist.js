import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Axios from 'axios';

const RegisterAsChemist = () => {
 const url="";
 const [data,setData]=useState({
  shopAddress:"",
  contactNo:"",
  upiId:"",
  license:"",
  storeName:"",
  openingTime:"",
  closingTime:"",



 })

 function submit(e){
  e.preventDefault();
  Axios.post(url,{
    shopAddress: data.shopAddress,
    contactNo: DataTransfer.contactNo,
    upiId: data.upiId,
    license: data.license,
    storeName: data.storeName,
    openingTime: data.openingTime,
    closingTime: data.closingTime

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

              <label className='registerform_label' htmlFor="storeName">Name of Store</label>
              <input className='registerform_input' type="text" id='storeName' onChange={(e) => handle(e)} value={data.storeName} placeholder='Enter the name of your store' />

              <label htmlFor="shopAddress">Address</label>
              <input type="shopAddress" id='shopAddress' onChange={(e) => handle(e)} value={data.shopAddress} placeholder='Enter your address' />

              <label htmlFor="open">Opens at</label>
              <input type='time' id='openingTime' onChange={(e) => handle(e)} value={data.openingTime} placeholder='Choose opening time'></input>

              <label htmlFor="close">Closes at</label>
              <input type='time' id='closingTime' onChange={(e) => handle(e)} value={data.closingTime} placeholder='Choose closing time'></input>

              <label htmlFor="contactNo">Contact Number</label>
              <input type="number" id='contactNo' onChange={(e) => handle(e)} value={data.contactNo} placeholder='Enter your contact no.' />

              
              
            </form>
              
            </div>

            <div className="column2">
            <form onSubmit={(e)=>submit(e)} >


             <label htmlFor="upiId">Enter your UPI ID</label>
              <input type='text' id='upiId' onChange={(e) => handle(e)} value={data.upiId} placeholder='UPI Id               @ okhdfcbank'></input>

              <label htmlFor="license">Upload your license:</label>
              <input type='file' onChange={(e) => handle(e)} value={data.license} id='license'></input>

              <button className='btn-submit' type='submit'>Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )
}

export default RegisterAsChemist