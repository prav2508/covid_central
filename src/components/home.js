import React from 'react'
import Counter from './counter'
import Tables from './tables'
import Charts from './charts'
import Predict from './predict';


function Home() {

        return (
                <div>
                        <div className="container-fluid">
                                <div className="row-fluid p-3">
                                        <div className="col-md">

                                                <Counter />
                                        </div>

                                </div>
                        </div>
                        <div className="container-fluid">
                                <div className="row-fluid p-3">
                                        <div className="col-md">

                                                <Predict />
                                        </div>

                                </div>
                        </div>
                        <div className="container-fluid">
                                <div className="row-fluid p-2">
                                        <div className="col-md">
                                                <Tables />
                                        </div>
                                </div>
                        </div>
                        <div className="container-fluid">
                                <div className="row-fluid p-2">
                                        <div className="col-md">
                                                <Charts />
                                        </div>
                                </div>
                        </div>



                </div>
        );

}


export default Home
