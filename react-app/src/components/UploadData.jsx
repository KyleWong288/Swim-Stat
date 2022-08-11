import React, {useState} from 'react';
import Entry from './Entry';
import './UploadData.css';

function AddData(props) {
    const [year, setYear] = useState();
    const [time, setTime] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        props.setEntryData(prev => prev.concat({year: year, time: time}));
        setYear("");
        setTime("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="entry-input">
                <input value={year} onChange={e => setYear(e.target.value)} className="textbox" type="text" placeholder="year:"/>
                <input value={time} onChange={e => setTime(e.target.value)} className="textbox" type="text" placeholder="time:"/>
                <button className="entry-button">Add</button>
            </div>
        </form>
    )
}

export default function UploadData() {
    const data = [{year: "Year:", time: "Time:"}];
    const [entryData, setEntryData] = useState(data);
    for (let i=0; i<entryData.length; i++) {
        console.log(entryData[i]);
    }

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