import React, { useState } from "react";
import HouseDetails from "./HouseDetails";

function ListHouse(props) {
  const [selectedHouse, setSelectedHouse] = useState(null);

  const showDetails = (house) => {
    setSelectedHouse(house);
  };

  const closeDetails = () => {
    setSelectedHouse(null);
  };

  return (
    <div className="tm-list">
      {props.data.map((house, index) => {
        return (
          <div className="tm-list-item" key={index}>
            <img
              src={house.home_images}
              alt="Image"
              className="tm-list-item-img"
              onClick={() => showDetails(house)}
            />
            <div className="tm-black-bg tm-list-item-text">
              <h3 className="tm-list-item-name">
                {house.home_title}
                <span className="tm-list-item-price">{house.home_price}</span>
              </h3>
              <p className="tm-list-item-description">{house.home_description}</p>
            </div>
          </div>
        );
      })}
      {selectedHouse && (
        <div className="tm-list-item-details">
          <HouseDetails house={selectedHouse} />
          <button onClick={closeDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
}

export default ListHouse;
