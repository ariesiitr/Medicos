import React from "react";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

function Reports() {
  const [Data, setData] = useState([]);

  async function GetData() {
    let Response = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Frssfeedstopstories.cms"
    );
    return Response;
  }
  GetData().then((Response) => {
    setData(Response.data.items)
  });

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
            alt="search Icon"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <div className="filterContainer">
            <span>Filter</span>
            <Image src="/filterIcon.png" width={20} height={20} alt="filter Icon" />
          </div>
          <div className="filterContainer">
            <span>Sort by</span>
            <Image src="/sortbyIcon.png" width={20} height={20} alt="sortby Icon" />
          </div>
        </div>
      </div>
      <div className="reportContainerBottom">
        {Data &&
          Data.map(({ profile_image, patient_name, patient_id }) => {
            return (
              <div className="patientReport">
                <Image
                  // src={profile_image === " " ? "/profilePic.png" : "/profile_image"}
                  src="/profilePic.png"
                  width={56}
                  height={56}
                  alt="profile Image"
                />
                <div>{patient_name}</div>
                <div>{patient_id}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Reports;
