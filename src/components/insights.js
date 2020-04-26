import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { formatNumber } from '../etc/common';
import { Polar ,Line, Bar} from 'react-chartjs-2';


function Insights(){
const [global_country, setGlobal_country] = useState([])

useEffect(()=>{
     axios.get('/countries')
    .then(res => {
       setGlobal_country(res.data.data)
       console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
},[])

    return(
        <div>
            Insights
            <br/>
            <select className="custom-select custom-select-lg mb-3"  style={{ width: "350px" }}>
                <option value="global">Global</option>
                {global_country.map(item => {
                    if (item.latest_data.confirmed > 0) {
                        return <option value={item.code}>{item.name}</option>
                    }
                })}
            </select>
        </div>
    );
}

export default Insights