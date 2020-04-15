import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {formatNumber} from '../etc/common';

function Counter(){

  const [global, setGlobal] = useState([]);
  const [confirmed,setConfirmed] = useState(0);
  const [newconfirmed,setNewconfirmed] = useState(0);
  const [active,setActive] = useState(0);
  const [recovered,setRecovered] = useState(0);
  const [newrecovered,setNewrecovered] = useState(0);
  const [death,setDeath] = useState(0);
  const [newdeath,setNewDeath] = useState(0);
  const [sprev,setSprev]=useState(0);
  const [spres,setSpres]=useState(0);
  const [rprev,setRprev]=useState(0);
  const [rpres,setRpres]=useState(0);
  //const [spreadrate,setSpreadrate] = useState(0);
  //const [recoveryrate,setRecoveryrate] = useState(0);
  useEffect(()=> {
      axios.get('https://corona-api.com/timeline')
            .then(res =>{
              setGlobal(res.data);
              setConfirmed(res.data.data[0].confirmed);
              setNewconfirmed(res.data.data[0].new_confirmed);
              setActive(res.data.data[0].active);
              setRecovered(res.data.data[0].recovered);
              setNewrecovered(res.data.data[0].new_recovered);
              setDeath(res.data.data[0].deaths);
              setNewDeath(res.data.data[0].new_deaths);
              setSprev(res.data.data[1].confirmed);
              setSpres(res.data.data[0].confirmed);
              setRprev(res.data.data[1].recovered);
              setRpres(res.data.data[0].recovered);
            })
            .catch(err =>{
                console.log(err)
            })

  },[global,confirmed,newconfirmed,active,recovered,newrecovered,death,newdeath,sprev,spres,rpres,rprev]);

      return ( 
          <div class="container-fluid p-0">
              
        <div class="row">
          <div class="col-md span4 p-2">
            <h4 class="counter-header lead">CONFIRMED</h4>
           <h2 class="counter-number lead">{formatNumber(confirmed)}</h2> 
           <span>+[{formatNumber(newconfirmed)}]</span>
      </div>

        
        
          <div class="col-md span4 p-2">
          <h4 class="counter-header lead">ACTIVE</h4>
          
          <h2 class="counter-number lead">{formatNumber(active)}</h2>
          
          
        </div>
          <div class="col-md span4 p-2">
        
          <h4 class="counter-header lead">RECOVERED</h4>
          
          <h2 class="counter-number lead">{formatNumber(recovered)}</h2>
          <span>+[{formatNumber(newrecovered)}]</span>

        </div>
          <div class="col-md span4 p-2">
          
          <h4 class="counter-header lead">DEATH</h4>
         
          <h2 class="counter-number lead">{formatNumber(death)}</h2>
          <span>+[{formatNumber(newdeath)}]</span>
          
        </div>
    </div>
    <div class="row">
    <div class="col-md">
    <div class="table-wrap p-0">
<table class="table table-condensed">
  <tbody>
    <tr>
      <th><span class="animate-flicker" style={{color:"red"}}>|</span><span class="master-insight-header">Spread Rate:</span> <span class="master-insight-value">{(((spres-sprev)/sprev)*100).toFixed(2)}%</span></th>
     
      <th><span class="animate-flicker" style={{color:"green"}}>|</span><span class="master-insight-header">Recovery Rate:</span> <span class="master-insight-value">{(((rpres-rprev)/rprev)*100).toFixed(2)}%</span></th>
      
    </tr>
    
  </tbody>
</table>
</div>
</div>
    </div>
    
    </div>
         
          
      );
  }


export default Counter
