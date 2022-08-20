import React, { useState } from 'react';
import UploadDisplay from './UploadDisplay';
import MenuButton from './MenuButton';
import './CustomEntry.css';
import './Accordion.css';

// Upload Data: create or updates data
// View All: Reads past database entries
export default function CustomEntry() {
    const [upload, showUpload] = useState(true); // true shows upload, false shows view all

    function toggleUpload() {
        showUpload(!upload);
    }

    return (
        <div className="left-container">
            {upload ? 
                <div className="separate-header">
                    <h1 className="highlight"> Custom Entry</h1> 
                    <div className="menu-up"> <MenuButton toggleUpload={toggleUpload} text={"Past Entries"}/> </div>
                </div> :
                <div className="separate-header">
                    <div className="menu-up"><MenuButton toggleUpload={toggleUpload} text={"Custom Entry"}/> </div>
                    <h1 className="highlight"> Past Entries </h1>
                </div>
            }  
            {upload ? <UploadDisplay/> : null}
        </div>
    )
}