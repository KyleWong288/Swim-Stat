import Accordion from "../components/Accordion";
import Graph from "../components/Graph";
import "./Home.css";

// TODO: Dynamic view size, FIX scrollbar
// Really scuffed bottom padding, maybe update it
export default function Home() {
    return(
        <div className="overflow">
            <div className="bottom">
                <div className="body">
                <Accordion/> 
                </div>
            </div>
        </div>
    )
}