import React, { useState, useEffect } from 'react';
import CustomEntry from '../components/CustomEntry';
import { motion } from "framer-motion";
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
            <div className="body-page2">
                <CustomEntry/>
            </div>
        </div>
    )
}