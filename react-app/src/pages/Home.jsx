import Accordion from "../components/Accordion";
import "./Home.css";

export default function Home() {
    return(
        <div>
            <div className="left-container">
                <div className="scrollable">
                    <Accordion/>
                </div>
            </div>
        </div>
    )
}