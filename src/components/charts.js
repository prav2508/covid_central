import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';



  
function Charts(){

    const [globaltimeline,setGlobaltimeline] = useState([]);

    useEffect(()=>{
        axios.get('https://corona-api.com/timeline')
        .then(res=>{
            setGlobaltimeline(res.data.data.sort((a,b)=>a.date>b.date?1:-1));
          })
        .catch(err=>{
          console.log(err)
        })
      },[]);
     
     
     const datax_confirmed=[];
     const datay_confirmed=[];
     const datax_recovery=[];
     const datay_recovery=[];
     const datax_death=[];
     const datay_death=[];

     function createpoint(){
         globaltimeline.forEach(row=>{
             datax_confirmed.push(row.confirmed);
             datay_confirmed.push(row.date);
             datax_recovery.push(row.recovered);
             datay_recovery.push(row.date);
             datax_death.push(row.deaths);
             datay_death.push(row.date);
         })
     }
     createpoint();
    const all_cases = {
        labels: datay_confirmed.slice(Math.max(datay_confirmed.length - 30, 0)),
        datasets: [
          {
            label: 'confirmed cases',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(176, 25, 25,0.5)',
            borderColor: 'rgba(176, 25, 25,1)',
            borderWidth: 0.5,
            responsive:true,
            data: datax_confirmed.slice(Math.max(datay_confirmed.length - 30, 0))
          },
          {
            label: 'Recovered cases',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(4, 138, 33,0.5)',
            borderColor: 'rgba(4, 138, 33,1)',
            borderWidth: 0.5,
            responsive:true,
            data: datax_recovery.slice(Math.max(datay_confirmed.length - 30, 0))
          },
          {
            label: 'Death cases',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(32, 33, 33,1)',
            borderColor: 'rgba(32, 33, 33,1)',
            borderWidth: 0.5,
            responsive:true,
            data: datax_death.slice(Math.max(datay_confirmed.length - 30, 0))
          }
        ]
      }
      const pie_cases = {
        labels: ["confirmed","recovered","death"],
        datasets: [
          {
            label: '',
            fill: true,
            lineTension: 0.3,
            backgroundColor: ['#150f91','#b6f23f','#e00013'],
            //borderColor: 'rgba(176, 25, 25,1)',
            borderWidth: 0.5,
            responsive:true,
            data: [datax_confirmed[datax_confirmed.length-1],datax_recovery[datax_recovery.length-1],datax_death[datax_death.length-1]]
          },
        ]
      }

      return ( 
    <div>

<div class="card">
  <div class="card-header lead">
  <strong class="float-left">Insights</strong>
  </div>
  <p class="card-text">Hover on the points to view coordinates.</p>
  <div class="card-body">
  <div style={{
      position:"relative",
              height:"100%", 
              width:"100%"
          }}>
        <Line
          data={all_cases}
          options={{
            title:{
              display:true,
              text:'Overall Insight',
              fontSize:25
            },
            legend:{
              display:false,
              position:'bottom'
            }
          }}
        />
       </div> 
       <div style={{
      position:"relative",
              height:"100%", 
              width:"100%"
          }}></div>
                    <Pie data={pie_cases} options={{
                                title:{
                                display:true,
                                text:'Ratio of covid cases',
                                fontSize:25
                                },
                                legend:{
                                display:true,
                                position:'bottom',
                                
                        
                                }
                            }}/>
                            Click on labels to enable/disable field.
           </div>
        </div>
      </div>     
    
              

          
      );
  }

export default Charts
