import React, { useState, useEffect } from 'react';
import CustomEntry from '../components/CustomEntry';
import GoogleChart from '../components/charts/GoogleChart';
import Axios from 'axios';
import "./Page2.css";
// TODO: Add framer motion once this page is finished

// Custom Entry
export default function Page2() {
    const [swimmer, setSwimmer] = useState("");
    const [swimEvent, setSwimEvent] = useState("");
    const [year, setYear] = useState();
    const [time, setTime] = useState("");
    const [swimYears, setSwimYears] = useState([]);
    const [swimTimes, setSwimTimes] = useState([]);
    const [swimList, setSwimList] = useState([]);

    function addYear() {
        //setYear(prev => prev.concat(parseInt(year)));
        setSwimYears(prev => prev.concat(parseInt(year)));
    }

    function addTime() {
        //setTime(prev => prev.concat(time));
        setSwimTimes(prev => prev.concat(time));
    }

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=> {
            setSwimList(response.data);
        })
    }, [])

    const addToList = () => {
        console.log(swimYears);
        console.log(swimTimes);
        Axios.post("http://localhost:3001/insert", {
            swimmer: swimmer,
            swimEvent: swimEvent,
            swimYears: swimYears,
            swimTimes: swimTimes,
        });
    };

    return (
        <div>
            <CustomEntry/>
            {/* <label>Name</label>
            <input type="text" style={{border: 'solid'}}
                onChange={(event) => {setSwimmer(event.target.value)}} />
            <label>Event</label>
            <input type="text" style={{border: 'solid'}} 
                onChange={(event) => {setSwimEvent(event.target.value)}}/>
            <label>Year</label>
            <input type="text" style={{border: 'solid'}}
                onChange={(event) => {setYear(event.target.value)}}/>
            <label>Time</label>
            <input type="text" style={{border: 'solid'}}
                onChange={(event) => {setTime(event.target.value)}}/>
            <button className='button' onClick={addTime}> Add Time </button>
            <button className='button' onClick={addYear}> Add Year </button>
            <button className='button' onClick={addToList}> Add To List </button>
            <h1> Swim List: </h1>
            {swimList.map((item, index) => {
                return (
                <div> 
                    <h1> {item.swimmer} </h1>
                    <h1> {item.swimEvent} </h1>
                    
                </div>
                )
            })} */}
        </div>
    )
}