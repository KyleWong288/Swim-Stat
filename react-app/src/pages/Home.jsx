import Accordion from "../components/Accordion";
import LandingPage from "../components/LandingPage";
import "./Home.css";
import { motion } from "framer-motion";

// TODO: Dynamic view size
// Really scuffed bottom padding, maybe update it
export default function Home() {
    return(
        <div>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.5}}}
            exit={{opacity: 0}}>
            <div className="body-home">
                <LandingPage/>
            </div>
        </motion.div>
        </div>
    )
}