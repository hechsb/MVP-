import { useEffect, useState } from 'react';
import './App.css';
import videoBg from './assets/videoBg.mp4';
import ListHouse from './components/ListHouse.jsx';
import Search from './components/Search.jsx';
import SignUp from './components/SingUp.jsx';
import SignIn from './components/SignIn.jsx';
import data from './data.json';
import UserPage from './components/UserPage';
import AddHouse from './components/Addhouse';
import axios from 'axios';

function App() {
  const [view, setView] = useState("ListHouse");
  const [loggedName, setLoggedName] = useState("Rent your dream house");
  const [logged,setLogged]=useState(false)
  const[houses,setHouses]=useState(data)
  const [userId,setUserId]=useState(null)
  console.log(view)

  useEffect(() => {
    axios.get("http://localhost:3000/api/home/getAll")
      .then((response) => {
        setHouses([...houses, ...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const setId=(id)=>{
    setUserId(id)
  }
  const namelog = (name) => {
    setLoggedName(name);
  }
  
  const isLog=()=>{
    setLogged(true)
  }

  const changeView = (view) => {
    setView(view);
  }

  const implementData =(oneHouse)=>{
    setHouses([...houses,oneHouse])
  }

  return (
    <>
      <div className="tm-container">
        <div className="tm-row">
          {/* Site Header */}
          <div className="tm-left">
            <div className="tm-left-inner">
              <div className="tm-site-header">
                <i className="fas fa-coffee fa-3x tm-site-logo"></i>
                <h1 className="tm-site-name">{loggedName}</h1>
                <div className="left-buttons">
                 <button className="beautiful-button" onClick={()=>{
                  if(logged===false){
                    changeView("signIn")
                  }else {
                    changeView("Addhouse")
                  }
                 }}>Rent your Home</button>
                  
                   </div>
              </div>
              {((view !== "UserPage") && (view !=="Addhouse"))  && (
                <nav className="tm-site-nav">
                  <ul className="tm-site-nav-ul">
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link ">
                        <i className="fas fa-mug-hot tm-page-link-icon"></i>
                        <button onClick={() => { changeView("ListHouse") }}>Available houses</button>
                      </div>
                    </li>
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link ">
                        <i className="fas fa-users tm-page-link-icon"></i>
                        <button onClick={() => { changeView("Search") }}>Search</button>
                      </div>
                    </li>
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link">
                        <i className="fas fa-glass-martini tm-page-link-icon"></i>
                        <button onClick={() => { changeView("SignUp") }}>Sign Up</button>
                      </div>
                    </li>
                    <li className="tm-page-nav-item">
                      <div className="tm-page-link">
                        <i className="fas fa-comments tm-page-link-icon"></i>
                        <button onClick={() => { changeView("signIn") }}>Sign In</button>
                      </div>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
          <div className="tm-right">
            <main className="tm-main">
              <div id="home" className="tm-page-content">
                {view === "ListHouse" && <ListHouse data={houses} />}
              </div>
              <div id="signUp" className="tm-page-content">
                {view === "SignUp" && <SignUp changeView={changeView} />}
              </div>
              <div id="singnIn" className="tm-page-content">
                {view === "signIn" && <SignIn changeView={changeView} namelog={namelog} isLog={isLog} setId={setId} />}
              </div>
              <div id="search" className="tm-page-content">
                {view === "Search" && <Search />}
              </div>
              <div id="userPage" className="tm-page-content">
                {view === "UserPage" && <UserPage data={houses} changeView={changeView} />}
                {view==="Addhouse" && <AddHouse userId={userId} implementData={implementData} changeView={changeView} />}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
