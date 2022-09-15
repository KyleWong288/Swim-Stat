import React from 'react';
import { ReactComponent as RemoveEntryIcon } from '../assets/remove-entry.svg';
import './Entry.css';

export default function Entry(props) {
    const year = props.year;
    const time = props.time;

    function removeEntry(e) {
        e.preventDefault();
        const index = props.index;
        props.setEntryData(prev => prev.filter(element => {
            return element !== props.entryData[index];
        }));
    }

    return (
        <div className="entry">
            <h1>{year}</h1>
            <h1>{time}</h1>
            <div className="remove-button" onClick={removeEntry}>
                <RemoveEntryIcon/>
            </div>
        </div>
    )
}