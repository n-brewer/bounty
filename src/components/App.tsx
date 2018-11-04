import * as React from 'react';
import '../css/App.css';
import Question from './question';
import QuestionCell from './questionCell';
import Searchbar from './searchbar';
import ToolBarOpts from './toolbarOpts'

const logo = require('../images/coin-stack.png');

enum Route {
	home,
	question
}

type State = {
	selection: Route
	selectedQuestion?: any
}

class App extends React.Component<{}, State> {
	constructor(props: any) {
		super(props)
		this.state = {selection: Route.home, selectedQuestion: null}
	}

	current = (selection: Route) => {
		switch (selection) {
			case Route.question: {
				const q = this.state.selectedQuestion
				return (
					<div>
						<Question question={q}/>
					</div>
				)
			}
			case Route.home: {
				return (
					<div style={{width: '100%'}} onClick={() => this.setState({selection: Route.question})}>
						{QuestionList.map(q => {
							return (<QuestionCell key={q._id} question={q} selected={(q) => this.setState({selection: Route.question, selectedQuestion: q})}/>)
						})}
					</div>
				)
			}
		}
	}

	public render() {
		const comp = this.current(this.state.selection)
		return (
			<div className="App">
				<div className={'container header'} style={{height: 75}}>
					<div className={'wrapper'}>
						<img className={'site-logo'} src={logo}/>
						<div className={'site-name'}>Stack-Earn-A-Flow</div>
					</div>
				</div>
				<div className='container toolbar'>
					<div className={'wrapper'}>
						<ToolBarOpts data={'Home'} selected={() => this.setState({selection: Route.home})}/>
						<ToolBarOpts data={'All'} selected={() => {
						}}/>
						<ToolBarOpts data={'Unanswered'} selected={() => {
						}}/>
						<Searchbar data={'Search Bounties'}/>
						<button className={'bounty-btn'}>Post Bounty</button>
					</div>
				</div>
				<div className='container body-details'>
					<div className={'wrapper'} style={{backgroundColor: 'white', flexDirection: 'column'}}>
						{comp}
					</div>
				</div>
			</div>
		);
	}
}

export default App;

export const AnswerList = [{
	_id: 'firstAnswer1',
	answer: 'You would have two variables increment, the first at 1 index, the second at 2 indexes. Once the second variable would become nil, the first variable would be in the center of the array. Hope that helps!',
	timestamp: '10/24/18',
	votes: 2,
	answeredBy: 'CoolCoder'
}]

export const QuestionList = [{
	_id: 'firstId1',
	question: 'Get middle index of an array?',
	explanation: 'How can I find the middle index of an array with an unknown length with only one iteration?',
	tags: ['code', 'swift', 'arrays'],
	timestamp: '10/22/18',
	bounty: 100,
	votes: 0,
	answers: AnswerList,
	askedBy: 'CuriousCoder'
}, {
	_id: 'Id2',
	question: 'Reverse a string',
	explanation: 'How do you reverse a string in C++',
	tags: ['code', 'C++', 'strings'],
	timestamp: '10/18/18',
	bounty: 50,
	votes: 1,
	answers: AnswerList,
	askedBy: 'CuriousCoder'
}]


