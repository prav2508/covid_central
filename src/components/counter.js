import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {formatNumber,lastUpdated} from '../etc/common';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

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
  const [last_updated,setLast_updated] = useState(0);
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
              setLast_updated(res.data.data[0].updated_at);
            })
            .catch(err =>{
                console.log(err)
            })

  },[global,confirmed,newconfirmed,active,recovered,newrecovered,death,newdeath,sprev,spres,rpres,rprev,last_updated]);

      return ( 
          <div className="container-fluid p-0">
              <div className="row p-0 m-0">
                <div className="col-sm p-0">
                <span className="float-middle">
                <p className="" style={{fontSize:"20px"}}><small>Last updated about </small> <strong>{lastUpdated(last_updated)} hours ago</strong></p>
                </span>
                </div>
                </div> 
       
          
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={2} spacing={5} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="counter-header lead">CONFIRMED</h4>
            </Typography>
           
            <h2 className="counter-number lead">
            <CountUp start={0} end={confirmed} duration={2.75} separator="," />
            </h2>
            
            <Typography color="textSecondary">
            <span>+[{formatNumber(newconfirmed)}]</span>
            </Typography>
           </CardContent>
           </Grid>
           <Grid item xs={12} md={2} spacing={5} component={Card} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="counter-header lead">ACTIVE</h4>
            </Typography>
            <h2 className="counter-number lead">
            <CountUp start={0} end={active} duration={2.75} separator="," />
            </h2>
           </CardContent>
           </Grid>

           <Grid item xs={12} md={2} spacing={10} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="counter-header lead">RECOVERED</h4>
            </Typography>
            <h2 className="counter-number lead">
            <CountUp start={0} end={recovered} duration={2.75} separator="," />
            </h2>
            <Typography color="textSecondary">
             +[{newrecovered}]
            </Typography>
           </CardContent>
           </Grid>

           <Grid item xs={12} md={2} spacing={10} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <h4 className="counter-header lead">DEATH</h4>
            </Typography>
            <h2 className="counter-number lead">
            <CountUp start={0} end={death} duration={2.75} separator="," />
            </h2>
            <Typography color="textSecondary">
            +[{newdeath}]
            </Typography>
           </CardContent>
           </Grid>
           </Grid>
      </div>

        
        
        
    
    <div className="row">
    <div className="col-md">
    <div className="table-wrap p-0">
<table className="table table-condensed">
  <tbody>
    <tr>
      <th><span className="animate-flicker" style={{color:"red"}}>|</span><span className="master-insight-header">Spread Rate:</span> <span className="master-insight-value">{(((spres-sprev)/sprev)*100).toFixed(2)}%</span></th>
     
      <th><span className="animate-flicker" style={{color:"green"}}>|</span><span className="master-insight-header">Recovery Rate:</span> <span className="master-insight-value">{(((rpres-rprev)/rprev)*100).toFixed(2)}%</span></th>
      
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
