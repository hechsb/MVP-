import React from "react";

function HouseDetails({ house }) {
  return (
    <div>
      <h2>{house.home_title}</h2>
      <p>Price: {house.home_price}</p>
      <p>Description: {house.home_description}</p>
      <p>phone: {house.home_phone} 25 415 880</p>
      {/* Add more details here */}
    </div>
  );
}
export default HouseDetails;