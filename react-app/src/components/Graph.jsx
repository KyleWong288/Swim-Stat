import React from 'react';
import './Graph.css';
import TestGraph from './TestGraphImg.png';

const testdata = [25.00,23,21,20];
const years = [2019,2020,2021,2022];

// TODO: Make css better
export default function Graph() {
    return (
        <div>
            <h1 className="times-header">
                Year:
                <div> Time: </div>
            </h1>
            <div >
                {years.map((item, index) => (
                    <div className="times">
                        {years.at(index)}
                        <div>{testdata.at(index).toFixed(2)}</div>
                    </div>
                ))}
            </div>
            <img src={TestGraph} className="graph-image" alt="default graph"/>

        </div>
    )
}