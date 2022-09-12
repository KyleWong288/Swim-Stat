import React, { useState, useEffect } from 'react';
import CustomEntry from '../components/CustomEntry';
import { motion } from "framer-motion";
import Axios from 'axios';
import "./Page2.css";
// TODO: Add framer motion once this page is finished

// Custom Entry
export default function Page2() {
    return (
        <div>
            <div className="body-page2">
                <CustomEntry/>
            </div>
        </div>
    )
}