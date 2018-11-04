import * as React from 'react';

import '../css/toolbarOpts.css'

interface Props {
	data: string
	selected(clicked: boolean): void
}

export default class ToolBarOpts extends React.Component<Props, {}> {

	public render() {
		const {data, selected} = this.props
		return (
			<div className={'main'}>
				<p onClick={() => selected(true)} className={'title'}>{data}</p>
			</div>
		);
	}
}