import Accordion from "../components/Accordion";
import "./Home.css";
import { motion } from "framer-motion";

// TODO: Dynamic view size
// Really scuffed bottom padding, maybe update it
export default function Home() {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}>
            <div className="body">
                
            </div>
        </motion.div>
    )
}