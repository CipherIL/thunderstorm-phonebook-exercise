import * as React from 'react';
import {Component} from 'react';
import {ColorsType} from "@res/colors";

type SampleItem = {}

// @ts-ignore
const listOfItems = () => {
	const items: SampleItem[] = [
		{}
	]
	return items
};

class Pg_Component
	extends Component<{}, { selected?: keyof ColorsType }> {

	constructor(p: {}) {
		super(p, PgTest_Sample1.name);
	}

	render() {
		return <>
			<div className="ll_h_t">
				<div style={{width: "50%"}}>
					{/*	YOUR CODE HERE*/}
				</div>
				<div style={{width: "50%"}}>Render a list of the provided items in the function below, clicking on one of them will show an editor that will edit its
					properties
				</div>
			</div>
		</>;
	}
}

export const PgTest_Sample1 = {name: "Sample 1 - sync",renderer:Pg_Component};


