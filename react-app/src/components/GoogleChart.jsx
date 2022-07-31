import React from 'react';
import { Chart } from "react-google-charts";

// CONSENSUS: Better than Chart.js, smooth lines appeal to my smooth brain
// TODO: Time axis, take in data and options as parameters, make functional at same level as Chart.js
const data = [
    ["Year", "Time"],
    [2018, 22.00],
    [2019, 22.00],
    [2020, 19.00],
    [2021, 18.00]
]

const options = {
    title: "Test Graph",
    curveType: 'function',
}

export default function GoogleChart() {
    return (
        <Chart
            chartType="LineChart"
            data={ data }
            options={ options }
            width="100%"
            height="300px"
        />
    )
}

