import React from 'react'
import Link from 'next/link'
import DoctorHome from '../dashboard/Doctor/DoctorHome'

const VerticalNavbarDashboard = () => {
  return (
    <>
        <div className="d_main-left">
          
                  <nav className="d_vnav">
                      <Link  legacyBehavior href="../DoctorDashboard/DoctorHome">
                      <div className="block">
                      <img src="/Home.png" alt="" />
                      <p>Home</p>
                      </div>
                       </Link>

                      <Link legacyBehavior href='/components/DoctorCalender'>
                      <div className="block">
                      <img src="/Calender.png" alt="" />
                      <p>Calender</p>
                      </div>
                      </Link>


                      <Link legacyBehavior href='/components/DoctorChats'>
                      <div className="block">
                      <img src="/Chats.png" alt="" />
                      <p>Chats</p>
                          
                      </div>
                      </Link>


                      <Link legacyBehavior href='/components/DoctorReports'>
                      <div className="block">
                      <img src="/Reports.png" alt="" />
                      <p>Reports</p>
          
                      </div>
                      </Link>


                      <Link legacyBehavior href='/components/DoctorPayments'>
                      <div className="block">
                      <img src="/Payments.png" alt="" />
                      <p>Payments</p>
          
                      </div>
                      </Link>
                  </nav>
        </div>
                  
            
    </>
  )
}

export default VerticalNavbarDashboard

// export const VerticalNavbarDashboard = [
//   {
//     name:'Home',
//     path:'',
//     icon:"fa-solid fa-house" 
//   },
//   {
//     name:'Calender',
//     path:'',
//     icon:"fa-regular fa-calendar-exclamation" 
//   },
//   {
//     name:'Chats',
//     path:'',
//     icon:' class="fa-solid fa-messages" style="color: #627ba7'
//   },
//   {
//     name:'Reports',
//     path:'',
//     icon:'fa-solid fa-notes-medical'
//   },
//   {
//     name:'Payments',
//     path:'',
//     icon:'class="fa-solid fa-circle-dollar" style="color: #627ba7;"'
//   }
// ]

