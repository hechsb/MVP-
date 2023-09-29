import React, { useState } from "react"
import axios from 'axios'

function SignUp(props) {
    const[values,setValues]=useState({
        user_name:"",
        user_lastName:"",
        user_phone:"",
        user_password:"",
    })
    const handleSubmit =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3000/api/user/signUp",values)
        .then((response)=>{
            console.log(response.data)
            props.changeView("signIn")
        }).catch((err)=>console.log(err))
    }
    
  return (
    <div>
            <div id="about" className="tm-page-content">
            <div className="tm-black-bg tm-mb-20 tm-about-box-1">              
              <h2 className="tm-text-primary tm-about-header">SignUp and be part of us</h2>
              <div className="tm-black-bg tm-contact-form-container tm-align-right">
              <form  id="contact-form" onSubmit={handleSubmit}>
                <div className="tm-form-group">
                  <input type="text"  onChange={e=>setValues({...values , user_name:e.target.value})} name="name" className="tm-form-control" placeholder="Name" required="" />
                </div>
                <div className="tm-form-group">
                  <input type="LastName" onChange={e=>setValues({...values , user_lastName:e.target.value})} name="LastName" className="tm-form-control" placeholder="LastName" required="" />
                </div>    

                <div className="tm-form-group">
                  <input type="PhoneNumber" onChange={e=>setValues({...values , user_phone:e.target.value})} name="PhoneNumber" className="tm-form-control" placeholder="PhoneNumber" required="" />
                </div>   
                <div className="tm-form-group">
                  <input type="password" onChange={e=>setValues({...values , user_password:e.target.value})} name="password"  className="tm-form-control" placeholder="password" required="" />
                </div>           
                <div>
                  <button type="submit" className="tm-btn-primary tm-align-right">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            </div>
         
          </div>
    </div>
  )
}

export default SignUp
