import * as React from 'react';
import '../css/questionCell.css'
import Tag from './tag';

interface Props {
	question: any
	selected(q: any): void
}

export default class QuestionCell extends React.Component<Props, {}> {
	render() {
		const {question, selected} = this.props;
		return (
			<div className={'cellBody'} onClick={() => selected(question)}>
				<div>{question.question}</div>
				{question.tags.map((t: string) => {
					return (<Tag key={t} data={t}/>)
				})}
			</div>
		);
	}
}