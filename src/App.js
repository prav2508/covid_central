import React from 'react';
import './App.css';
import * as Icon from 'react-feather'
import  { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home'
import Footer from './components/footer'
import Charts from './components/charts'
import image from './images/image.png';
import C_info from './components/covid-info'

function App() {
  return (
   
    <div className="App">

     <nav className="navbar navbar-dark bg-dark">
       <span>
       <img className={image} src={image} alt="COVID-19" />
        <a className="navbar-brand" id="cc_brand" href="https://covid-central.now.sh/"><span><b>Covid Central</b></span></a>
        </span>
    </nav>

    <div className="nav-liner">
    </div>
   
            <div className="liner">
            
              <span className="">#Stay_Home , #Stay_Safe</span>
            </div>
           
    <div className="container-fluid">
  <div className="row-fluid p-3">
    <div className="col-md">
    <Counter/>
    </div>
    
  </div>
</div>
<div className="container-fluid">
            <div className="row-fluid p-2">
                          <div className="col-md">
                          <Tables />
                          </div>
                  </div>
          </div>
          <div className="container-fluid">
            <div className="row-fluid p-2">
                          <div className="col-md">
                          <Charts/>
                          </div>
                  </div>
          </div>
		<Footer/>  
    </div>

      
      <Router>
      <Navbar/>
     <Switch>
     <Route path="/info" component={C_info}/>
      <Route exact path="/" component={Home}/>
     
     </Switch>
     <Footer/>  
    </Router>
    </div>

  );
}

export default App;
