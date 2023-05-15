import React from "react";
import Image from "next/image";

function Payment() {
  return (
    <div className="reportsContainer">
      <div className="reportsHeading">Payments</div>
      <div className="paymentContainerBottom">
        <div className="paymentsRecievedToday">
          <div className="paymentDay">Today</div>
          <table>
            <tr>
              <th colSpan={1}>Name</th>
              <th colSpan={1}>Date</th>
              <th colSpan={1}>Amount</th>
              <th colSpan={1}>Status</th>
            </tr>
            <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            </tr>
          </table>
        </div>

        <div className="previousPayments">
          <div className="pastPaymentText">Past Payment</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
