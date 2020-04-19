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
