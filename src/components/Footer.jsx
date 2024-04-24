import React from "react";
import { carserra } from "../assets/carserra.png";

function Footer() {
  return (
    <div className="image mt-4">
      <img src="{carserra}" alt="carserra logo" />
      <div className="text-bold">
        <h1>our team</h1>
      </div>
    </div>
  );
}

export default Footer;
