import React, {useEffect, useState}from 'react'
import NavbarDashboard from '../../../components/navbar/NavbarDashboard'
import VerticalNav from '../../../components/navbar/VerticalNav'
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



const Homepage = () => {
  
  // const [pageId,setpageId] =useState(1);
  const [Appointment,setAppointment] = useState([]);
  const [toggleTab,setToggleTab] = useState(1);
  // const Appointment.length =2;
  console.log(Appointment)

  const [data, setData] = useState(null);
  // const [users,setUsers]=useState([]);
  // const UserData = ({users}) => {
  //   return(
  //     <>
  //       {
  //         users.map((curUser) => {
  //           const {uniqueId, DocUniqueId,appointmentTime,appointmentDate} = curUser;
  //           return(
  //             <>
  //             <h2>{uniqueId}</h2>
  //             <h2>{DocUniqueId}</h2>
  //             <h2>{appointmentDate}</h2>
  //             <h2>{appointmentTime}</h2>

                
  //               </>
  //           )
  //         })
  //       }
  //     </>
  //   )
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(' http://127.0.0.1:8000/doctor/doctorAppointDetails');
        setData(response.data);
        if(data.length>0){
          setUsers(data)
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    // fetchData();
  }, []);
  


console.log(data)

// const appointmentDate = data?.data[0]?.appointmentDate; 
// const appointmentTime = data?.data[0]?.appointmentTime;
// const uniqueId =data?.data[0]?.uniqueId;
// const DocUniqueId = data?.data[0]?.DocUniqueId;
// const doctorName = data?.data[0]?.doctorName;

