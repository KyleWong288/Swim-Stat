import React, {useState} from 'react';
import { Data } from './Data';
import './Accordion.css';
import { ReactComponent as CaretDown } from './caret-down.svg';
import { ReactComponent as CaretUp } from './caret-up.svg';

export default function Accordion() {
    const [selected, setSelected] = useState(null)

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }
    // TODO: Add graph button, add transition animations
    return (
        <div className="wrapper">
            <div className="accordion">
                {Data.map((item, index) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(index)}>
                            <h1>{item.Swimmer}</h1>
                            <span>{selected === index ? '-' : '+'}</span>
                        </div>
                        <div className={selected === index ? 'content.show' : 'content'}>
                            <div className="swim-events">{item.SwimEvent}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}