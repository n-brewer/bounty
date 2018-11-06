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
			<div className={'cellBody'}>
				<span onClick={() => selected(question)}>{question.question}</span>
				<div className={'tag-wrapper'}>
					{question.tags.map((t: string) => {
						return (<Tag key={t} data={t}/>)
					})}
				</div>
				<div className={'separator'}/>
			</div>
		);
	}
}