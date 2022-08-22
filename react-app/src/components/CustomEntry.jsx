import React, { useState } from 'react';
import UploadDisplay from './UploadDisplay';
import PastEntries from './PastEntries';
import MenuButton from './MenuButton';
import './CustomEntry.css';
import './Accordion.css';
import GoogleChart from './charts/GoogleChart';

// Upload Data: create or updates data
// View All: Reads past database entries
export default function CustomEntry() {
    const [upload, showUpload] = useState(true); // true shows upload, false shows view all
    const [graphName, setGraphName] = useState("");
    const [graphEvent, setGraphEvent] = useState("");
    const [graphYears, setGraphYears] = useState([]);
    const [graphTimes, setGraphTimes] = useState([]);
    const [showGraph, setShowGraph] = useState(false);

    function toggleUpload() {
        showUpload(!upload);
    }

    return (
        <div>
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
                {upload ? <UploadDisplay setGraphName={setGraphName} setGraphEvent={setGraphEvent} 
                    setGraphYears={setGraphYears} setGraphTimes={setGraphTimes} setShowGraph={setShowGraph}/> : 
                    <PastEntries/>
                }
            </div>
            <div className="right-container">
                <h1 className="header">Stats</h1>
                <span> {showGraph === true ? 
                    <div>
                    <GoogleChart
                        years={graphYears}
                        times={graphTimes}
                        name={graphName}
                        event={graphEvent}/>
                    </div> :
                    <div className="no-plot"> (nothing plotted) </div> 
                }
                </span>
            </div>
        </div>
    )
}