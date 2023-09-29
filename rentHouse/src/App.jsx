import { useState } from 'react'
import './App.css'
import videoBg from './assets/videoBg.mp4'
import ListHouse from './components/ListHouse.jsx'
import Search from './components/Search.jsx'
import SignUp from './components/SingUp.jsx'
import SignIn from './components/SignIn.jsx'
import data from './data.json'

function App() {
const [view,setView]=useState("ListHouse")
const [loggedName,setLoggedName]=useState("Rent your dream house")
// const [data,setData]=useState(data)
console.log(view)
const namelog =(name)=>{
  setLoggedName(name)
}
const changeView =(view)=>{
setView(view)
}
  return (
    <>

    <div className="tm-container">
      
    <div className="tm-row">
      {/* <!-- Site Header --> */}
      <div className="tm-left">
        <div className="tm-left-inner">
          {/* tile of the card */}
          <div className="tm-site-header">
            <i className="fas fa-coffee fa-3x tm-site-logo"></i>
            <h1 className="tm-site-name">{loggedName}</h1>
          </div>
          {/* the navBar */}
          <nav className="tm-site-nav">
            <ul className="tm-site-nav-ul">
              <li className="tm-page-nav-item">
                <div className="tm-page-link active">
                  <i className="fas fa-mug-hot tm-page-link-icon"></i>
                  <button onClick={()=>{changeView("ListHouse")}}>Available houses</button>
                </div>
              </li>
              <li className="tm-page-nav-item">
                
                <div className="tm-page-link">
                <i className="fas fa-users tm-page-link-icon"></i>
                  <button  onClick={()=>{changeView("Search")}}>Search</button>
                
                </div>
            
              </li>
              <li className="tm-page-nav-item">
                <div  className="tm-page-link">
                  <i className="fas fa-glass-martini tm-page-link-icon"></i>
                  <button onClick={()=>{changeView("SignUp")
                 {view==="SignUp" && <SignUp />  } }}>Sign Up</button>
                </div>
              </li>
              <li className="tm-page-nav-item">
                
                <div  className="tm-page-link">
                  <i className="fas fa-comments tm-page-link-icon"></i>
                  <button onClick={()=>{changeView("signIn")}}>sign in </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>        
      </div>
      <div className="tm-right">
        <main className="tm-main">
          <div id="home" className="tm-page-content">
          {view==="ListHouse"&& <ListHouse data={data}/>}
            {/* <!-- end Drink Menu Page --> */}
          </div>

          {/* <!-- About Us Page --> */}
          
          {/* <!-- end About Us Page -->

          <!-- Special Items Page --> */}
          <div id="signUp" className="tm-page-content">
            {view==="SignUp" && <SignUp changeView={changeView} />  }        
          </div>
          {/* <!-- end Special Items Page -->

          <!-- Contact Page --> */}
          <div id="singnIn" className="tm-page-content">
            {view==="signIn" && <SignIn changeView={changeView} namelog={namelog} />}
          </div>

          <div id="singnIn" className="tm-page-content">
          {view==="Search"&& <Search />}
          </div>
          
          
          {/* <!-- end Contact Page --> */}
        </main>
      </div>    
    </div>
  </div>

  </>
  )
}

export default App
