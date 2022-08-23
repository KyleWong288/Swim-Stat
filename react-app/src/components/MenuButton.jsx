import './MenuButton.css';

export default function MenuButton(props) {

    function menuClick() {
        props.toggleUpload();
        props.setShowGraph(false);
    }

    return (
        <div className="menu-button">
            <button onClick={menuClick}>{props.text}</button>
        </div>
    )
}