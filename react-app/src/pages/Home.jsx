import Accordion from "../components/Accordion";
import Graph from "../components/Graph";
import "./Home.css";

export default function Home() {
    return(
        <div>
            <div className="left-container">
                <div className="scrollable">
                    <Accordion/>
                </div>
            </div>
            <div className="right-container">
                <Graph/>
            </div>
        </div>
    )
}