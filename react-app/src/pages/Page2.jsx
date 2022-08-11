import React, { useState, useEffect } from 'react';
import CustomEntry from '../components/CustomEntry';
import Axios from 'axios';
import "./Page2.css";

export default function Page2() {
    const [swimmer, setSwimmer] = useState("");
    const [swimEvent, setSwimEvent] = useState("");
    const [swimList, setSwimList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:3001/read").then((response)=> {
            setSwimList(response.data);
        })
    }, [])

    const addToList = () => {
        Axios.post("http://localhost:3001/insert", {
            swimmer: swimmer,
            swimEvent: swimEvent,
        });
    };

    return (
        <div className="body-page2">
            <CustomEntry/>
            <label>Name</label>
            <input type="text" style={{border: 'solid'}}
                onChange={(event) => {setSwimmer(event.target.value)}} />
            <label>Event</label>
            <input type="text" style={{border: 'solid'}} 
                onChange={(event) => {setSwimEvent(event.target.value)}}/>
            <button onClick={addToList}> Add To List </button>
            <h1> Swim List: </h1>
            {swimList.map((item, index) => {
                return (
                <div> 
                    <h1> {item.swimmer}</h1>
                    <h1> {item.swimEvents} </h1>
                </div>
                )
            })}
        </div>
    )
}