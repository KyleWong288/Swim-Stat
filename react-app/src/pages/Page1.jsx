import Accordion from "../components/Accordion";
import LineChart from "../components/LineChart";
import { useState } from "react";
import {Data} from '../components/Data';
import "./Page1.css";

const firstSwimmer = Data.at(0);

// Chart.js playground for now 
export default function Page1() {
    // we need labels and datasets for Chart.js
    const [userData, setUserData] = useState({
        labels: firstSwimmer.Years.at(1).map((item, index) => (
            item
        )),
        datasets: [{ 
            // chart styling is done HERE
            label: "Time:",
            data: firstSwimmer.Times.at(1).map((item, index) => (
                item
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
            y: {
                grace: "10%"
            }
        }
    }

    return (
        <div>
            <div className="line-graph">
            <LineChart chartData={userData} options={opts}/>
            </div>
        </div>
    )
}