import React from 'react'
import * as Icon from 'react-feather'
import {Link} from 'react-router-dom'

function Navbar(){

    return(
        <div>

<nav className="navbar navbar-dark bg-dark">
       <span>
        <a className="navbar-brand" id="cc_brand" href="https://covid-central.now.sh/"><span><b>Covid Central</b></span></a>
        </span>
    </nav>

    <div className="nav-liner">
    </div>
   
            <div className="liner">
              <span className="float-middle liner-text">#Stay_Home , #Stay_Safe</span>
              <span className="float-right">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
   <Icon.Menu/>
    </button>
    </span>
            </div>
          
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      
      <Link to="/"> 
          <h4 data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" className="text-white lead">
             Home
              </h4>
    </Link>
    
    <Link to="/insights">
          <h4 data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggleExternalContent" className="text-white lead">
              Insights
              </h4>
    </Link>

    <Link to="/newsfeed">
          <h4 data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggleExternalContent" className="text-white lead">
              News Feed
              </h4>
    </Link>

    <Link to="/info">
          <h4 data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggleExternalContent" className="text-white lead">
              About covid-19
              </h4>
    </Link>
      <br/>
     
      <span className="text-muted" style={{opacity:"0.5"}}>-Confined, But Not Broken</span>
    </div>
      </div>
    



          </div>  
    );

}


export default Navbar
