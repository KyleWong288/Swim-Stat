import Accordion from "../components/Accordion";
import "./Page1.css";
import { motion } from "framer-motion";

// Most Popular
export default function Page1() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.5}}}
            exit={{opacity: 0}}>
            <div className="body">
                <Accordion/> 
            </div>
        </motion.div>
    )
}