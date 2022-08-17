import React, {useState} from 'react';
import Entry from './Entry';
import AddData from './AddData';
import UploadData from './UploadData';
import './UploadDisplay.css';

// TODO: Styling for selectable dropdowns

export default function UploadDisplay() {
    const data = [];
    const [entryData, setEntryData] = useState(data);

    return (
        <div className="upload-body">
            <UploadData entryData={entryData}/>
            <AddData entryData={entryData} setEntryData={setEntryData}/>
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