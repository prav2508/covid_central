import React from 'react'
import * as Icon from 'react-feather'
import {Link} from 'react-router-dom'

function Navbar(){
   const menu_divider_style={
        width:"50px",
        height:"5px",
        color:"grey"

    }
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
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
   <Icon.Menu/>
    </button>
    </span>
            </div>
          
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      
      <Link to="/"> 
          <h4 data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" class="text-white lead">
             Home
              </h4>
    </Link>
    
      <Link to="/info">
          <h4 data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggleExternalContent" class="text-white lead">
              About covid-19
              </h4>
    </Link>
      <br/>
     
      <span class="text-muted" style={{opacity:"0.5"}}>-Confined, But Not Broken</span>
    </div>
      </div>
    



          </div>  
    );

}


export default Navbar
