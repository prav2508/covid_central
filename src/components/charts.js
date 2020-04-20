import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import {Line,Pie,defaults} from 'react-chartjs-2';




  
function Charts(){

    const [globaltimeline,setGlobaltimeline] = useState([]);
    defaults.global.elements.line.fill = false;
    defaults.global.tooltips.intersect = false;
    defaults.global.tooltips.mode = 'nearest';
    defaults.global.tooltips.position = 'average';
    defaults.global.tooltips.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    defaults.global.tooltips.displayColors = false;
    defaults.global.tooltips.borderColor = '#c62828';
    defaults.global.tooltips.borderWidth = 1;
    defaults.global.tooltips.titleFontColor = '#000';
    defaults.global.tooltips.bodyFontColor = '#000';
    defaults.global.tooltips.caretPadding = 4;
    defaults.global.tooltips.intersect = false;
    defaults.global.tooltips.mode = 'nearest';
    defaults.global.tooltips.position = 'nearest';
    defaults.global.legend.display = true;
    defaults.global.legend.position = 'right';
    
  
    defaults.global.hover.intersect = false;
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
            label: 'confirmed',
            fill: false,
            lineTension: 1,
            backgroundColor: '#150f91',
            borderColor: '#150f91',
            borderWidth: 1.5,
            responsive:true,
            data: datax_confirmed.slice(Math.max(datay_confirmed.length - 30, 0))
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 1,
            backgroundColor: '#b6f23f',
            borderColor: '#b6f23f',
            borderWidth: 1.5,
            responsive:true,
            data: datax_recovery.slice(Math.max(datay_confirmed.length - 30, 0))
          },
          {
            label: 'Casuality',
            fill: false,
            lineTension: 1,
            backgroundColor: '#e00013',
            borderColor: '#e00013',
            borderWidth: 1.5,
            data: datax_death.slice(Math.max(datay_confirmed.length - 30, 0))
          }
        ]
      }
      const pie_cases = {
        labels: ["Confirmed","Recovered","Casuality"],
        datasets: [
          {
            label: '',
            fill: true,
            lineTension: 0.3,
            backgroundColor: ['#150f91','#b6f23f','#e00013'],
            //borderColor: 'rgba(176, 25, 25,1)',
            borderWidth: 0.5,
            data: [datax_confirmed[datax_confirmed.length-1],datax_recovery[datax_recovery.length-1],datax_death[datax_death.length-1]]
          },
        ]
      }

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'index',
        },
        legend:{
          display:false
        },
        elements: {
          point: {
            radius: 0.8,
          },
          line: {
            tension: 1,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 70,
          },
        },
        scales: {
          yAxes: [
            {
              type: 'linear',
              ticks: {
                beginAtZero: true,
                max: undefined,
                precision: 0,
              },
              scaleLabel: {
                display: false,
                labelString: 'Total Cases',
              },
            },
          ],
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'day',
                tooltipFormat: 'MMM DD',
                stepSize: 7,
                displayFormats: {
                  millisecond: 'MMM DD',
                  second: 'MMM DD',
                  minute: 'MMM DD',
                  hour: 'MMM DD',
                  day: 'MMM DD',
                  week: 'MMM DD',
                  month: 'MMM DD',
                  quarter: 'MMM DD',
                  year: 'MMM DD',
                },
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
        },
      };
    
      const pie_options = {
        title:{
          responsive: true, 
          maintainAspectRatio: false,
          tooltips: {
            mode: 'index',
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
        display:false,
        text:'Ratio of covid cases',
        fontSize:25,
        
        legend:{
        display:true,
        position:'right',
        }}
      }
      
      return ( 
    <div>

<div className="card">
  <div className="card-header lead">
  <strong className="float-left">Insights</strong>
  </div>

  <div className="card-body">
  <div style={{
          position:"relative",
          height:"300px", 
          width:"100%",
        
          }}>
            <p className="lead" style={{fontSize:"15px"}}>Hover on the points to view coordinates.</p>
        <Line
          data={all_cases}
          options={options}
        />
       </div> 
       <div style={{
      position:"relative",
              height:"100%", 
              width:"100%"
          }}></div>
                    <Pie data={pie_cases} options={pie_options}/>
                    <p className="lead" style={{fontSize:"15px"}}>Click on labels to toggle fields.</p>
           </div>
        </div>
      </div>     
    
              

          
      );
  }

export default Charts
