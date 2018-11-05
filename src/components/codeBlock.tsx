import * as React from 'react';
import Highlight from 'react-highlight'

type Props = {
	value: string
}

export default class CodeBlock extends React.Component<Props, {}> {
	render() {
		const { value } = this.props;
		return (
			<Highlight style={{width: 'auto'}} className={'swift'}>
				{value}
			</Highlight>
		);
	}
}