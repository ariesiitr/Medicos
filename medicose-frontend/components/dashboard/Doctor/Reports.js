import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";


function Reports() {
  // const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   async function GetData() {
  //     let Response = await axios.get("");
  //     return Response;
  //   }
  //   GetData().then((Response) => {
  //     setData(Response.data.items);
  //   });
  // }, []);
  // console.log(Data);

  return (
    <div className="reportsContainer">
      <div className="reportHeadingContainer">
        <div className="reportsHeading">Reports</div>
        <div className="reportSeachboxContainer">
          <input
            type="search"
            placeholder="Enter Patient name"
            className="reportSearchbox"
            onChange={(e) => setSearch(e.target.value)}
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
            <Image
              src="/filterIcon.png"
              width={20}
              height={20}
              alt="filter Icon"
            />
          </div>
          <div className="filterContainer">
            <span>Sort by</span>
            <Image
              src="/sortbyIcon.png"
              width={20}
              height={20}
              alt="sortby Icon"
            />
          </div>
        </div>
      </div>
      <div className="reportContainerBottom">
        {Data &&
          Data.filter((Data) => {
            return search.toLowerCase() === ""
              ? Data
              : Data.first_name.toLowerCase().includes(search);
          }).map(({ profile_image, first_name, id }) => {
            console.log(profile_image);
            return (
              <div className="patientReport" key={id}>
                <Image
                  // src={profile_image === undefined ?"/profilePic.png" : "/profile_image" }
                  src="/profilePic.png"
                  width={56}
                  height={56}
                  alt="profile Image"
                />
                <div>{first_name}</div>
                <div>{id}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Reports;
