import * as React from 'react';

import '../css/question.css';
import { AnswerList } from './App';
import QAComponent from './qaComponent';
import Tag from './tag';

interface Props {
	question: any
}

export default class Question extends React.Component<Props, {}> {

	tags = (tags: Array<string>) => {
		return tags.map(tag => {
			return (
				<Tag key={tag} data={tag}/>
			)
		})
	}

	render() {
		const {question} = this.props;
		return (
			<div>
				<div className={'question-body'}>
					<div className={'counter'}>
						<span>+</span>
						<span>{question.votes}</span>
						<span>-</span>
					</div>
					<div className={'question'}>
						<p>{question.question}</p>
						<div className={'tag-wrapper'}>
							{this.tags(question.tags)}
						</div>
						<div className={'separator'}/>
						<QAComponent qa={question}
						             isAnswer={false}/>
					</div>
				</div>
				<div className={'answers'}>
					{AnswerList.map(a => {
						return (<QAComponent qa={a}
						                     key={a._id}
						                     isAnswer={true}/>)
					})}
				</div>
			</div>
		);
	}
}