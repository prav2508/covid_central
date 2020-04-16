import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';



  
function Charts(){

    const [globaltimeline,setGlobaltimeline] = useState([]);
    const [c_c,setC_c]= useState([]);

    useEffect(()=>{
        axios.get('https://corona-api.com/timeline')
        .then(res=>{
            setGlobaltimeline(res.data.data.sort((a,b)=>a.date>b.date?1:-1));
            console.log(res.data.data.sort((a,b)=>a.date>b.date?1:-1));
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
        labels: datay_confirmed,
        datasets: [
          {
            label: 'confirmed cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(176, 25, 25,0.5)',
            borderColor: 'rgba(176, 25, 25,1)',
            borderWidth: 2,
            scales: {
                yAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            },
            data: datax_confirmed
          },
          {
            label: 'Recovered cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(4, 138, 33,0.5)',
            borderColor: 'rgba(4, 138, 33,1)',
            borderWidth: 2,
            scales: {
                yAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            },
            data: datax_recovery
          },
          {
            label: 'Death cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(32, 33, 33,1)',
            borderColor: 'rgba(32, 33, 33,1)',
            borderWidth: 2,
            scales: {
                yAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            },
            data: datax_death
          }
        ]
      }
      const confirmed_cases = {
        labels: datay_confirmed,
        datasets: [
          {
            label: 'confirmed cases',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(176, 25, 25,0.5)',
            borderColor: 'rgba(176, 25, 25,1)',
            borderWidth: 2,
            scales: {
                yAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            },
            data: datax_confirmed
          },
        ]
      }
      const recover_cases = {
        labels: datay_recovery,
        datasets: [
          {
            label: 'Recovered cases',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(4, 138, 33,0.5)',
            borderColor: 'rgba(4, 138, 33,1)',
            borderWidth: 2,
            scales: {
                yAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            },
            data: datax_recovery
          }
        ]
      }

      const death_cases = {
        labels: datay_death,
        datasets: [
          {
            label: 'Death cases',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(32, 33, 33,0.5)',
            borderColor: 'rgba(32, 33, 33,1)',
            borderWidth: 2,
            scales: {
                yAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            },
            data: datax_death
          }
        ]
      }
      return ( 
    <div>

<div class="card">
  <div class="card-header lead">
  <strong class="float-left">Insights</strong>
  </div>
  <div class="card-body">
  <div style={{
              width:"100%",
              height:"100%",
          }}>
        <Line
          data={all_cases}
          options={{
            title:{
              display:true,
              text:'Overall Insight',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
       </div> 


            <div style={{
                    width:"100%",
                    height:"100%",
                }}>
                <Line
                data={confirmed_cases}
                options={{
                    title:{
                    display:true,
                    text:'Confirmed cases',
                    fontSize:15
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
            </div>
     

            <div style={{
                    width:"100%",
                    height:"100%",
                }}>
                <Line
                data={recover_cases}
                options={{
                    title:{
                    display:true,
                    text:'Recovered cases',
                    fontSize:15
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
            </div>    

       
                        <div style={{
                                width:"100%",
                                height:"100%",
                            }}>
                            <Line
                            data={death_cases}
                            options={{
                                title:{
                                display:true,
                                text:'Death cases',
                                fontSize:15
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                            />
                        </div> 

                
           
        </div>
      </div>     
      </div>
              

          
      );
  }

export default Charts
