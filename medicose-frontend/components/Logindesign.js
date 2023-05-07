import React from "react";
import Image from "next/image";

export default function Logindesign() {
  return (
    <div className="loginDesign">
      <div className="iconsContainerTop">
        <Image src="/Icon.png" alt="stethoscope" width={317} height={318} />
      </div>
      <div className="headingContainer">
        <div className="medicos">
          Med
          <div
            style={{
              width: "65px",
              height: "72px",
              margin: "5px -17px 0px -15px",
            }}
          >
            <Image src="/syringes.png" width={65} height={72} />
          </div>
          cos
        </div>
        <div className="medicoseSubtitle">Effortlessly manage your health</div>
      </div>
      <div className="iconsContainerBottom"></div>
    </div>
  );
}
