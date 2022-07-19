import React, {useState, Component} from 'react';
import { Data } from './Data';
import './Accordion.css';
import { ReactComponent as CaretDown } from './caret-down.svg';
import { ReactComponent as CaretUp } from './caret-up.svg';
import Graph from "./Graph";

// TODO: Change the "Stats" header to swimmer name and event when graphed
// left side accordion menu and right side graph display
class Button extends Component {
	state = {
		showTimes: false
	}
	
	onButtonClickHandler = () => {
		console.log(this.showTimes);
		this.setState({showTimes: !this.showTimes});
		
	};
	render() {
		return (
			<div>
				{this.state.showTimes && <p>Hello</p>}
				<button onClick={this.onButtonClickHandler}>ENTER</button>
			</div>
		)
	}
}

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
					{Data.at(index).SwimEvent.map((jtem, jndex) => (
						<div className="swim-events">
							{item.SwimEvent.at(jndex)}
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
			<div className="graph-container"> <Graph Times={Data.at(selected).Times.at(clicked) } Years={Data.at(selected).Years.at(clicked)}/> </div> :
			<div className="no-plot"> (nothing plotted yet) </div> }
			
		</span>
	</div>
  </div>
  )
}