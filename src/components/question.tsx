import * as React from 'react';

import '../css/question.css';
import QAComponent from './qaComponent';

interface Props {
	data: string
	counter: number
	tags: Array<string>
}

export default class Question extends React.Component<Props, {}> {

	tags = (tags: Array<string>) => {
		return tags.map(tag => {
			return(
				<div key={tag}>
					<div className={'question-tag'}>{tag}</div>
				</div>
			)
		})
	}

	render() {
		const {data, counter, tags} = this.props;
		return (
			<div className={'question-body'}>
				<div className={'counter'}>
					<span>+</span>
					<span>{counter}</span>
					<span>-</span>
				</div>
				<div className={'question'}>
					<p>{data}</p>
					<div className={'tag-wrapper'}>
						{this.tags(tags)}
					</div>
					<div className={'separator'}/>
					<QAComponent message={'How do you do it?'} counter={1} isAnswer={false} author={'Brad'}/>
				</div>
			</div>
		);
	}
}