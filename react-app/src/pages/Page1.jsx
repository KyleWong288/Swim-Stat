import Accordion from "../components/Accordion";
import "./Page1.css";
import { motion } from "framer-motion";

// Most Popular
export default function Page1() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{opacity: 0}}>
            <div className="body">
                <Accordion/> 
            </div>
        </motion.div>
    )
}