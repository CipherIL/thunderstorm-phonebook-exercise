import * as React from 'react';
import {ReactElement} from 'react';
import {AppPage, NodeRendererProps, ToastModule, TS_DropDown, TS_TextArea} from '@nu-art/thunderstorm/frontend';
import {ICONS} from '@res/icons';
import {COLORS, ColorsType} from '@res/colors';
import {_keys} from '@nu-art/ts-common';
import * as emotion from 'emotion';
import {SimpleListAdapter} from '@nu-art/thunderstorm/app-frontend/components/adapter/Adapter';

export type BaseResource_State = {
	color: keyof ColorsType
	size: number
}

const divStyle = emotion.css({
	width: '20',
	height: '20',
	borderRadius: '20',
	border: '1px solid black'
});

export abstract class PgDev_BaseResource<_State extends BaseResource_State>
	extends AppPage<{}, _State> {

	protected constructor(props: {}, title: string) {
		super(props, title);
		this.state = {
			color: _keys(COLORS)[0],
			size: 25,
		} as _State;
	}

	changeColor = (color: keyof ColorsType) => {
		this.setState({color: color});
	};

	render() {
		return (
			<div className="ll_h_l">
				<div className="ll_h_c" style={{alignItems: 'stretch', marginBottom: '24px'}}>
					<div className="ll_v_l" style={{marginRight: '32px'}}>
						{this.renderColorsDropDown()}
						{this.renderIconSizeSlider()}
					</div>
					{this.renderCodeSnippet()}
				</div>
				{this.renderItems()}
			</div>
		);
	}

	private renderCodeSnippet() {
		const snippet = this.generateCodeSnippet();
		return (
			<>
				<TS_TextArea
					id={'snippet'}
					type={'text'} style={{fontFamily: 'monospace !important', resize: 'none', width: '400px', marginRight: '12px'}} value={snippet}
					enable={false}/>
				{ICONS.copy(COLORS.mediumPink(), 25, {
					style: {alignSelf: 'center'},
					onClick: async () => {
						await navigator.clipboard.writeText(snippet);
						ToastModule.toastInfo('Copied to Clipboard');
					}
				})}
			</>
		);
	}

	protected abstract generateCodeSnippet(): string ;

	protected abstract renderItems(): ReactElement ;

	private renderIconSizeSlider() {
		return <div className="ll_h_c" style={{minHeight: '30px', minWidth: '222px'}}>
			<div style={{minWidth: '100px', marginRight: '16px'}}>Size ({this.state.size}):</div>
			<div style={{minWidth: '222px'}}>
				<input
					className="match_width"
					type="range"
					value={this.state.size}
					min="1" max="100"
					onChange={(e) => this.setState({size: e.target.valueAsNumber} as _State & BaseResource_State)}/>
			</div>
		</div>;
	}

	private renderColorsDropDown() {
		const adapter = SimpleListAdapter(_keys(COLORS), (props: NodeRendererProps<keyof ColorsType>) => (
			<div className="ll_h_c" style={{background: COLORS.darkSky(props.node.focused ? 0.5 : 1)}}>
				{props.node.focused}
				<div className={divStyle} style={{background: COLORS[props.item](), margin: '4px'}}/>
				<div>{props.item}</div>
			</div>));

		return <div className="ll_h_c" style={{minHeight: '30px'}}>
			<div style={{minWidth: '100px', marginRight: '16px'}}>Select a color:</div>
			<TS_DropDown<keyof ColorsType> adapter={adapter} onSelected={selected => this.setState({color: selected})}
																		 selected={this.state.color}/>
		</div>;
	}
}