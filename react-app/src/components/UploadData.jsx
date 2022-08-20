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

    function handleUpload(e) {
        e.preventDefault();
        const data = props.entryData;
        if (data.length < 2) { // UPDATE TO AT LEAST 4 ENTRIES
            alert("Error: Input at least 2 entries");
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
        else if (stroke === "Stroke" || swimEvent === "") {
            alert("Error: Select a stroke");
            return;
        }
        props.setName(name);
        props.setSwimEvent(swimEvent + " " + stroke);
        const localYears = splitYears(props.entryData);
        const localTimes = splitTimes(props.entryData);
        // Axios POST request:
        Axios.post("http://localhost:3001/insert", {
            swimmer: name,
            swimEvent: swimEvent + " " + stroke,
            swimYears: localYears,
            swimTimes: localTimes,
        });
        
    }

    return (
        <form onSubmit={handleUpload}>
            <div className="entry-input">
                <input value={name} onChange={e => setName(e.target.value)} className="textbox-name" type="text" placeholder="name:"></input>
                <select value={swimEvent} onChange={e => setSwimEvent(e.target.value)} className="year-dropdown">
                    <option className="option-small" >Distance</option>
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
                <select value={stroke} onChange={e => setStroke(e.target.value)} className="year-dropdown">
                    <option className="option-small" >Stroke</option>
                    <option className="option-small" value="Free">Free</option>
                    <option className="option-small" value="Back">Back</option>
                    <option className="option-small" value="Breast">Breast</option>
                    <option className="option-small" value="Fly">Fly</option>
                    <option className="option-small" value="IM">IM</option>
                </select>
                <button className="entry-button"> Upload </button>
            </div>
        </form>
    )
}