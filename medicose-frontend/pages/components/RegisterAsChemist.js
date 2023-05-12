import React from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const RegisterAsChemist = () => {

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


const Chemist_API="http://127.0.0.1:8000/clinic/chemistlogin";

  function submit() {
    if (Password.length > 7) {
      FetchApi(
        'POST',
        Chemist_API,
        {
          esummit_id: email,
          password: Password,

        },
        null
      )
        .catch((err) => {
          toast.error(err.response.data.error_msg);
          console.log(err.response)
        });
    }


  }



  return (
    <div>
        <div className="upper">
            <Navbar/>
        </div>
        <div className="main">

        <div className="column">
         
            <div className="column1">

            <form action="/send-data-here" method="post">

              <label htmlFor="storename">Name of Store</label>
              <input type="text" id='storename' placeholder='Enter the name of your store' />

              <label htmlFor="address">Address</label>
              <input type="address" id='address' placeholder='Enter your address' />

              <label htmlFor="open">Opens at</label>
              <input type='time' id='open' placeholder='Choose opening time'></input>

              <label htmlFor="close">Closes at</label>
              <input type='time' id='close' placeholder='Choose closing time'></input>

              <label htmlFor="contact">Contact Number</label>
              <input type="number" id='contact' placeholder='Enter your contact no.' />

              
              
            </form>
              
            </div>

            <div className="column2">
              <form action="/send-data-here" method="post">


              <label htmlFor="about">About</label>
              <input type='textarea' id='about' placeholder='Enter a description of your store'></input>

             <label htmlFor="upi">Enter your UPI ID</label>
              <input type='text' id='upi' placeholder='UPI Id               @ okhdfcbank'></input>

              <label htmlFor="license">Upload your license:</label>
              <input type='file' id='license'></input>

              <button className='btn-submit' type='submit'
              
              >Submit</button>
              </form>



            </div>

          
        
        </div>
        </div>
        
       

       
      </div>
  )
}

export default RegisterAsChemist