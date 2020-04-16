import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Tables(){

  const [country,setCountry] = useState([]);

  useEffect(()=>{
    axios.get('https://corona-api.com/countries')
    .then(res=>{
        setCountry(res.data.data)
      })
    .catch(err=>{
      console.log(err)
    })
  },[]);
  
  
      return ( 

            <div class="card">
                <div class="card-header lead float-left">
                    <strong class="float-left">Affected countries</strong>
                </div>
                <div class="card-body">

<div class="table-wrap table-sm table-hover">
<table class="table" id="insight-data">
  <thead class="thead-dark position-sticky" id="insight-table-header">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Country</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
	  <th scope="col">Critical</th>
      <th scope="col">Deaths</th>
	  
    </tr>
  </thead>
  <tbody>
 
	
			{country.sort((a, b) => a.latest_data.confirmed < b.latest_data.confirmed?1:-1).map((item,index) => (
				<tr>
					  <th scope="row">{index+1}</th>
					  <td>{item.name}</td>
					  <td>{item.latest_data.confirmed}</td>
					  <td>{item.latest_data.recovered}</td>
					  <td>{item.latest_data.critical}</td>
					  <td>{item.latest_data.deaths}</td>
				</tr>
					))}
	
	
	
	
	
  </tbody>
</table>
</div>
                </div>
                </div>


         
          
      );
  }

export default Tables