const BookAppointment = () => {
  const Btn = document.querySelector('.appointmentBtn');
		Btn.disabled = true;
}
const doctorName = data?.data[0]?.doctorName; 



 return(
    <>      
    <div className="d_upper">
        <NavbarDashboard/>
      </div>

      <div className="d_main">
            <div className="d_main-left"> 
                <VerticalNav/>
                
            </div>
      


            <div className="d_main-right">
          
            
                <div div className="doctorintro" id='doctorintro'>
                    <div className="intro">
                        <div className='doctor_name_logo'>

                            <div className="doctorlogo">
                              <img src="/User_logo.png" alt="" />
                            </div>
                            <div className="doctorname">
                              <h1>Welcome, Dr. Shagun!</h1>
                              {/* <h1>Welcome, Dr. {doctorName}!</h1> */}
                              <p>Your have <span style= {{color:'#089996'}}>_ appointments</span> for today</p>
                            </div>
                        </div>
                          <div className="workinghours">
                            <img src="/Clock.png" alt="" />
                            <p>Working Hours</p>
                          </div>
                    </div>
                      <div className="available">
                        <div className='available_permission'>

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
                    <button className= 'pageindex1' onClick ={(e) => setToggleTab(1)}>My appointments</button>

                    <button className='pageindex2' onClick ={(e) => setToggleTab(2)}>Requests</button>

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
                    </div>
                    
              
                
          
                    
                    
                  {toggleTab === 1 && (
                      <>
                          {Appointment.length !== 0 ? (
                            <div className="noAppointment">
                              You don't haave any appointments for today
                            </div>
                          ):(
                            <div className="patientAppointmentInfo">
                                    <div className="briefInfo">

                                      <div className="patientAppointment_date_time">
                                              <div className="patientAppointment_date">
                                                <div>25 March 2023</div>
                                                  {/* <div>{appointmentDate}</div> */}
                                                  
                                              </div>
                                              <div className="patientAppointment_time">
                                                <div>3:00-4:00</div>
                                                    {/* <div>{appointmentTime}</div> */}
                                              </div>
                                                  
                                      </div>             
                                      <hr/>
                                      <div className="patientAppointment_name_and_id">
                                                <div className="patientAppointment_name">
                                                      <img src="/Right_button.png" alt="" />
                                                      <div>Patient Name</div>
                                                </div>
                                                <div className="patientAppointment_uniqueId">
                                                      {/* <div style={{color:"#737E87"}}>{uniqueId}</div> */}
                                                      <div style={{color:"#737E87"}}>#061b2d</div>
                                                      {/* <div style={{color:'#5D9EE3'}}>{DocUniqueId}</div> */}
                                                </div>
                                      </div>
                                      </div>
                                      <div className="detailedInfo">
                                              <button id='btn-appointment' className='details'>Details</button>
                                      </div>

                                  </div>
                            /*Appointment.map(
                              ({
                                id,
                                uniqueId,
                                DocUniqueId,
                                appointmentTime,
                                appointmentDate
                              }) => {
                                return (
                                  <div className="patientAppointmentInfo" key={id}>
                                    <div className="briefInfo">

                                      <div className="patientAppointment_date_time">
                                              <div className="patientAppointment_date">
                                                <div>25 March 2023</div>
                                                  <div>{appointmentDate}</div>
                                              </div>
                                              <div className="appointment_time">
                                                    <div>{appointmentTime}</div>
                                              </div>
                                                  
                                      </div>             
                                      <hr/>
                                      <div className="patientAppointment_name_and_id">
                                                <div className="patientAppointment_name">
                                                      <img src="/Right_button.png" alt="" />
                                                      <div>Patient Name</div>
                                                </div>
                                                <div className="patientAppointment_uniqueId">
                                                      <div style={{color:"#737E87"}}>{uniqueId}</div>
                                                      <div style={{color:'#5D9EE3'}}>{DocUniqueId}</div>
                                                </div>
                                      </div>
                                      </div>
                                      <div className="detailedInfo">
                                              <button id='btn-appointment' className='details'>Details</button>
                                      </div>

                                  </div>
                                )
                              }
                            )*/
                          )}
                      </>
                    )}
                  {toggleTab === 2 && (
                      <>
                          {Appointment.length === 0 ? (
                            <div className="noAppointmentRequest">
                              You don't haave any anymore requests for today
                            </div>
                          ):(
                            Appointment.map(
                              ({
                                id,
                                uniqueId,
                                DocUniqueId,
                                appointmentTime,
                                appointmentDate
                              }) => {
                                return (
                                  <div className="patientAppointmentInfo" key={id}>
                                    <div className="briefInfo">

                                      <div className="patientAppointment_date_time">
                                              <div className="patientAppointment_date">
                                                  <div>{appointmentDate}</div>
                                              </div>
                                              <div className="appointment_time">
                                                    <div>{appointmentTime}</div>
                                              </div>
                                                  
                                      </div>
                                      <hr/>
                                      <div className="patientAppointment_name_and_id">
                                                <div className="patientAppointment_name">
                                                      <img src="/Right_button.png" alt="" />
                                                      <div>Patient Name</div>
                                                </div>
                                                <div className="patientAppointment_uniqueId">
                                                      <div style={{color:"#737E87"}}>{uniqueId}</div>
                                                      <div style={{color:'#5D9EE3'}}>{DocUniqueId}</div>
                                                </div>
                                      </div>
                                      </div>
                                      <div className="accept_deny_info">
                                              <button id='btn-appointment' className='accept'>Accept</button>
                                              <button id='btn-appointment' className='deny'>Accept</button>
                                      </div>

                                  </div>
                                )
                              }
                            )
                          )}
                      </>
                    )}
             
          </div>

      </div>
     </>    
    );
    }      



          





        



export default Homepage
            



            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
  
// import React, {useEffect, useState}from 'react'
// import NavbarDashboard from '../../Navbar/NavbarDashboard'
// import VerticalNav from '../../Navbar/VerticalNav'
// import Link from 'next/link'
// import axios from 'axios'


// if(typeof window !== "undefined"){
//   var container= document.querySelector('#on_button');
//   var para=document.getElementById('available')
//   var para2=document.getElementById('para1')
  
  
//   if(container){
//     let counter=1;
//     container.addEventListener('click',function(){
//       if( counter==1){
//         right_button.src='/Wrong_button.jpeg';
//         on_button.src='/Offbutton.png';
//         para.style.backgroundColor = "#d2dce4";
//         para2.style.color='#737E87';
//         counter--;
//         console.log('availabe')
//       }
//       else if( counter==0){
//         right_button.src='/Right_button.png';
//         on_button.src='/Onbutton.png';
//         para.style.backgroundColor = "#ECFDF5";
//         para2.style.color='#089996';
//         counter++;
//         console.log('not availabe')
//       }
//     })
//   }
// }



