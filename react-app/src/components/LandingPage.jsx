import React, { useState } from "react";
import { ReactComponent as CaretDown } from './caret-down.svg';
import { motion } from "framer-motion";
import './LandingPage.css';

export default function LandingPage() {

    return (
        <div>
            {/* <div className="titlebg">
                <h1 className="titlecard">Welcome to Swimstat!</h1>
                <h1 className="titlecard">
                    Want to know the times you will swim in the future? 
                </h1>
                <h1 className="titlecard">
                    Want to know the future times of your favorite swimmers?
                </h1>
            </div> */}
            <div
                className="titlebg">
                <motion.div
                    initial={{width: "0%", height: "0%"}}
                    animate={{width: "32%", height: "16%", transition: {duration: 0.5, ease: "easeOut"}}}
                    exit={{}} 
                    className="titlecard">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 1}}}>
                        <h1>Welcome to SwimStat!</h1>
                        <CaretDown className="landing-button"/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}