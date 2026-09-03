import React from "react";
import logo from "../assets/enetrix-logo.png";

export default function EnetrixLogo({ size = 56 }) {
  return (
    <img
      src={logo}
      alt="Enetrix - Energy Treaties Matrix"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
