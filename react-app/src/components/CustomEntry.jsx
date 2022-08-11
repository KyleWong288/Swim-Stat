import React from 'react';
import UploadData from './UploadData';
import './CustomEntry.css';
import './Accordion.css';

// Upload Data: create or updates data
// View Recent: Reads past 10 database entries
// Search: Searches database entries
export default function CustomEntry() {
    return (
        <div className="left-container">
            <h1 className="header"> Custom Entry </h1>
            <UploadData/>
        </div>
    )
}