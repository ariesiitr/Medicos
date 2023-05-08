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

        </div>
      </div>
    </div>
  );
}

export default Chatpage;
