import React from 'react';
import './Graph.css';
import TestGraph from './TestGraphImg.png';

// const testdata = [25.00,23,21,20];
// const years = [2019,2020,2021,2022];

// TODO: Integrate Graph with Line Chart.
// PLAN: Graph should take in props times and years.
// Display the stats and pass times and years to LineChart
export default function Graph({Times, Years}) {
    const times = Times;
    const years = Years;
    return (
        <div>
            <h1 className="times-header">
                Year:
                <div> Time: </div>
            </h1>
            <div>
                {years.map((item,index) => (
                    <div className="times">
                        {years.at(index)}
                        <div>{times.at(index)}</div>
                    </div>
                ))}
            </div>
            <img src={TestGraph} className="graph-image" alt="default graph"/>

        </div>
    )
}