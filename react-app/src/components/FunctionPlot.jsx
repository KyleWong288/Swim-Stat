import React from 'react';
import functionPlot from "function-plot";

// PLAN: Good for plotting actual function
// Issues with rendering and little documentation/resources, using Google Chart for now
// Maybe come back to this if free time

functionPlot({
    target: '#test',
    width: 500,
    height: 400, 
    yAxis: {
        label: 'time',
        domain: [0, 10]
    },
    xAxis: {
        label: 'year',
        domain: [0, 10]
    },
    data: [{
        fn: 'x^2'
    }],
    disableZoom: true,
    grid: true
})

export default function TestPlot() {
    return (
        <div>
            <div id="test"></div>
        </div>
    )
}