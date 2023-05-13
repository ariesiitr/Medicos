import React, {useEffect, useState}from 'react'
import NavbarDashboard from '../Navbar/NavbarDashboard'
import VerticalNavbarDashboard from '../Navbar/VerticalNavbarDashboard'
import Link from 'next/link'
import axios from 'axios'


if(typeof window !== "undefined"){
  var container= document.querySelector('#on_button');
  var para=document.getElementById('available')
  var para2=document.getElementById('para1')
  
  
  if(container){
    let counter=1;
    container.addEventListener('click',function(){
      if( counter==1){
        right_button.src='/Wrong_button.jpeg';
        on_button.src='/Offbutton.png';
        para.style.backgroundColor = "#d2dce4";
        para2.style.color='#737E87';
        counter--;
        console.log('availabe')
      }
      else if( counter==0){
        right_button.src='/Right_button.png';
        on_button.src='/Onbutton.png';
        para.style.backgroundColor = "#ECFDF5";
        para2.style.color='#089996';
        counter++;
        console.log('not availabe')
      }
    })
  }
}




const DoctorHome = () => {
  
  const [toggleState,setToggleState] = useState(1);
  const toggleTab = (index) => {
    console.log(index)
    setToggleState(index);
  }

  
  
 
  return (
    <>
    <div className="d_upper">
        <NavbarDashboard/>
    </div>

    <div className="d_main">
      <div className="d_main-left"> 
        <VerticalNavbarDashboard/>
        
      </div>
          <div className="d_main-right">
        <div className="doctorintro" id='doctorintro'>
          <div className="intro">
            <div className='doctor_name_logo'>

                <div className="doctorlogo">
                  <img src="/User_logo.png" alt="" />

                </div>
                <div className="doctorname">
                  <h1>Welcome, Dr. User_Name!</h1>
                  <p>Your have <span style= {{color:'#089996'}}>_ appointments</span> for today</p>
                </div>
            </div>

            <div className="workinghours">
              <img src="/Clock.png" alt="" />
              <p>Working Hours</p>
            </div>

          </div>
          <div className="available" id='available'>
            <div className="right_wrong">

            <img id='right_button' src="/Right_button.png" alt="" />
            <span id= 'para1' style= {{color:'#089996'}}>You are availabe for appointments.</span>
            </div>
            <div className="on_off">
              <p>Now availabe?</p>
              <img id='on_button' src="/Onbutton.png" alt="no pic" />
            </div>
          </div>
        </div>
        <div className="appointnments_requests">
          <div className="home_heading">
          <h1 className={toggleState === 1 ? "tabs active-tabs":"tabs"} onClick ={() => toggleTab(1)}>My appointments</h1>

          <h1 className={toggleState === 2 ? "tabs active-tabs":"tabs"} onClick ={() => toggleTab(2)}>Requests</h1>

          </div>
          <hr style={{margin :'28px'}}/>
          <div className="sorting">
            <div className="select_date">
              <p>Select date</p>
              <img src="/Calender.png" alt="" />
            </div>
            <div className="sort">
              <p>Sort</p>
              <img src="/Sort.png" alt="" />
            </div>
          </div>
          <div className="content-tabs">

          
          <div className={toggleState === 1 ? "appointments_patient_info active-appointments_patient_info " : "appointments_patient_info"}>

           
              
                  <div className="briefInfo">

                    <div className="patient_date_day_and_time">
                      <div className="appointment_date_day">
                      <div className="appointment_date">
                          <div>23</div>
                          </div>
                          <div className="appointment_month_day">
                          
                          <div>Feb,</div>
                          <div>Monday</div>
                          
                          </div>
                          
                        </div>
                      
                      <div className="appointment_time">
                        
                        <div>9:00 pm- 10:00 pm</div>

                      </div>
                        
                    </div>
                      <hr/>
                      <div className="patient_name_and_id">
                          <div className="appointment_patient_name">
                            <img src="/Right_button.png" alt="" />
                            
                            <div>Shagun Sinha</div>
                          </div>
                          <div className="appoitnment_patient_id_basic">
                           
                            <div style={{color:"#737E87"}}>#089996</div>
                            <div style={{color:'#5D9EE3'}}>Monthly checkup</div>

                          </div>
                      </div>
                </div>
                  <div className="detailedInfo">
                    <button id='btn-appointment' className='details'>Details</button>
                  </div>
                  

                  

                
                

            
            </div>
          </div>
          
          <div className={toggleState === 2 ? "appointments_patient_info active-appointments_patient_info " : "appointments_patient_info"}>
          
                  <div className="briefInfo">

                    <div className="patient_date_day_and_time">
                      <div className="appointment_date_day">
                          <div className="appointment_date">
                          
                          {/*<div>{appointmentDate}</div> */}
                          <div>23</div>
                          </div>
                          <div className="appointment_month_day">
                            {/* <div>{appointment_month},</div> */}
                            {/* <div>{appointment_day}</div> */}
                            <div>Feb,</div>
                            <div>Monday</div>

                        </div>

                      </div>
                      <div className="appointment_time">
                        
                        {/* <div>{appointmentTime}</div> */}
                        <div>9:00 pm- 10:00 pm</div>
                      </div>
                        
                      </div>
                      <hr/>
                      <div className="patient_name_and_id">
                          <div className="appointment_patient_name">
                            <img src="/Right_button.png" alt="" />
                            {/* <div>{appointment_patientName}</div> */}
                            <div>Shagun Sinha</div>
                          </div>
                          <div className="appoitnment_patient_id_basic">
                            
                           
                            {/*<div style={{color:"#737E87"}}>{uniqueId}</div> */}
                            {/* <div style={{color:'#5D9EE3'}}>{DocUniqueId}</div> */}
                            <div style={{color:"#737E87"}}>#089996</div>
                            <div style={{color:'#5D9EE3'}}>Monthly checkup</div>

                          </div>
                      </div>
                  </div>
                  
                  <div className="accept_deny">
                    <button id='btn-appointment' className='accept' onClick ={() => acceptance(1)}>Accept</button>
                    <button id='btn-appointment' className='deny' onClick={() => denying(1)}>Deny</button>
                  </div>

               
              

             
          </div>
          </div>
        </div>
        
      </div>
     
    
   
    </>
  )
}

export default DoctorHome