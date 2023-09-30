import React, { useState } from "react"
import axios from "axios"

function SignIn(props) {
  const[values,setValues]=useState({
    user_phone:"",
    user_password:"",
})
const handleSubmit =(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3000/api/user/signIn",values)
    .then((response)=>{
        console.log(response)
        props.setId(response.data["user_id"])
        props.namelog("welcome back ")
        props.changeView("UserPage")
        props.isLog()
    }).catch((err)=>console.log(err))
}

  return (
    <div>
            <div id="about" className="tm-page-content">
            <div className="tm-black-bg tm-mb-20 tm-about-box-1">              
              <h2 className="tm-text-primary tm-about-header">Sign In and rent your home</h2>
              <div className="tm-black-bg tm-contact-form-container tm-align-right">
              <form  id="contact-form" onSubmit={handleSubmit}>
                <div className="tm-form-group">
                  <input type="text" onChange={e=>setValues({...values , user_phone:e.target.value})} name="phone" className="tm-form-control" placeholder="phone" required="" />
                </div>
                <div className="tm-form-group">
                  <input type="password" onChange={e=>setValues({...values , user_password:e.target.value})} name="password" className="tm-form-control" placeholder="password" required="" />
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

export default SignIn
