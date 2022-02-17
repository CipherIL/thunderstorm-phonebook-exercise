import * as React from 'react';

type State = {}
type Props = {}

export class _PgTemplate
	extends React.Component<Props, State> {

	constructor(p: Props) {
		super(p);
		this.state = {}
	}

	render() {
		return <div style={{overflowY: "scroll"}}>Playground Template</div>
	}
}