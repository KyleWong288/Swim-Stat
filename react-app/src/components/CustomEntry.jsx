import React, { useState } from 'react';
import UploadDisplay from './UploadDisplay';
import PastEntries from './PastEntries';
import MenuButton from './MenuButton';
import './CustomEntry.css';
import './Accordion.css';
import GoogleChart from './charts/GoogleChart';

// Upload Data: create or updates data
// Past Entries: Reads past database entries
export default function CustomEntry() {
    const [upload, showUpload] = useState(true); // true shows upload, false shows past entries
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
            <div className="custom-wrap">
                <div className="custom-main">
                    <div className="left-container">
                        {upload ? 
                            <div className="separate-header">
                                <h1 className="highlight"> Custom Entry</h1> 
                                <div className="menu-up"> <MenuButton toggleUpload={toggleUpload} text={"Past Entries"} setShowGraph={setShowGraph}/> </div>
                            </div> :
                            <div className="separate-header">
                                <div className="menu-up"><MenuButton toggleUpload={toggleUpload} text={"Custom Entry"} setShowGraph={setShowGraph}/> </div>
                                <h1 className="highlight"> Past Entries </h1>
                            </div>
                        }  
                        {upload ? 
                            <UploadDisplay setGraphName={setGraphName} setGraphEvent={setGraphEvent} 
                            setGraphYears={setGraphYears} setGraphTimes={setGraphTimes} setShowGraph={setShowGraph}/> : 
                            <PastEntries setGraphName={setGraphName} setGraphEvent={setGraphEvent} 
                            setGraphYears={setGraphYears} setGraphTimes={setGraphTimes} setShowGraph={setShowGraph} />
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
                                event={graphEvent}
                                displayOld={upload}/>
                            </div> :
                            <div className="no-plot"> (nothing plotted) </div> 
                        }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}