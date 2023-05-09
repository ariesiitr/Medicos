import React from 'react'
import Link from 'next/link'

if(typeof window !== "undefined"){
    var container=document.querySelector('#search_bar');
    const container1 = document.getElementById('input-cont')
    if(container){
        let counter=1;
        container.addEventListener('click',function(){
            if(counter==1){
                // let input=document.createElement('input');
                container1.placeholder='Search' ;
                // container1.appendChild(input);
                counter--;
                console.log('icon')
            }
            else if(counter==0){
                search_bar.src='/Search.png';
                counter++;
                console.log('bar')
            }

        })
    }

    

}

const NavbarDashboard = () => {
    
  return (
    
        <nav className="d_nav">
            <div className="d_nav-left">
            <Link legacyBehavior href={"/"}>
                <a >
                    <div className="logo">
                        <img id="img1" src="/Vector_white.png" alt="vector" />
                        <img src="/Group 23.png" id="img2" alt="" />
                    </div>
                

                </a>
            </Link>

            </div>
            <div className="d_nav-right">
                    <div className="search_bar" id='search_bar'>
                        <div id="input-cont">

                        </div>
                        <img src="/Search.png" alt="" id='search'/>
                    {/* <input type="text" id='search' placeholder='Search' /> */}
                    </div>
                    <img id='notification' src="/Notification.png" alt="" />
                    <img src="/User_logo.png" alt="" />
                    <div className="user_name">
                        
                        <h3>User_Name</h3>
                    </div>
            </div>
        </nav>
        
        
    
  )
}

export default NavbarDashboard