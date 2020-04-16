import React from 'react';
import * as Icon from 'react-feather';


function Footer(){

 
      return ( 
        <div>
		<footer class="global-footer">
			<div class="container-fluid">
				<div class="row-fluid">
					<div class="col-sm">
						<span class="float-left">
						<p class="lead p-3">
						An aesthetic yet minimalistic <br/>dashboard for the pandemic Coronavirus.
						</p>
						<span class="lead">
						Open-sourced for the community!
						</span>
						</span>
					</div>
					
					<div class="col-sm">
					<span class="float-right p-3">
							<div>
							<h4 class="lead">Maintained by <small><strong>Praveen</strong></small></h4>
					<a href="https://github.com/prav2508/covid_central"type="button" class="btn btn-light follow-ups" target="_blank"
          rel="noopener noreferrer">
					<Icon.GitHub />
					  <span class="lead"> Open-sourced at GitHub</span>
					  </a><br/><br/>
					  <a href="https://twitter.com/its_autodidact" type="button" class="btn btn-primary follow-ups" target="_blank"
          rel="noopener noreferrer">
					<Icon.Twitter />
					  <span class="lead"> Follow me on Twitter!</span>
					  </a><br/><br/>
					  
					  <a href="https://www.instagram.com/prav_2508/" type="button" class="btn btn-dark follow-ups" target="_blank"
          rel="noopener noreferrer">
					<Icon.Instagram />
					  <span class="lead"> Follow me on Instagram!</span>
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
