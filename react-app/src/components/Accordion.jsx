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
  // TODO: Add transition animation
  return (
	 <div className="wrapper">
		<div className="accordion">
		  {Data.map((item, index) => (
			 <div className="item">
				<div className="title" onClick={() => toggle(index)}>
				  <h1>{item.Swimmer}</h1>
				  <span className="caret">{selected === index ? <CaretUp/> : <CaretDown/>}</span>
				</div>
				<div className={selected === index ? 'content.show' : 'content'}>
					{Data.at(index).SwimEvent.map((jtem, jndex) => (
						<div className="swim-events">
							{item.SwimEvent.at(jndex)}
							<button className="button">
								Plot	
							</button>
						</div>
					))} 
					
				</div>
			 </div>
		  ))}
		</div>
	 </div>
  )
}