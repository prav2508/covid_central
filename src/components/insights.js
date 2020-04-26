import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { formatNumber } from '../etc/common';
import { Polar ,Line, Bar} from 'react-chartjs-2';


function Insights(){
const [test,setTest] = useState(null)

useEffect(()=>{
    setTest("useeffect works!")
})

    return(
        <div>
            Insights
            <br/>
            {test}
        </div>
    );
}

export default Insights