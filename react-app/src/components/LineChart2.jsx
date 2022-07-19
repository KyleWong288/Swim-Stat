import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import {Chart} from "chart.js";

var myLineChart;

export default class LineChart2 extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { times, years } = this.props;
        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: years,
                datasets: [
                    {
                        label: "Times",
                        data: times,
                    }
                ]
            },
            options: {

            }
        });
    }
}
