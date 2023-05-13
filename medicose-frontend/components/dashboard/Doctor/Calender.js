import React , {useState}from 'react'
import NavbarDashboard from '../../Navbar/NavbarDashboard'
import VerticalNavbarDashboard from '../../navbar/VerticalNav'
import Link from 'next/link'
import Calendar from 'react-calendar';



const DoctorCalender = (props) => {
  const [date,setDate] = useState(new Date());
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
      <h1 className='calendar_heading'>Calendar</h1>
      <div className="no_of_appointments_and_month">
         <button className='no_of_appointments' style={{color:'#089996'}} > 7 appointments today</button>
         {/* <button className='month' style={{color:'#737E87'}} >October 2023 </button> */}
      </div>
      <div className="main_calendar">
      <Calendar onChange={setDate} value={date} />
      </div>
     
      
    </div>
    </div>
    </>
  )
}

export default DoctorCalender