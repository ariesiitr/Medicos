import React from "react";
import Image from "next/image";

function Reports() {
  return (
    <div className="reportsContainer">
      <div className="reportHeadingContainer">
        <div className="reportsHeading">Reports</div>
        <div className="reportSeachboxContainer">
          <input
            type="search"
            placeholder="Enter Patient name or Patient Id"
            className="reportSearchbox"
          />
          <Image
            src="/searchIcon.png"
            width={32}
            height={32}
            style={{
              marginLeft: "-2.5rem",
            }}
          />
        </div>
        <div style={{display: "flex",
      flexDirection:"row", gap:"1rem" }}>
          <div className="filterContainer">
            <span>Filter</span>
            <Image 
            src="/filterIcon.png"
            width={20}
            height={20}
            />
          </div>
          <div className="filterContainer">
          <span>Sort by</span>
            <Image 
            src="/sortbyIcon.png"
            width={20}
            height={20}
            />
          </div>
        </div>
      </div>
      <div className="reportContainerBottom">
        <div className="patientReport">
          <Image
          src="/profilePic.png"
          width={56}
          height={56}
          />
          <div>patient"s Name</div>
          <div>patient"s Id</div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
