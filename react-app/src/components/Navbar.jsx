import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-title">SwimStat</Link>
            <ul>
                <CustomLink to="/page1">Most Popular</CustomLink>
                <CustomLink to="/page2">Custom Entry</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}