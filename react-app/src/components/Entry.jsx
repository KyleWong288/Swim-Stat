import React from 'react';
import './Entry.css';

export default function Entry(props) {
    const year = props.year;
    const time = props.time;
    return (
        <div className="entry">
            <h1>{year}</h1>
            <h1>{time}</h1>
        </div>
    )
}