// const Homepage = () => {
  
//   const [toggleState,setToggleState] = useState(1);
//   const toggleTab = (index) => {
//     console.log(index)
//     setToggleState(index);
//   }

//   const [data, setData] = useState(null);
//   const [users,setUsers]=useState([]);
//   const UserData = ({users}) => {
//     return(
//       <>
//         {
//           users.map((curUser) => {
//             const {uniqueId, DocUniqueId,appointmentTime,appointmentDate} = curUser;
//             return(
//               <>
//               <h2>{uniqueId}</h2>
//               <h2>{DocUniqueId}</h2>
//               <h2>{appointmentDate}</h2>
//               <h2>{appointmentTime}</h2>

                
//                 </>
//             )
//           })
//         }
//       </>
//     )
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(' ');
//         setData(response.data);
//         if(data.length>0){
//           setUsers(data)
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     fetchData();
//   }, []);
  


// console.log(data)

// const appointmentDate = data?.data[0]?.appointmentDate; 

// const appointmentTime = data?.data[0]?.appointmentTime;

// const uniqueId =data?.data[0]?.uniqueId;

// const DocUniqueId = data?.data[0]?.DocUniqueId;


// const doctorName = data?.data[0]?.doctorName;


//  return(
//     <div>
//       <div className="d_upper">
//         <NavbarDashboard/>
//       </div>

//       <div className="d_main">
//             <div className="d_main-left"> 
//                 <VerticalNav/>
                
//             </div>
      


//             <div className="d_main-right">
          
            
//                 <div div className="doctorintro" id='doctorintro'>
//                     <div className="intro">
//                         <div className='doctor_name_logo'>

//                             <div className="doctorlogo">
//                               <img src="/User_logo.png" alt="" />
//                             </div>
//                             <div className="doctorname">
//                               <h1>Welcome, Dr. {doctorName}!</h1>
//                               <p>Your have <span style= {{color:'#089996'}}>_ appointments</span> for today</p>
//                             </div>
//                         </div>
//                           <div className="workinghours">
//                             <img src="/Clock.png" alt="" />
//                             <p>Working Hours</p>
//                           </div>
//                     </div>
//                       <div className="available">
//                         <div className='available_permission'>

//                       <img id='right_button' src="/Right_button.png" alt="" />
//                       <span id= 'para1' style= {{color:'#089996'}}>You are availabe for appointments.</span>
//                         </div>
//                       <div className="on_off">
//                         <p>Now availabe?</p>
//                         <img id='on_button' src="/Onbutton.png" alt="no pic" />
//                       </div>

//                       </div>
//                   </div>




                      
//                   <div className="appointnments_requests">
//                     <div className="home_heading">
//                     <h1 className={toggleState === 1 ? "tabs active-tabs":"tabs"} onClick ={() => toggleTab(1)}>My appointments</h1>

//                     <h1 className={toggleState === 2 ? "tabs active-tabs":"tabs"} onClick ={() => toggleTab(2)}>Requests</h1>

//                     </div>
//                     <hr style={{margin :'28px'}}/>
//                     <div className="sorting">
//                       <div className="select_date">
//                         <p>Select date</p>
//                         <img src="/Calender.png" alt="" />
//                       </div>
//                       <div className="sort">
//                         <p>Sort</p>
//                         <img src="/Sort.png" alt="" />
//                       </div>
//                     </div>
//                     </div>
                    
              
                
//               <div className="content-tabs">

                    
//                     <div className={toggleState === 1 ? "appointments_patient_info active-appointments_patient_info " : "appointments_patient_info"}>

                    
                        
//                       <div className="briefInfo">

//                       <div className="patient_date_day_and_time">
//                                 <div className="appointment_date_day">
//                                     <div className="appointment_date">

                                    
//                                     <div>{appointmentDate}</div>
//                                     {/* <div>23</div> */}
                                    
                                    {/* <div>23</div> */}

                                    

