import * as React from 'react';
import {Component} from 'react';
import {ColorsType} from "@res/colors";

type SampleItem = {}

export class PgDev_Sample1
	extends Component<{}, { selected?: keyof ColorsType }> {

	constructor(p: {}) {
		super(p, "Sample 1 - sync");
	}

	render() {
		return <>
			<div className="ll_h_t">
				<div style={{width: "50%"}}>
					HERE
				</div>
				<div style={{width: "50%"}}>Render a list of the provided items in the function below, clicking on one of them will show an editor that will edit its
					properties
				</div>
			</div>
		</>;
	}
}


// @ts-ignore
const listOfItems = () => {
	const items: SampleItem[] = [
		{}
	]
	return items
};