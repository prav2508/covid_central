import React from 'react';
import './App.css';
import Counter from './components/counter'
import Tables from './components/tables'
import Footer from './components/footer'
import Charts from './components/charts'
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
  );
}

export default App;
