import React, {useState} from 'react';
import Axios from 'axios';
import './UploadDisplay.css';

export default function UploadData(props) {
    const [name, setName] = useState("");
    const [swimEvent, setSwimEvent] = useState("");
    const [stroke, setStroke] = useState("");

    function splitYears(data) {
        const res = [];
        for (let i=0; i<data.length; i++) {
            res.push(data[i].year);
        }
        return res;
    }

    function splitTimes(data) {
        const res = [];
        for (let i=0; i<data.length; i++) {
            res.push(data[i].time);
        }
        return res;
    }

    function isDuplicateYears(years) { // pre-sorted array
        for (let i=1; i<years.length; i++) {
            if (years[i] === years[i-1]) {
                return true;
            }
        }
        return false;
    }

    function handleUpload(e) {
        e.preventDefault();
        const data = props.entryData;
        const localYears = splitYears(props.entryData);
        const localTimes = splitTimes(props.entryData);
        if (data.length < 3) { // Maybe make 4?
            alert("Error: Input at least 3 entries");
            return;
        }
        else if (name.length < 1) {
            alert("Error: Enter a name");
            return;
        }
        else if (swimEvent === "Distance" || swimEvent === "") {
            alert("Error: Select a distance");
            return;
        }
        else if (stroke === "Stroke" || stroke === "") {
            alert("Error: Select a stroke");
            return;
        }
        else if (isDuplicateYears(localYears)) { 
            alert("Error: Enter only one time per year");
            return;
        }
        props.setName(name);
        props.setSwimEvent(swimEvent + " " + stroke);
        // Setting data for Google Chart
        props.setGraphName(name);
        props.setGraphEvent(swimEvent + " " + stroke);
        props.setGraphYears(localYears);
        props.setGraphTimes(localTimes);
        // Axios POST request:
        Axios.post("https://swimstat.herokuapp.com/insert", {
            swimmer: name,
            swimEvent: swimEvent + " " + stroke,
            swimYears: localYears,
            swimTimes: localTimes,
        });
        setName("");
        setSwimEvent("Distance");
        setStroke("Stroke");
        props.setEntryData([]);
        props.setShowGraph(true);
    }

    return (
        <div>
            <form onSubmit={handleUpload}>
                <div className="entry-input">
                    <input value={name} onChange={e => setName(e.target.value)} className="textbox-name" type="text" placeholder="name:"></input>
                    <div className="center-720">
                        <select value={swimEvent} onChange={e => setSwimEvent(e.target.value)} className="year-dropdown">
                            <option className="option-small" value="">Distance</option>
                            <option className="option-small" value="50">50</option>
                            <option className="option-small" value="100">100</option>
                            <option className="option-small" value="200">200</option>
                            <option className="option-small" value="400">400</option>
                            <option className="option-small" value="500">500</option>
                            <option className="option-small" value="800">800</option>
                            <option className="option-small" value="1000">1000</option>
                            <option className="option-small" value="1500">1500</option>
                            <option className="option-small" value="1650">1650</option>
                        </select>
                    </div>
                    <div className="center-720">
                        <select value={stroke} onChange={e => setStroke(e.target.value)} className="year-dropdown">
                            <option className="option-small" value="">Stroke</option>
                            <option className="option-small" value="Free">Free</option>
                            <option className="option-small" value="Back">Back</option>
                            <option className="option-small" value="Breast">Breast</option>
                            <option className="option-small" value="Fly">Fly</option>
                            <option className="option-small" value="IM">IM</option>
                        </select>
                    </div>
                    <div className="center-720">
                        <button className="entry-button"> Upload </button>
                    </div>
                </div>
            </form>
        </div>
    )
}