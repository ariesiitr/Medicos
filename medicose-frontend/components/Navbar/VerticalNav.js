import React from 'react'
import Link from 'next/link'
// import Router, { useRouter } from 'next/router'

const VerticalNav = () => {
  // const router=useRouter();
  // const navigateToDoctorHome=()=>{
  //   router.push('/DoctorHome')
  // }
  return (
    <>
        <div className="d_main-left">
          
                  <nav className="d_vnav">
                      <Link  legacyBehavior href="/DoctorHome">
                      <div className="block">
                      <img src="/Home.png" alt="" />
                      <p>Home</p>
                      </div>
                       </Link>

                      <Link legacyBehavior href='/DoctorCalendar'>
                      <div className="block">
                      <img src="/Calender.png" alt="" />
                      <p>Calendar</p>
                      </div>
                      </Link>


                      <Link legacyBehavior href='/DoctorChats'>
                      <div className="block">
                      <img src="/Chats.png" alt="" />
                      <p>Chats</p>
                          
                      </div>
                      </Link>


                      <Link legacyBehavior href='/DoctorReports'>
                      <div className="block">
                      <img src="/Reports.png" alt="" />
                      <p>Reports</p>
          
                      </div>
                      </Link>


                      <Link legacyBehavior href='/DoctorPayments'>
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

