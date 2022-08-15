import React, {useState} from 'react';
import Entry from './Entry';
import AddData from './AddData';
import UploadData from './UploadData';
import './UploadDisplay.css';

// TODO: Styling for selectable dropdowns

export default function UploadDisplay() {
    const data = [{year: "Year:", time: "Time:"}];
    const [entryData, setEntryData] = useState(data);

    return (
        <div className="upload-body">
            <UploadData entryData={entryData}/>
            <AddData setEntryData={setEntryData}/>
            <div>
                {entryData.map((item,index) => (
                    <Entry year={item.year} time={item.time}/>
                ))}
            </div>
        </div>
    )
}