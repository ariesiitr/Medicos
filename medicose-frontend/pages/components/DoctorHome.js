import React from 'react'
import NavbarDashboard from './NavbarDashboard'
import VerticalNavbarDashboard from './VerticalNavbarDashboard'
import Link from 'next/link'

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
  return (
    <>
    <div className="d_upper">
        <NavbarDashboard/>
    </div>

    <div className="d_main">
      <div className="d_main-left"> 
        <VerticalNavbarDashboard/>
        {/* {VerticalNavbarDashboard.map((menu) =>{
          return (
            <>
            <div className="menu-item">
              <i className={menu.icon}></i>
              <Link to={menu.path}>{menu.name}</Link>
            </div>
            </>
          )
})} */}
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
          <div className="heading">
          <h1>My appointments</h1>
          <h1>Requests</h1>

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
      </div>
    </div>
    </>
  )
}

export default DoctorHome