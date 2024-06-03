import Garage from "./Garage";
import React from "react";
//interface to define prop types

interface CarProps {
  name: string;
  model: string;
}

function Car({ carInfo }: CarProps) {
  return (
    <>
      <h1>This car is a {carInfo.model}</h1>
      <p>
        Who lives inside my <Garage size="small" /> garage?
      </p>
    </>
  );
}

export default Car;
