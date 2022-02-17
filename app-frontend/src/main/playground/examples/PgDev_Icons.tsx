import * as React from 'react';
import {ICONS, IconsType} from "@res/icons";
import {COLORS, ColorsType} from "@res/colors";
import {_keys} from "@nu-art/ts-common";
import * as emotion from "emotion";
import {BaseResource_State, PgDev_BaseResource} from "./PgDev_BaseResource";

type State = BaseResource_State & {
	icon: keyof IconsType
}

const tdStyle = emotion.css({padding: "10px", height: "80px", float: "left"});

export class PgDev_Icons
	extends PgDev_BaseResource<State> {

	constructor(props: {}) {
		super(props, "DevTool - Icons");
		this.state = {
			icon: _keys(ICONS)[0],
			color: _keys(COLORS)[0],
			size: 25,
		} as State;
	}

	protected generateCodeSnippet(): string {
		return `ICONS.${this.state.icon}(COLORS.${this.state.color}(), ${this.state.size},{ onClick: (e) => {}})`;
	}

	changeColor = (color: keyof ColorsType) => {
		this.setState({color: color});
	};

	protected renderItems(): React.ReactElement {
		return <div style={{overflowY: "scroll"}}>
			{_keys(ICONS).map(icon => (
				<div key={icon} className={tdStyle}>{ICONS[icon](COLORS[this.state.color](), this.state.size, {onClick: () => this.setState({icon})})}</div>
			))}
		</div>;
	}
}