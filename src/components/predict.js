import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {formatNumber} from '../etc/common';


function Predict() {
    const d = new Date();
    const min_date = d.getFullYear()+'-'+(("0" + (d.getMonth() + 1)).slice(-2))+'-'+(("0" + (d.getDate() + 1)).slice(-2))

    const [str_date, setStr_date] = useState(min_date)
    const [pred_count, setPred_count] = useState()
    const [curr_min_date, setCurr_min_date] = useState()
    const [curr_max_date, setCurr_max_date] = useState()
  
   

    useEffect(()=>{
        const d = new Date();
        const min_date = d.getFullYear()+'-'+(("0" + (d.getMonth() + 1)).slice(-2))+'-'+(("0" + (d.getDate() + 1)).slice(-2))
        const max_date = d.getFullYear()+'-'+(("0" + (d.getMonth() + 2)).slice(-2))+'-'+(("0" + (d.getDate() + 1)).slice(-2))
        setStr_date(min_date)
        setCurr_min_date(min_date)
        setCurr_max_date(max_date)
    },[]);

    useEffect(() => {
        axios.get('/predict/' + str_date)
            .then(res => {
                //console.log(res.data)
                setPred_count(res.data.total_count)
            }).catch(err => {
                console.log(err)
            })
    });

    return (
       <div className='container'>
           
            <div className="col-md span4 p-2">
            <h4 className="counter-header lead">EXPECTED COUNT</h4>
            <input type="date" id="pred_date" name="pred_date" min={curr_min_date} max={curr_max_date} onChange={event => setStr_date(event.target.value)} defaultValue={curr_min_date}/>
                <h2 className="counter-number lead">{formatNumber(pred_count)}</h2>

                <small>Note:- These are approx predictive model figures.</small>
            </div>
       </div>
    );
}

export default Predict