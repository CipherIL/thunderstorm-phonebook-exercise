import * as React from 'react';
import {Fragment} from 'react';
import {
	COLORS,
	ColorsType
} from "@res/colors";
import {_keys} from "@nu-art/ts-common";
import * as emotion from "emotion";
import {
	BaseResource_State,
	PgDev_BaseResource
} from "./PgDev_BaseResource";
import {
	FONTS,
	FontsType
} from "@res/fonts";
import {TS_Input} from "@nu-art/thunderstorm/frontend";

type State = BaseResource_State & {
	font: keyof FontsType
	text: string
}

const tdStyle = emotion.css({padding: "10px", height: "80px", float: "left"});

export class PgDev_Fonts
	extends PgDev_BaseResource<State> {

	constructor(props: {}) {
		super(props, "DevTool - Fonts");
		this.state = {
			font: _keys(FONTS)[0],
			color: _keys(COLORS)[0],
			text: "Test text",
			size: 25,
		};
	}

	protected generateCodeSnippet(): string {
		return `{FONTS.${this.state.font}("${this.state.text}", COLORS.${this.state.color}(), ${this.state.size})}`;
	}

	changeColor = (color: keyof ColorsType) => {
		this.setState({color: color});
	};

	protected renderItems(): React.ReactElement {

		return <div className={'ll_v_l'}>
			<div style={{marginBottom: "16px"}}>Fonts</div>
			<div className="ll_h_c">
				<div style={{marginRight: "12px"}}>Input:</div>
				<TS_Input
					onChange={value => this.setState({text: value})}
					type="text"
					id="input"
					value={this.state.text} style={{border: "1px solid black"}}/>
			</div>
			<div style={{overflowY: "scroll"}}>
				{_keys(FONTS).map((font, index) => (
					<Fragment key={index}>
						<div key={font} className={`${tdStyle} ll_h_c`} onClick={() => this.setState({font})}>
							<div style={{marginRight: "12px", minWidth: "150px"}}>{font}:</div>
							<div>{FONTS[font](this.state.text, COLORS[this.state.color](), this.state.size)}</div>
						</div>
						<br/>
					</Fragment>))}
			</div>
		</div>;
	}
}