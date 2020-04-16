import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {formatNumber_dec} from '../etc/common';
import {formatNumber} from '../etc/common';


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

<div class="table-wrap table-sm table-hover ">
<table class="table sticky-top position-sticky" id="insight-data">
  
  <thead class="thead-dark sticky-top position-sticky" id="insight-table-header">
    <tr>
      <th class="sticky-top position-sticky" scope="col">No.</th>
      <th class="sticky-top position-sticky" scope="col">Country</th>
      <th class="sticky-top position-sticky" scope="col">Confirmed</th>
      <th class="sticky-top position-sticky" scope="col">New Confirmed</th>
      <th class="sticky-top position-sticky" scope="col">Recovered</th>
	    <th class="sticky-top position-sticky" scope="col">Critical</th>
      <th class="sticky-top position-sticky" scope="col">Deaths</th>
      <th class="sticky-top position-sticky" scope="col">New death</th>
      <th class="sticky-top position-sticky" scope="col">Death Rate</th>
      <th class="sticky-top position-sticky" scope="col">Recovery Rate</th>
      <th class="sticky-top position-sticky" scope="col">Population</th>
	  
    </tr>
  </thead>

  <tbody>
 
	
			{country.sort((a, b) => a.latest_data.confirmed < b.latest_data.confirmed?1:-1).map((item,index) => (
				<tr>
					  <th scope="row">{index+1}</th>
					  <td>{item.name}</td>
					  <td>{item.latest_data.confirmed}</td>
            <td>{item.today.confirmed}</td>
					  <td>{item.latest_data.recovered}</td>
					  <td>{item.latest_data.critical}</td>
					  <td>{item.latest_data.deaths}</td>
            <td>{item.today.deaths}</td>
            <td>{formatNumber_dec(item.latest_data.calculated.death_rate)}</td>
            <td>{formatNumber_dec(item.latest_data.calculated.recovery_rate)}</td>
            <td>{formatNumber(item.population)}</td>

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
