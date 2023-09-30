import React, { useState } from "react"
import axios from "axios"

function AddHouse(props) {

   
        const[values,setValues]=useState({
            home_description:"",
            home_price:"",
            home_images:"",
            home_title:""

      })

      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:3000/api/home/addHome/${props.userId}`,values)
        .then((response)=>{
            console.log(response)
            // props.implementData(response.data)
        }).catch((err)=>{
            console.log(err)
        })

        
      }

  return (
    <div>
            <div id="about" className="tm-page-content">
            <div className="tm-black-bg tm-mb-20 tm-about-box-1">              
              <h2 className="tm-text-primary tm-about-header">Please provide informations</h2>
              <div className="tm-black-bg tm-contact-form-container tm-align-right">
              <form  id="contact-form" onSubmit={handleSubmit}>
                <div className="tm-form-group">
                  <input type="text" onChange={e=>setValues({...values , home_title:e.target.value})} name="title" className="tm-form-control" placeholder="title" required="" />
                </div>
                <div className="tm-form-group">
                  <input type="text" onChange={e=>setValues({...values , home_price:e.target.value})} name="price" className="tm-form-control" placeholder="price" required="" />
                </div>        
                <div className="tm-form-group">
                  <input type="text" onChange={e=>setValues({...values , home_description:e.target.value})} name="description" className="tm-form-control" placeholder="description" required="" />
                </div> 
                <div className="tm-form-group">
                  <input type="text" onChange={e=>setValues({...values , home_images:e.target.value})} name="imageUrl" className="tm-form-control" placeholder="imageUrl" required="" />
                </div>
                    
                <div>
                  <button type="submit" className="tm-btn-primary tm-align-right">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            </div>
         
          </div>
    </div>
  )
}

export default AddHouse
