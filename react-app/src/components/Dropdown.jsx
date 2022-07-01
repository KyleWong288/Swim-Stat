import React, { useState } from 'react';
import { ReactComponent as CaretDown} from './caret-down.svg';
import './Dropdown.css';

export default function Dropdown() {
    return (
        <div className = "dropdown-main">
            Drop Down
            <DropdownIcon icon={<CaretDown/>}>
                <DropdownMenu/>
            </DropdownIcon>
        </div>
    )
}

function DropdownIcon(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="dropdown-icon">
            <div className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </div>
            {open && props.children}
        </div>
    )
}

function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <div className="menu-item">
                {/*<span className="icon-button">{props.leftIcon}</span>*/}
                {props.children}
                <span className="icon-button-right">{props.rightIcon}</span>
            </div>
        )
    }
    return (
        <div className="dropdown-menu">
            <DropdownItem rightIcon={<CaretDown/>}>Event 1</DropdownItem>
            <DropdownItem rightIcon={<CaretDown/>}>Event 2</DropdownItem>
        </div>
    )
}