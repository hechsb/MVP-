import React, { useState } from "react"


function UserPage(props) {

    
  return (
    <div>
                   
    {props.data.map((house,index)=>{
        return(<div className="tm-list-item" key={index}> 
        <img src={house.home_images} alt="Image" className="tm-list-item-img" />
        <div className="tm-black-bg tm-list-item-text">
          <h3 className="tm-list-item-name">house<span className="tm-list-item-price">{house.home_price}</span></h3>
          <p className="tm-list-item-description">{house.home_description}</p>
        </div>

    
      </div>)
    })}    

  
                           
  </div>
           
  )
}

export default UserPage
