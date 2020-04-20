import React from 'react';
import './App.css';
import * as Icon from 'react-feather'
import  { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home'
import Footer from './components/footer'
import C_info from './components/covid-info'

function App() {
  return (
   
    <div className="App">

     <nav className="navbar navbar-dark bg-dark">
       <span>
        <a className="navbar-brand" id="cc_brand" href="https://covid-central.now.sh/"><span><b>Covid Central</b></span></a>
        </span>
    </nav>

    <div className="nav-liner">
    </div>
   
           
            <Router>
      <Navbar/>
     <Switch>
     <Route path="/info" component={C_info}/>
      <Route exact path="/" component={Home}/>
     
     </Switch>
     <Footer/>  
    </Router>
		<Footer/>  
    </div>

      
     
   

  );
}

export default App;
