import { useState } from 'react'
import React from 'react'
import NavbarDashboard from '../Navbar/NavbarDashboard'
import VerticalNavbarDashboard from '../Navbar/VerticalNav'

const ChemistHome = () => {
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
            <div className="chemistintro">
              <div className="c_intro">
                <div className="chemistlogo">
                  <img src="/User_logo.png" alt="" />

                </div>
                <div className="chemistname">
                  <h1>Welcome, User_Name!</h1>
                  <p style={{color:"#089996",fontSize :20}}>Hope you are fit and happy!</p>
                </div>
              </div>
            </div>
            <div className="chemistOrders">
              <div className="orders_heading">
              <h1 className={toggleState === 1 ? "tabs active-tabs":"tabs"} onClick ={() => toggleTab(1)}>Orders</h1>

              <h1 className={toggleState === 2 ? "tabs active-tabs":"tabs"} onClick ={() => toggleTab(2)}>Past Orders</h1>
              </div>
              <hr style={{marginLeft:32, marginRight:32, marginTop:0}} />  
              <div className="orders">
                <div className="patientName_logo_time">
                <hr/>
                  <div className="userlogo">
                    <img src="/User_logo.png" alt="" />
                  </div>
                  <div className="userName">
                    <span style={{color:'#089996'}}>#089996</span>
                    <h2>User_name</h2>
                  </div>
                    <div className="order_time">
                      <p>Ordered at 9:00am</p>
                    </div>
                </div>
                <div className="reports">
                  <p>Patient_Report</p>
                </div>
              </div>
              <div className="previous_orders">

              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default ChemistHome