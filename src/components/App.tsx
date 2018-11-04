import * as React from 'react';
import '../css/App.css';
import QAComponent from './qaComponent';
import Question from './question';
import Searchbar from './searchbar';
import ToolBarOpts from './toolbarOpts'

const logo = require('../images/coin-stack.png');

const tags = ['code', 'swift', 'arrays', 'polymorphism']
const answers = ['impossible', 'probably should try harder', 'probably should try harderprobably should try harderprobably should try harderprobably should try harderprobably should try harder']

enum Route {
	home,
	question
}

type State = {
	selection: Route
}

class App extends React.Component<{}, State> {
	constructor(props: any) {
		super(props)
		this.state = {selection: Route.home}
	}

	current = (selection: Route) => {
		switch (selection) {
			case Route.question: {
				return (
					<div>
						<Question
							data={'How do you make an array that when it only has one item left it just becomes a string?'}
							counter={2} tags={tags}/>
						<div className={'answers'}>
							{answers.map(a => {
								return (<QAComponent key={a} counter={0} message={a} isAnswer={true} author={'SuperCoder'}/>)
							})}
						</div>
					</div>
				)
			}
			case Route.home: {
				return  (
					<div onClick={() => this.setState({selection: Route.question})}>This will be a question to pick</div>
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
						<ToolBarOpts data={'All'} selected={() => {}}/>
						<ToolBarOpts data={'Unanswered'} selected={() => {}}/>
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
