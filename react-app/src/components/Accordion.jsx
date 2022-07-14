import React, {useState, Component} from 'react';
import { Data } from './Data';
import './Accordion.css';
import { ReactComponent as CaretDown } from './caret-down.svg';
import { ReactComponent as CaretUp } from './caret-up.svg';

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
  const [clicked, setClicked] = useState(true)

  const toggleClick = (index) => {
	if (clicked === index) {
		return setClicked(null)
	}
	setClicked(index)
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
							<button onClick={() => toggleClick(jndex)} className="button">
								Plot
							</button> 
							<span>{clicked === jndex ? <h1> Times </h1> : null }</span>
							
						</div>
					))} 
					
				</div>
			 </div>
		  ))}
		</div>
	 </div>
  )
}