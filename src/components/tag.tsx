import * as React from 'react';

import '../css/tag.css'

interface Props {
	data: string
}

export default class Tag extends React.Component<Props, {}> {
	render() {
		const {data} = this.props;
		return (
			<div key={data}>
				<div className={'question-tag'}>{data}</div>
			</div>
		);
	}
}