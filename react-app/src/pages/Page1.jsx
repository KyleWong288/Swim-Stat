import Accordion from "../components/Accordion";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import { useState } from "react";
import {Data} from '../components/Data';
import "./Page1.css";

const firstSwimmer = Data.at(0);
const times = [80, 70, 60];
const years = [2018, 2019, 2020];

const testTime = new Date(0,0,0,0,3,30,5);
const testTime2 = new Date(0,0,0,0,1,20,3);
const testTime3 = new Date(0,0,0,0,2,30,4);
const dates = [testTime, testTime2, testTime3];
const testTime4 = new Date('07/19/2022 00:01:45.96');
const testTime5 = new Date('07/19/2022 00:00:00.00');
var timedata = ["19:14:03", "19:15:03", "19:16:04"];

// Chart.js playground for now 
export default function Page1() {
    // we need labels and datasets for Chart.js
    const [userData, setUserData] = useState({
        labels: years.map((item, index) => (
            item
        )),
        datasets: [{ 
            // chart styling is done HERE
            label: "Time",
            data: dates.map((item, index) => (
                item.getMinutes() + 1/100 * item.getSeconds()
            )),
            backgroundColor: "rgb(170, 230, 255)",
            borderColor: "rgb(170, 230, 255)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(70, 105, 140)",
            hoverBorderColor: "rgb(70, 105, 140)",
            
        }],
    });

    const opts = {
        maintainAspectRation: false,
        scales: {
            y: [{
                grace: "10%",
            }],
        }
    }

    return (
        <div>
            <div className="line-graph">
            <LineChart chartData={userData} options={opts}/>
            </div>
            <button className="button">Change</button>
        </div>
    )
}