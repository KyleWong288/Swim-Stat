import React, {useState} from 'react';
import './UploadDisplay.css';

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

export default function AddData(props) {
    const [year, setYear] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [hundreths, setHundreths] = useState();
    
    // TODO: maybe make utility function for this
    function handleAdd(e) {
        e.preventDefault();
        let m = parseInt(minutes);
        if (minutes === "" || minutes == undefined) {
            m = 0;
        }
        let s = parseInt(seconds);
        if (seconds === "" || seconds == undefined) {
            s = 0;
        }
        let h = parseInt(hundreths);
        if (hundreths === "" || hundreths == undefined) {
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
        else if (isNaN(parseInt(year))) {
            alert("Error: choose a valid year");
            return;
        }
        const time = makeTime(m,s,h);
        // append data and re-sort
        props.setEntryData(prev => prev.concat({year: parseInt(year), time: time}).sort((a, b) => a.year > b.year ? 1 : -1));
        setYear("Year");
        setMinutes("");
        setSeconds(""); 
        setHundreths("");
    }

    return (
        <form onSubmit={handleAdd}>
            <div className="entry-input">
                <select value={year} onChange={e => setYear(e.target.value)} className="year-dropdown">
                    <option className="option-small">Year</option>
                    <option className="option-small" value="2015">2015</option>
                    <option className="option-small" value="2016">2016</option>
                    <option className="option-small" value="2017">2017</option>
                    <option className="option-small" value="2018">2018</option>
                    <option className="option-small" value="2019">2019</option>
                    <option className="option-small" value="2020">2020</option>
                    <option className="option-small" value="2021">2021</option>
                    <option className="option-small" value="2022">2022</option>
                </select>
                <input value={minutes} onChange={e => setMinutes(e.target.value)} className="textbox-small" type="text" placeholder="minutes:"/>
                <input value={seconds} onChange={e => setSeconds(e.target.value)} className="textbox-small" type="text" placeholder="seconds:"/>
                <input value={hundreths} onChange={e => setHundreths(e.target.value)} className="textbox-small" type="text" placeholder="hundreths:"/>
                <button className="entry-button">Add</button>
            </div>
        </form>
    )
}