import React, {useState} from 'react';
import Entry from './Entry';
import AddData from './AddData';
import UploadData from './UploadData';
import './UploadDisplay.css';

// TODO: Styling for selectable dropdowns

export default function UploadDisplay() {
    const [name, setName] = useState([]); 
    const [swimEvent, setSwimEvent] = useState([]);
    const [entryData, setEntryData] = useState([]); // stores an array of objects containing {year, time}

    return (
        <div className="upload-body">
            <UploadData entryData={entryData} setName={setName} setSwimEvent={setSwimEvent}/>
            <AddData setEntryData={setEntryData}/>
            <div>
                <div className="entry">
                    <h1>Year:</h1>
                    <h1 className="entry-time-title">Time:</h1>
                </div>
                {entryData.map((item,index) => (
                    <Entry year={item.year} time={item.time} index={index} entryData={entryData} setEntryData={setEntryData}/>
                ))}
            </div>
        </div>
    )
}