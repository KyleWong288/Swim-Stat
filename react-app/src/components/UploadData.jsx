import React, {useState} from 'react';
import Entry from './Entry';
import './UploadData.css';

// TODO: Styling for selectable dropdowns

function isValidTime(minutes, seconds, hundreths) {
    if (isNaN(minutes) || isNaN(seconds) || isNaN(hundreths)) {
        return false;
    }
    return true;
}

// Input: integers, Output: formatted string
function makeTime(minutes, seconds, hundreths) {
    let res = "";
    if (minutes !== 0) {
        res += minutes.toString() + ":";
    }
    if (seconds < 10 && minutes > 0) {
        res += "0";
    }
    res += seconds.toString() + ".";
    if (hundreths < 10) {
        res += "0";
    }
    res += hundreths.toString();
    return res;
}

function AddData(props) {
    const [year, setYear] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [hundreths, setHundreths] = useState();

    // TODO: for the love of god make this a separate utility function
    function handleSubmit(e) {
        e.preventDefault();
        let m = parseInt(minutes);
        if (minutes === "") {
            m = 0;
        }
        let s = parseInt(seconds);
        if (seconds === "") {
            s = 0;
        }
        let h = parseInt(hundreths);
        if (hundreths === "") {
            h = 0;
        }
        if (!isValidTime(m, s, h)) {
            alert("Error: invalid entry");
            return;
        }
        else if (m < 0 || m > 59) {
            alert("Error: minutes must be between 0 and 59");
            return;
        }
        else if (s < 0 || s > 59) {
            alert("Error: seconds must be between 0 and 59");
            return;
        }
        else if (h < 0 || h > 99) {
            alert("Error: hundreths must be between 0 and 99");
            return;
        }
        const time = makeTime(m,s,h);
        props.setEntryData(prev => prev.concat({year: parseInt(year), time: time}));
        setYear("Year");
        setMinutes("");
        setSeconds("");
        setHundreths("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="entry-input">
                <select value={year} onChange={e => setYear(e.target.value)} className="year-dropdown">
                    <option>Year</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
                <input value={minutes} onChange={e => setMinutes(e.target.value)} className="textbox-small" type="text" placeholder="minutes:"/>
                <input value={seconds} onChange={e => setSeconds(e.target.value)} className="textbox-small" type="text" placeholder="seconds:"/>
                <input value={hundreths} onChange={e => setHundreths(e.target.value)} className="textbox-small" type="text" placeholder="hundreths:"/>
                <button className="entry-button">Add</button>
            </div>
        </form>
    )
}

export default function UploadData() {
    const data = [{year: "Year:", time: "Time:"}];
    const [entryData, setEntryData] = useState(data);
    // for (let i=0; i<entryData.length; i++) {
    //     console.log(entryData[i]);
    // }

    return (
        <div className="upload-body">
            <div className="entry-input">
                <input className="textbox-name" type="text" placeholder="name:"></input>
                <input className="textbox-name" type="text" placeholder="event:"></input>
                <button className="entry-button"> Upload </button>
            </div>
            <AddData setEntryData={setEntryData}/>
            <div>
                {entryData.map((item,index) => (
                    <Entry year={item.year} time={item.time}/>
                ))}
            </div>
        </div>
    )
}