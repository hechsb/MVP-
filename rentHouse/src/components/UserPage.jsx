import React, { useState } from "react"


function UserPage(props) {

    
  return (
    <div>
      
                      <nav className="tm-site-nav">
                  <ul className="tm-site-nav-ul">
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link active">
                        <i className="fas fa-mug-hot tm-page-link-icon"></i>
                        <button onClick={() => { props.changeView("ListHouse") }}>Available houses</button>
                      </div>
                    </li>
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link">
                        <i className="fas fa-users tm-page-link-icon"></i>
                        <button onClick={() => { props.changeView("Search") }}>Search</button>
                      </div>
                    </li>
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link">
                        <i className="fas fa-glass-martini tm-page-link-icon"></i>
                        <button onClick={() => { props.changeView("Addhouse") }}>Rent you house</button>
                      </div>
                    </li>
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link">
                        <i className="fas fa-comments tm-page-link-icon"></i>
                        <button onClick={() => { props.changeView("signIn") }}>logged Out</button>
                      </div>
                    </li>
                  </ul>
                </nav>
                
                   
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
