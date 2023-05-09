import React from 'react'
import Navbar from './Navbar'
import MultiSelectDropdown from './MultiSelectDropdown'

const RegisterAsDoctor = () => {
  return (
    <div>
        <div className="upper">
            <Navbar/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

            <form action="/send-data-here" method="post">

              <label htmlFor="qualification">Qualification</label>
              <input type="text" id='qualification' placeholder='Enter your qualification' />

              <label htmlFor="field">Field</label>
              <input type="text" id='field' placeholder='Enter your field' />

              <label htmlFor="exp">Experience</label>
              <input type="text" id='exp' placeholder='Enter your Experience in years' />

              <label htmlFor="contact">Contact Number</label>
              <input type="number" id='contact' placeholder='Enter your contact no.' />

              <label htmlFor="address">Address</label>
              <input type="address" id='address' placeholder='Enter your address' />

              <label htmlFor="availibility">Availibility</label>
              <MultiSelectDropdown/>
            </form>
              
            </div>

            <div className="column2">
              <form action="/send-data-here" method="post">

              <label htmlFor="open">Opens at</label>
              <input type='time' id='open' placeholder='Choose opening time'></input>

              <label htmlFor="close">Closes at</label>
              <input type='time' id='close' placeholder='Choose closing time'></input>

              <label htmlFor="fee">Consultancy fee</label>
              <input type='text' id='fee' placeholder='In rupees'></input>

             <label htmlFor="upi">Enter your UPI ID</label>
              <input type='text' id='upi' placeholder='UPI Id               @ okhdfcbank'></input>

              <label htmlFor="license">Upload your license:</label>
              <input type='file' id='license'></input>

              <button className='btn-submit' type='submit'>Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )
}

export default RegisterAsDoctor