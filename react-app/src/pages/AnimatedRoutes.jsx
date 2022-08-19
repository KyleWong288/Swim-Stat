import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'; // bugged?

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/popular" element={<Page1/>} />
                <Route path="/custom" element={<Page2/>} />
            </Routes>
        </AnimatePresence>
    )
}