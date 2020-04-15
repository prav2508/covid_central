import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import Insight from './components/insight'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-dark bg-dark">
       <span>
        <a class="navbar-brand" id="cc_brand" href="https://covid-central.now.sh/"><span><b>Covid Central</b></span></a>
        </span>
    </nav>

    <div class="nav-liner">
    </div>
   
            <div class="liner">
              <span class="">#Stay_Home , #Stay_Safe</span>
            </div>
           
    <div class="container-fluid">
  <div class="row-fluid p-3">
    <div class="col-md">
    <Counter/>
    </div>
    
  </div>
</div>
<div class="container-fluid">
            <div class="row-fluid p-0">
                          <div class="col-md">
                          <Insight/>
                          </div>
                  </div>
          </div>
		  
		<Footer/>  
    </div>
  );
}

export default App;
