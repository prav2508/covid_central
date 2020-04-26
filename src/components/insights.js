import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { formatNumber } from '../etc/common';
import { Polar ,Line, Bar} from 'react-chartjs-2';

function Insights() {

    const [global_country, setGlobal_country] = useState([])
    const [c_conf, setC_conf] = useState([0])
    const [c_act, setC_act] = useState([0])
    const [c_recv, setC_recv] = useState([0])
    const [c_death, setC_death] = useState([0])
    const datax_confirmed=[];
    const datay_confirmed=[];
    const datax_recovery=[];
    const datay_recovery=[];
    const datax_death=[];
    const datay_death=[];
    const datax_active=[];
    const datay_active=[];
    const [timeline, setTimeline] = useState([0])


    useEffect(() => {
         axios.get('https://corona-api.com/timeline')
            .then(res => {
                setC_conf(res.data.data[0].confirmed)
                setC_act(res.data.data[0].active)
                setC_recv(res.data.data[0].recovered)
                setC_death(res.data.data[0].deaths)
                setTimeline(res.data.data.sort((a,b)=>a.date>b.date?1:-1))
            }).catch(err => {
                console.log(err)
            })
        axios.get('https://corona-api.com/countries')
            .then(res => {
               setGlobal_country(res.data.data)
               console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    },[]);

    const change = (e) => {
        if (e.target.value === "global") {
            axios.get('https://corona-api.com/timeline')
                .then(res => {
                    setC_conf(res.data.data[0].confirmed)
                    setC_act(res.data.data[0].active)
                    setC_recv(res.data.data[0].recovered)
                    setC_death(res.data.data[0].deaths)
                    setTimeline(res.data.data.sort((a,b)=>a.date>b.date?1:-1))
                }).catch(err => {
                    console.log(err)
                })
        } else {
            axios.get('https://corona-api.com/countries/' + e.target.value)
                .then(res => {

                    setC_conf(res.data.data.timeline[0].confirmed)
                    setC_act(res.data.data.timeline[0].active)
                    setC_recv(res.data.data.timeline[0].recovered)
                    setC_death(res.data.data.timeline[0].deaths)
                    setTimeline(res.data.data.timeline.sort((a,b)=>a.date>b.date?1:-1))
                }).catch(err => {
                    console.log(err)
                })
        }
    }
    function createpoint(){
        timeline.forEach(row=>{
            datax_confirmed.push(row.confirmed);
            datay_confirmed.push(row.date);
            datax_recovery.push(row.recovered);
            datay_recovery.push(row.date);
            datax_death.push(row.deaths);
            datay_death.push(row.date);
            datax_active.push(row.active);
            datay_active.push(row.date);
        })
    }
    createpoint();
    const polar_cases = {
        labels: ["Confirmed","Active","Recovered","Casuality"],
        datasets: [
          {
            label: '',
            fill: true,
            lineTension: 0.3,
            backgroundColor: ['rgba(245, 241, 22,0.6)','rgba(21, 15, 145,0.8)','rgba(182, 242, 63,0.8)','rgba(224, 0, 19,0.8)'],
            //borderColor: 'rgba(224, 0, 19,0.8)',
            borderWidth: 0.5,
            data: [c_conf,c_act,c_recv,c_death]
          },
        ]
      }
    const polar_options = {
        responsive: true,
        maintainAspectRatio: true,
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
            bottom: 0,
          },
        },
        legend:{
            display:true,
            position:'right',
            }
      };
      const all_cases = {
        labels: datay_confirmed.slice(Math.max(datay_confirmed.length - 30, 0)),
        datasets: [
          {
            label: 'Confirmed',
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

      const bar_view = {
        labels: datay_confirmed.slice(Math.max(datay_confirmed.length - 30, 0)),
        datasets: [
          {
            label: 'Casuality',
            fill: false,
            lineTension: 1,
            backgroundColor: 'rgba(224, 0, 19,0.4)',
            borderColor: '#e00013',
            borderWidth: 1.5,
            data: datax_death.slice(Math.max(datay_confirmed.length - 30, 0))
          }
        ]
      }
      const active_cases = {
        labels: datay_active.slice(Math.max(datay_active.length - 30, 0)),
        datasets: [
          {
            label: 'Active',
            fill: false,
            lineTension: 1,
            backgroundColor: '#fc9403',
            borderColor: '#fc9403',
            borderWidth: 1.5,
            responsive:true,
            data: datax_active.slice(Math.max(datay_active.length - 30, 0))
          },
          
        ]
      }

      const options = {
        responsive: true,
        maintainAspectRatio: true,
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
            bottom:0,
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
    
    return (
        <div className="container-fluid p-0">
            <h1 className="display-3">Insights</h1>
            <select className="custom-select custom-select-lg mb-3" onChange={change} style={{ width: "350px" }}>
                <option value="global">Global</option>
                {global_country.sort((a, b) => a.name > b.name?1:-1).map((item,i) => {
                    if (item.latest_data.confirmed > 0) {
                        return <option key={i} value={item.code}>{item.name}</option>
                    }
                })}
            </select>

            <div className="row">

                <div className="col-md span4 p-2">
                    <h4 className="counter-header lead">CONFIRMED</h4>
                    <h2 className="counter-number lead">{formatNumber(c_conf)}</h2>
                </div>


                <div className="col-md span4 p-2">
                    <h4 className="counter-header lead">ACTIVE</h4>

                    <h2 className="counter-number lead">{formatNumber(c_act)}</h2>


                </div>
                <div className="col-md span4 p-2">

                    <h4 className="counter-header lead">RECOVERED</h4>

                    <h2 className="counter-number lead">{formatNumber(c_recv)}</h2>

                </div>
                <div className="col-md span4 p-2">

                    <h4 className="counter-header lead">CASUALITIES</h4>

                    <h2 className="counter-number lead">{formatNumber(c_death)}</h2>


                </div>
            </div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm p-2">
                       <div className="card">
                           <div className="card-body">
                           <Polar data={polar_cases} options={polar_options}/>
                        <h2 className="lead">Polar view</h2>
                        <small className="text-muted">Ratio of Confirmed, Active, Recovered and Casuality</small>
                           </div>
                       
                       </div>
                        
                    </div>
                    <div className="col-sm p-2">
                    <div className="card">
                           <div className="card-body">
                         <Line data={all_cases} options={options}/>
                        <h2 className="lead">Line view</h2>
                        <small className="text-muted">Comparison of Confirmed, Recovered and Casuality</small>
                           </div>
                       
                       </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-sm p-2">
                       <div className="card">
                           <div className="card-body">
                           <Line data={active_cases} options={options}/>
                        <h2 className="lead">Active cases</h2>
                        <small className="text-muted">Goal is to flatten and bend this curve</small>
                           </div>
                       
                       </div>
                        
                    </div>
                    <div className="col-sm p-2">
                    <div className="card">
                           <div className="card-body">
                         <Bar data={bar_view} options={options}/>
                        <h2 className="lead">Bar view</h2>
                        <small className="text-muted">Casuality count</small>
                           
                           </div>
                       
                       </div>
                    </div>
                    
                </div>
                </div>

        </div>

    );
}

export default Insights