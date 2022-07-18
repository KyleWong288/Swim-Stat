import Accordion from "../components/Accordion";
import Graph from "../components/Graph";
import "./Home.css";

// TODO: Fix main scrollbar, Dynamic view size
export default function Home() {
    return(
        <div className="overflow">
            <div className="body">
                <Accordion/> 
            </div>
        </div>
    )
}