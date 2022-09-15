import React, { useState, useEffect } from 'react';
import { ReactComponent as CaretDown } from '../assets/caret-down.svg';
import { ReactComponent as CaretUp } from '../assets/caret-up.svg';
import Axios from 'axios';
import './PastEntries.css';

export default function PastEntries(props) {
    // for accordion data
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);

    function toggleClick(index) {
        props.setGraphName(data[index].swimmer);
        props.setGraphEvent(data[index].swimEvent);
        props.setGraphYears(data[index].swimYears);
        props.setGraphTimes(data[index].swimTimes);
        props.setShowGraph(true);
        if (selected === index) {
            setSelected(null);
        }
        else {
            setSelected(index);
        }
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setData(response.data);
        })
    }, []) 

    return (
        <div>
            <div className="scrollable">
                <div className="wrapper">
                    <div className="accordion">
                        {data.map((item,index) => (
                            <div className="item">
                                <div className="title" onClick={() => toggleClick(index)}>
                                    <h1>{item.swimmer + ": " + item.swimEvent}</h1>
                                    <span className="caret">{selected === index ? <CaretUp/> : <CaretDown/>}</span>
                                </div>
                                <div>
                                    {selected === index ? 
                                        <div>
                                            {item.swimYears.map((jtem, jndex) => (
                                                <div className="past-events">
                                                    {item.swimYears.at(jndex)}
                                                    <div className="time-right">{item.swimTimes.at(jndex)}</div>
                                                </div>
                                            ))}
                                        </div> :
                                        <div> {null} </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}