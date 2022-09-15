import React, { useState } from "react";
import { ReactComponent as CaretDown } from '../assets/caret-down.svg';
import { motion } from "framer-motion";
import './LandingPage.css';
import '../PopularPage/Accordion.css';

export default function LandingPage() {

    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div className="titlebg">
                <motion.div
                    initial={{width: "0%", height: 0, opacity: 0}}
                    animate={{width: 360, height: 100, opacity: 1, transition: {duration: 0.5, ease: "easeOut"}}}
                    exit={{opacity: 0}} 
                    className="titlecard" onMouseLeave={() => {setClicked(false)}}>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.7, delay: 0.3}}}>
                        <h1>Welcome to SwimStat!</h1>
                        <CaretDown className="landing-button" onMouseEnter={() => {setClicked(true)}}/>
                        <span>
                            {clicked ?
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}>
                                    <div className="card-body">
                                        <a href="custom" className="card-line">Want to know your future times?</a>
                                        <a href="popular" className="card-line">Want to know the future times of your favorite swimmers?</a>
                                    </div>
                                </motion.div> :
                                <motion.div
                                    initial={{}}
                                    animate={{opacity: 0}}
                                    exit={{}}>
                                    <div className="card-body">
                                        <a href="" className="hidden">Want to know your future times?</a>
                                        <a href="" className="hidden">Want to know the future times of your favorite swimmers?</a>
                                    </div>
                                </motion.div>}
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}