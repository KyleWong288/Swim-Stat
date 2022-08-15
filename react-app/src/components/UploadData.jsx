import React, {useState} from 'react';
import './UploadDisplay.css';

export default function UploadData(props) {
    const [name, setName] = useState("");
    const [swimEvent, setSwimEvent] = useState("");
    const [stroke, setStroke] = useState("");

    function handleUpload(e) {
        e.preventDefault();
        const data = props.entryData;
        if (data.length < 2) {
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
        // TODO: axios post req
        console.log(name);
        console.log(swimEvent);
        
    }

    return (
        <form onSubmit={handleUpload}>
            <div className="entry-input">
                <input value={name} onChange={e => setName(e.target.value)} className="textbox-name" type="text" placeholder="name:"></input>
                <select value={swimEvent} onChange={e => setSwimEvent(e.target.value)} className="year-dropdown">
                    <option>Distance</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="800">800</option>
                    <option value="1000">1000</option>
                    <option value="1500">1500</option>
                    <option value="1650">1650</option>
                </select>
                <select value={stroke} onChange={e => setStroke(e.target.value)} className="year-dropdown">
                    <option>Stroke</option>
                    <option value="Free">Free</option>
                    <option value="Back">Back</option>
                    <option value="Breast">Breast</option>
                    <option value="Fly">Fly</option>
                    <option value="IM">IM</option>
                </select>
                <button className="entry-button"> Upload </button>
            </div>
        </form>
    )
}