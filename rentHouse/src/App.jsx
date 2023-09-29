import { useState } from 'react'
import './App.css'
import videoBg from './assets/videoBg.mp4'
import ListHouse from './components/ListHouse.jsx'
import Search from './components/Search'
import SignUp from './components/SingUp'
import SignIn from './components/SignIn'
import data from '../data.json'

function App() {

// const [data,setData]=useState(data)
console.log(data)
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
            <h1 className="tm-site-name">Rent your dream house</h1>
          </div>
          <nav className="tm-site-nav">
            <ul className="tm-site-nav-ul">
              <li className="tm-page-nav-item">
                <a href="#home" className="tm-page-link active">
                  <i className="fas fa-mug-hot tm-page-link-icon"></i>
                  <span>Available houses</span>
                </a>
              </li>
              <li className="tm-page-nav-item">
                <a href="#about" className="tm-page-link">
                  <i className="fas fa-users tm-page-link-icon"></i>
                  <span>Search</span>
                </a>
              </li>
              <li className="tm-page-nav-item">
                <a href="#signUp" className="tm-page-link">
                  <i className="fas fa-glass-martini tm-page-link-icon"></i>
                  <span>Sign Up</span>
                </a>
              </li>
              <li className="tm-page-nav-item">
                <a href="#singnIn" className="tm-page-link">
                  <i className="fas fa-comments tm-page-link-icon"></i>
                  <span>sign in </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>        
      </div>
      <div className="tm-right">
        <main className="tm-main">
          <div id="home" className="tm-page-content">
            <ListHouse data={data}/>
           

            {/* <!-- end Drink Menu Page --> */}
          </div>

          {/* <!-- About Us Page --> */}
          <Search />
          {/* <!-- end About Us Page -->

          <!-- Special Items Page --> */}
          <div id="signUp" className="tm-page-content">
            <SignUp />          
          </div>
          {/* <!-- end Special Items Page -->

          <!-- Contact Page --> */}
          <div id="singnIn" className="tm-page-content">
            <SignIn />
          </div>
          {/* <!-- end Contact Page --> */}
        </main>
      </div>    
    </div>
  </div>
  <div class="tm-video-wrapper">
          <video src={videoBg} autoPlay loop muted />
  </div>
  </>
  )
}

export default App
