import * as React from 'react';
import {
	COLORS,
	ColorsType
} from "@res/colors";
import * as emotion from "emotion";
import {_keys} from "@nu-art/ts-common";
import {
	AppPage,
	TS_TextArea
} from "@nu-art/thunderstorm/frontend";

const divStyle = emotion.css({
	                             width: "50px",
	                             height: "50px",
	                             borderRadius: "50px",
	                             marginBottom: "5px",
	                             border: "1px solid black"
                             });

export class PgDev_Colors
	extends AppPage<{}, { selected?: keyof ColorsType }> {

	private createDiv = (key: keyof ColorsType, color: () => string) => {
		const colorHex = color();
		return <div key={key} className="ll_v_c" style={{padding: "20px"}} onClick={() => this.setState({selected: key})}>
			<div className={divStyle} style={{background: colorHex}}/>
			<div style={{marginBottom: "2px", fontFamily: "\"Courier New\", Courier, monospace"}}>{key}</div>
			<div style={{marginBottom: "2px", fontFamily: "\"Courier New\", Courier, monospace"}}>{colorHex}</div>
		</div>;
	};

	constructor(p: {}) {
		super(p, "DevTool - Color");
		this.state = {selected: _keys(COLORS)[0]};
	}

	private createGrid = () => _keys(COLORS).map(color => this.createDiv(color, COLORS[color]));

	render() {
		return <div className="match_height match_width" style={{overflowY: "scroll"}}>
			{this.renderSelected()}
			<div className="ll_h_c">
				{this.createGrid()}
			</div>
		</div>;
	}

	private renderSelected() {
		const snippet = `COLORS.${this.state.selected}()`;
		return <TS_TextArea
			id={"color-snippet"}
			type={"text"}
			style={{fontFamily: "monospace !important", resize: "none", width: "400px", marginRight: "12px"}}
			value={snippet}
			enable={false}/>;
	}
}