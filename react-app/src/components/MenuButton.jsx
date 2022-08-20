import './MenuButton.css';

export default function MenuButton(props) {
    return (
        <div className="menu-button">
            <button onClick={props.toggleUpload}>{props.text}</button>
        </div>
    )
}