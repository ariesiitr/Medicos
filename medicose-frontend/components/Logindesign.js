import React from "react";
import Image from "next/image";

export default function Logindesign() {
  return (
    <div className="loginDesign">
      <div className="iconsContainerTop">
        <Image
          src="/stethoscope.png"
          alt="stethoscope"
          width={196}
          height={269}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src="/needle.png"
            alt="needle icon"
            width={220}
            height={102}
            style={{
              marginLeft: "-8rem",
            }}
          />
          <Image
            src="/capsules.png"
            alt="capsules icon"
            width={127}
            height={140}
          />
        </div>
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
