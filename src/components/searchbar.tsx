import * as React from 'react';

import '../css/searchbar.css';

interface Props {
	data: string
}

export default class Searchbar extends React.Component<Props, {}> {
	render() {
		// const {data} = this.props;
		return (
			<div className={'searchbar-body'}>
				<input type="text" className={'search-input'} placeholder={'Search Bounties'}/>
			</div>
		);
	}
}