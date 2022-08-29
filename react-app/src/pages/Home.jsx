import Accordion from "../components/Accordion";
import LandingPage from "../components/LandingPage";
import "./Home.css";
import { motion } from "framer-motion";

// TODO: Dynamic view size
// Really scuffed bottom padding, maybe update it
export default function Home() {
    return(
        <div>
            <div className="body-home">
                <LandingPage/>
            </div>
        </div>
    )
}