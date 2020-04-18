import React from 'react';
import * as Icon from 'react-feather';


function Footer(){

 
      return ( 
        <div>
		<footer className="global-footer">
			<div className="container-fluid">
				<div className="row-fluid">
					<div className="col-sm">
						<span className="float-left">
						<p className="lead p-3">
						An aesthetic yet minimalistic <br/>dashboard for the pandemic Coronavirus.
						</p>
						<span className="lead">
						Open-sourced for the community!
						</span>
						</span>
					</div>
					
					<div className="col-sm">
					<span className="float-right p-3">
							<div>
							<h4 className="lead">Maintained by <small><strong>Praveen</strong></small></h4>
					<a href="https://github.com/prav2508/covid_central"type="button" className="btn btn-light follow-ups" target="_blank"
          rel="noopener noreferrer">
					<Icon.GitHub />
					  <span className="lead"> Open-sourced at GitHub</span>
					  </a><br/><br/>
					  <a href="https://twitter.com/its_autodidact" type="button" className="btn btn-primary follow-ups" target="_blank"
          rel="noopener noreferrer">
					<Icon.Twitter />
					  <span className="lead"> Follow me on Twitter!</span>
					  </a><br/><br/>
					  
					  <a href="https://www.instagram.com/prav_2508/" type="button" className="btn btn-dark follow-ups" target="_blank"
          rel="noopener noreferrer">
					<Icon.Instagram />
					  <span className="lead"> Follow me on Instagram!</span>
					  </a>
					 
			</div>
			</span>
					</div>
				</div>
			</div>
		</footer>	
			</div>
		);
  }

export default Footer
