import LandingPage from "../components/LandingPage/LandingPage";
import "./Home.css";

// TODO: Dynamic view size
// Really scuffed bottom padding, maybe update it
export default function Home() {
    return(
        <div>
            <div className="body-home">
                <LandingPage/>
            </div>
        </div>
    )
}