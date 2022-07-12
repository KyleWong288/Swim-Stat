import Accordion from "../components/Accordion";
import Graph from "../components/Graph";
import "./Home.css";

export default function Home() {
    return(
        <div className="overflow">
            <div className="body">
                <div className="left-container">
                    <h1 className="header">Most Popular</h1>
                    <div className="scrollable">
                        <Accordion/>
                    </div>
                </div>
                <div className="right-container">
                    <Graph/>
                </div>
            </div>
        </div>
    )
}