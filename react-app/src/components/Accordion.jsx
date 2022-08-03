import React, {useState, Component} from 'react';
import { Data } from './Data';
import './Accordion.css';
import { ReactComponent as CaretDown } from './caret-down.svg';
import { ReactComponent as CaretUp } from './caret-up.svg';
import Graph from "./Graph";
import GoogleChart from './GoogleChart';

// TODO: Change the "Stats" header to swimmer name and event when graphed
// left side accordion menu and right side graph display
export default function Accordion() {
  // Accordion Button Toggle:
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
	 if (selected === index) {
		return setSelected(null)
	 }
	 setSelected(index)
  }

  // Graph Button Toggle:
  const [clicked = -1, setClicked] = useState(true)

  const toggleClick = (index, jndex) => {
	// if (clicked === jndex) {
	// 	return setClicked(null)
	// }
	setClicked(jndex)
  }

  // Interface between accordion and graph:
  const [displaySwimmer, setDisplaySwimmer] = useState(null)
  const [displayEvent, setDisplayEvent] = useState(null)

  const toggleDisplay = (index, jndex) => {
	// if (displaySwimmer === index && displayEvent === jndex) {
	// 	setDisplaySwimmer(null)
	// 	setDisplayEvent(null)
	// 	return
	// }
	setDisplaySwimmer(index)
	setDisplayEvent(jndex)
  }

  // TODO: Add transition animation
  return (
  <div>
	<div className="left-container">
	<h1 className="header"> Most Popular </h1>
	<div className="scrollable">
	 <div className="wrapper">
		<div className="accordion">
		  {Data.map((item, index) => (
			 <div className="item">
				<div className="title" onClick={() => toggle(index)}>
				  <h1>{item.Swimmer}</h1>
				  <span className="caret">{selected === index ? <CaretUp/> : <CaretDown/>}</span>
				</div>
				<div className={selected === index ? 'content.show' : 'content'}>
					{Data.at(index).SwimEvents.map((jtem, jndex) => (
						<div className="swim-events">
							{item.SwimEvents.at(jndex)}
							<button onClick={() => [toggleClick(index,jndex), toggleDisplay(index,jndex)]} className="button">
								Plot
							</button> 
						</div>
					))} 
					
				</div>
			 </div>
		  ))}
		</div>
	  </div>
	 </div>
	</div>
	<div className="right-container">
		<h1 className="header">Stats</h1>
		<span>{displaySwimmer === selected && displayEvent === clicked ? 
			<div className="graph-container"> 
				<GoogleChart 
					years={Data.at(selected).Years.at(clicked)} 
					times={Data.at(selected).Times.at(clicked)} 
					name={Data.at(selected).Swimmer} 
					event={Data.at(selected).SwimEvents.at(clicked)}/> 
			</div> :
			<div className="no-plot"> (nothing plotted yet) </div> }
		</span>
	</div>
  </div>
  )
}