import Accordion from "../components/Accordion";
import LineChart from "../components/LineChart";
import { useState } from "react";
import {UserData} from '../components/TestData';

// Chart.js playground for now 
export default function Page1() {
    // we need labels and datasets for Chart.js
    // TODO: make data a passable prop SKULL
    /*
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{ 
            // chart styling is done HERE
            label: "Time:",
            data: UserData.map((data) => data.time),
            backgroundColor: "rgb(170, 230, 255)",
            borderColor: "rgb(170, 230, 255)",
            borderWidth: 3,
            hoverBackgroundColor: "rgb(70, 105, 140)",
            hoverBorderColor: "rgb(70, 105, 140)",
            
        }],
    })
    */
    
    return (
        <div>
            <LineChart data={UserData}/>
        </div>
    )
}