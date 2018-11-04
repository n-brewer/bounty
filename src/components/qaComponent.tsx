import * as React from 'react';

import '../css/qaComponent.css';

interface Props {
	message: string
	counter: number
	isAnswer: boolean
	author: string
}

export default class QAComponent extends React.Component<Props, {}> {
	render() {
		const {message, counter, isAnswer, author} = this.props;
		const padding = isAnswer ? 'padding' : 'noSidePadding'
		const statedBy = isAnswer ? 'answered by' : 'asked by'
		return (
			<div className={'qa-body'}>
				{isAnswer && <div className={'counter'}>
					<span>+</span>
					<span>{counter}</span>
					<span>-</span>
				</div>}
				<div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
					<div className={`details ${padding}`}>
						<div className={`message`}>
							{message}
						</div>
						<div className={'author'}>
							<div><span>{statedBy}</span> {author}</div>
							<span>{new Date().toDateString()}</span>
						</div>
					</div>
					<div className={'separator'}/>
				</div>
			</div>
		);
	}
}