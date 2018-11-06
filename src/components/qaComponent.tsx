import * as React from 'react';
import ReactMarkdown from 'react-markdown'
import '../css/qaComponent.css';
import CodeBlock from './codeBlock'

interface Props {
	qa: any
	isAnswer: boolean
}

type State = {
	txt: string
	isCommenting: boolean
}

export default class QAComponent extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props)
		this.state = {txt: '', isCommenting: false}
	}

	render() {
		const {qa, isAnswer} = this.props;
		const padding = isAnswer ? 'padding' : 'noSidePadding'
		return (
			<div className={'qa-body'}>
				{isAnswer && <div className={'counter'}>
					<span>+</span>
					<span>{qa.votes}</span>
					<span>-</span>
				</div>}
				<div className={'column'}>
					<div className={`details ${padding}`}>
						<div className={'column'}>
							<div className={`message`}>
								<ReactMarkdown source={isAnswer ? qa.answer : qa.explanation}
								               renderers={{
									               code: CodeBlock}}/>
							</div>
						</div>
						<div className={'author'}>
							<div><span>{isAnswer ? 'answered by' : 'asked by'}</span> {isAnswer ? qa.answeredBy : qa.askedBy}</div>
							<span>{qa.timestamp}</span>
						</div>
					</div>
					<div className={'question-footer'}>
						{!isAnswer && <button onClick={() => this.setState({isCommenting: !this.state.isCommenting})}
						                      className={'comment-btn'}>Add Comment</button>}
					</div>
					{this.state.isCommenting &&
					[<textarea id={'textArea'} key={'textArea'} className={'text-area'}
					           value={this.state.txt}
					           onChange={(e) => this.setState({txt: e.target.value})}/>,
						<ReactMarkdown key={'preview'} source={`${"```"}\n/* Live Preview, supports markdown and code blocks */ \n${"```"}`} renderers={{code: CodeBlock}}/>,
						<ReactMarkdown key={'markdown'}
							source={this.state.txt}
							renderers={{code: CodeBlock}}/>]}
					<div className={'separator'}/>
				</div>
			</div>
		);
	}
}