//                                     </div>
//                                     <div className="appointment_month_day">
//                                       {/* <div>{appointment_month},</div> */}
//                                       {/* <div>{appointment_day}</div> */}
//                                       {/* <div>Feb,</div> */}
//                                       {/* <div>Monday</div> */}

//                                   </div>

//                                 </div>
//                                 <div className="appointment_time">
                                
                                  // <div>13:00-13:30</div>
                                  {/* <div>9:00 pm- 10:00 pm</div> */}


//                                 </div>
                                  
//                               </div>
//                                 <hr/>
//                                 <div className="patient_name_and_id">
//                                     <div className="appointment_patient_name">
//                                       <img src="/Right_button.png" alt="" />
                                      
//                                       <div>Patient Name</div>
//                                     </div>
//                                     <div className="appoitnment_patient_id_basic">

                                    
//                                       {/* <div style={{color:"#737E87"}}>#089996</div> */}
//                                       {/* <div style={{color:'#5D9EE3'}}>Monthly checkup</div> */}

                                      // <div style={{color:"#737E87"}}>135790</div>
                                      // <div style={{color:'#5D9EE3'}}>ARTQ43</div>
                                      {/* <div>{appoitment_patient_basic_info}</div> */}
                                      {/* <div style={{color:"#737E87"}}>#089996</div> */}
                                      {/* <div style={{color:'#5D9EE3'}}>Monthly checkup</div> */}


//                                     </div>
//                                 </div>
//                       </div>
//                           <div className="detailedInfo">
//                               <button id='btn-appointment' className='details'>Details</button>
//                           </div>
                            

                            

                          
                          

                      
//                     </div>
                    
//                     <div className={toggleState === 2 ? "appointments_patient_info active-appointments_patient_info " : "appointments_patient_info"}>
                    
//                             <div className="briefInfo">

//                               <div className="patient_date_day_and_time">
//                                 <div className="appointment_date_day">
//                                     <div className="appointment_date">

                                    
//                                     <div>{appointmentDate}</div>
//                                     {/* <div>23</div> */}
                                    // <div>appointmentDate</div>
                                    {/* <div>23</div> */}


//                                     </div>
//                                     <div className="appointment_month_day">
//                                       {/* <div>{appointment_month},</div> */}
//                                       {/* <div>{appointment_day}</div> */}
//                                       <div>Feb,</div>
//                                       <div>Monday</div>

//                                   </div>

//                                 </div>
//                                 <div className="appointment_time">
                                
                                  // <div>appointmentTime</div>
                                  {/* <div>9:00 pm- 10:00 pm</div> */}

//                                   {/* <div>{appointmentTime}</div> */}
//                                   {/* <div>9:00 pm- 10:00 pm</div> */}


//                                 </div>
                                  
//                               </div>
//                                 <hr/>
//                               <div className="patient_name_and_id">
//                                     <div className="appointment_patient_name">
//                                       <img src="/Right_button.png" alt="" />
//                                       {/* <div>{appointment_patientName}</div> */}
//                                       <div>Patient Name</div>
//                                     </div>
//                                     <div className="appoitnment_patient_id_basic">

                                      
                                    
                                      // <div style={{color:"#737E87"}}>uniqueId</div> 
                                      //  <div style={{color:'#5D9EE3'}}>DocUniqueId</div>
                                      {/* <div style={{color:"#737E87"}}>#089996</div>
                                      <div style={{color:'#5D9EE3'}}>Monthly checkup</div> */}

//                                       {/* <div style={{color:"#737E87"}}>{uniqueId}</div>
//                                       <div style={{color:'#5D9EE3'}}>{DocUniqueId}</div> */}
//                                       {/* <div style={{color:"#737E87"}}>#089996</div> */}
//                                       {/* <div style={{color:'#5D9EE3'}}>Monthly checkup</div> */}


//                                     </div>
//                                 </div>
//                           </div>
                            
//                             <div className="accept_deny">
//                               <button id='btn-appointment' className='accept' onClick ={() => acceptance(1)}>Accept</button>
//                               <button id='btn-appointment' className='deny' onClick={() => denying(1)}>Deny</button>
//                             </div>

                        
//                             </div>
//                   </div>  



//             </div>





//             </div>
//       </div>
    

//   )
// }

// export default Homepage

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
  