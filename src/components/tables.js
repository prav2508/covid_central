import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {formatNumber_dec} from '../etc/common';
import {formatNumber} from '../etc/common';
import * as Icon from 'react-feather';


function Tables(){

  const [country,setCountry] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    axios.get('https://corona-api.com/countries')
    .then(res=>{
        setCountry(res.data.data)
      })
    .catch(err=>{
      console.log(err)
    })
  },[]);
  
  const onchange = (e)=>{
  setSearch(e.target.value);
  }

  const filteredCountries = country.sort((a, b) => a.latest_data.confirmed < b.latest_data.confirmed?1:-1).filter(country => {
    return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  
      return ( 

            <div className="card">
                <div className="card-header lead float-left">
                    <strong className="float-left">Affected countries</strong>
                </div>
                <br/>
                 <span>
                 <div className="input-group-prepend float-right p-2">

                    <span className="" id="basic-addon1"> <Icon.Search /></span>
                    <input type="text" className="form-control search-input" id="search-input" placeholder="Search" onChange={onchange}/>
                </div>
                </span>

                <div className="card-body">
                
<div className="table-wrap table-sm table-hover ">
<table className="table sticky-top position-sticky" id="insight-data">
  
  <thead className="thead-dark sticky-top position-sticky" id="insight-table-header">
    <tr>
      <th className="sticky-top position-sticky" scope="col">No.</th>
      <th className="sticky-top position-sticky" scope="col">Country</th>
      <th className="sticky-top position-sticky" scope="col">Confirmed</th>
      <th className="sticky-top position-sticky" scope="col">New Confirmed</th>
      <th className="sticky-top position-sticky" scope="col">Recovered</th>
	    <th className="sticky-top position-sticky" scope="col">Critical</th>
      <th className="sticky-top position-sticky" scope="col">Casualities</th>
      <th className="sticky-top position-sticky" scope="col">New Casualities</th>
      <th className="sticky-top position-sticky" scope="col">Casuality Rate</th>
      <th className="sticky-top position-sticky" scope="col">Recovery Rate</th>
      <th className="sticky-top position-sticky" scope="col">Population</th>
	  
    </tr>
  </thead>

  <tbody>
 
	
			{ filteredCountries.map((item,index) => (
				<tr key={index}>
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
