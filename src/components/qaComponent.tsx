import * as React from 'react';
import ReactMarkdown from 'react-markdown'
import '../css/qaComponent.css';
import CodeBlock from './codeBlock'

interface Props {
	message: string
	counter: number
	isAnswer: boolean
	author: string
	timestamp: string
}

type State = {
	t: string
	isCommenting: boolean
}

export default class QAComponent extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props)
		this.state = {t: '', isCommenting: false}
	}

	render() {
		const {message, counter, isAnswer, author, timestamp} = this.props;
		const padding = isAnswer ? 'padding' : 'noSidePadding'
		const statedBy = isAnswer ? 'answered by' : 'asked by'
		return (
			<div className={'qa-body'}>
				{isAnswer && <div className={'counter'}>
					<span>+</span>
					<span>{counter}</span>
					<span>-</span>
				</div>}
				<div className={'column'}>
					<div className={`details ${padding}`}>
						<div className={'column'}>
							<div className={`message`}>
								<ReactMarkdown source={message}
								               renderers={{
									               code: CodeBlock}}/>
							</div>
						</div>
						<div className={'author'}>
							<div><span>{statedBy}</span> {author}</div>
							<span>{timestamp}</span>
						</div>
					</div>
					<div className={'question-footer'}>
						{!isAnswer && <button onClick={() => this.setState({isCommenting: !this.state.isCommenting})}
						                      className={'comment-btn'}>Add Comment</button>}
					</div>
					{this.state.isCommenting &&
					[<textarea id={'textArea'} key={'textArea'} className={'text-area'}
					           value={this.state.t}
					           onChange={(e) => this.setState({t: e.target.value})}/>,
						<ReactMarkdown key={'preview'} source={`${"```"}\n/* Live Preview, supports markdown and code blocks */ \n${"```"}`} renderers={{code: CodeBlock}}/>,
						<ReactMarkdown key={'markdown'}
							source={this.state.t}
							renderers={{code: CodeBlock}}/>]}
					<div className={'separator'}/>
				</div>
			</div>
		);
	}
}