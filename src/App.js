import React from 'react';
import './App.css';

import  { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home'
import Footer from './components/footer'
import C_info from './components/covid-info'
import Insights from './components/insights';
import Newsfeed from './components/newsfeed';
function App() {
  return (
   
    <div className="App">
      
      <Router>
      <Navbar/>
     <Switch>
     <Route path="/info" component={C_info}/>
      <Route exact path="/" component={Home}/>
      <Route path="/insights" component={Insights}/> 
      <Route path="/newsfeed" component={Newsfeed}/> 
     
     </Switch>
     <Footer/>  
    </Router>
    </div>
   
  );
}

export default App;
