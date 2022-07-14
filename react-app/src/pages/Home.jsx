import Accordion from "../components/Accordion";
import Graph from "../components/Graph";
import "./Home.css";

// TODO: Fix main scrollbar, Dynamic view size
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
                    <h1 className="header">Stats</h1>
                    <Graph/>
                    
                </div>
            </div>
        </div>
    )
}