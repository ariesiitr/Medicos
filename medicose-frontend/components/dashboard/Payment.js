import React from "react";
import Image from "next/image";

function Payment() {
  return (
    <div className="reportsContainer">
      <div className="reportHeadingContainer">
        <div className="reportsHeading">Payments</div>
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
      <div className="paymentContainerBottom">
        <div className="paymentsRecievedToday">
          <div className="paymentDay">Today</div>
        </div>
        <div className="pastPayments">
          <div>Past Payment</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
