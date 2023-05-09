import React from "react";
import Image from "next/image";

function Chatpage() {
  return (
    <div className="chatContainer">
      <div className="clientChatDetails">
        <div className="chatTextContainer">
          <div className="chatsContainer">Chats</div>
          <Image src="/Ellipsis.png" width={36} height={32} />
        </div>
        <input type="search" placeholder="Search" className="searchBox" />

        <div className="profileContainer">
          <Image src="/profilePic.png" width={40} height={40} />
          <div>
            <div className="patientName">Name</div>
            <div className="lastChat">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </div>
      <div className="chatBoxContainer">
        <div className="profileContainer2">
          <Image src="/profilePic.png" width={40} height={40} />
          <div>
            <div className="patientName">Name</div>
            <div className="lastChat">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
        <div className="chatbox">
          <div className="typeHere">
            <Image src="/plusign.png" width={35} height={36} />
            <div className="inputTextContainer">
              <input type="text" className="typeYourTextHere" placeholder="Message" />
              <Image src="/SendIcon.png" width={24} height={24} style={{
                marginLeft: "-2rem"
              }} />
            </div>
            <Image src="/mic.png" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
