import React from 'react'
import Link from 'next/link'
import DoctorHome from '../dashboard/Doctor/Homepage'

const VerticalNav = () => {
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

export default VerticalNav

