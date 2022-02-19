import * as React from 'react';
import {COLORS} from "@res/colors";
import {_keys} from "@nu-art/ts-common";
import * as emotion from "emotion";
import {
	AdapterBuilder,
	AppPage,
	DropDown,
	Language,
	LocaleModule,
	NodeRendererProps,
	TS_Input,
	TS_TextArea
} from "@nu-art/thunderstorm/frontend";
import {LOCALE} from "@res/locale";
import {AppStrings} from "@res/localization/AppLanguage";
import {ICONS} from "@res/icons";

type State = {
	language: Language
	stringKey: keyof AppStrings
	params: string[]
}

const tdStyle = emotion.css({padding: "3px", float: "left"});

class Pg_Component
	extends AppPage<{}, State> {


	constructor(props: {}) {
		super(props, PgDev_Locales.name);
		this.state = {
			language: LocaleModule.getActiveLanguage(),
			stringKey: _keys(LOCALE)[0],
			params: [""] as string[],
		};
	}


	render() {
		return <div className={'ll_v_l'}>
			<div style={{marginBottom: "16px"}}>Locales</div>
			{this.renderCodeSnippet()}
			{this.renderLocalesDropDown()}
			<div className="ll_h_c">
				<div style={{marginRight: "12px"}}>Params:</div>
				{ICONS.add(COLORS.mediumPink(), 20, {onClick: () => this.setState(prev => ({params: [...prev.params, ""]}))})}
			</div>

			<div className="ll_h_c">
				{this.renderParams()}

				<div className="ll_v_l" style={{marginLeft: "24px"}}>
					<div>OUTPUT:</div>
					<div>{LOCALE[this.state.stringKey]?.(...this.state.params)}</div>
				</div>
			</div>


			<div className="ll_v_l" style={{overflowY: "scroll", marginTop: "24px"}}>
				<div style={{marginBottom: "12px"}}>Application Texts:</div>
				{_keys(LOCALE).map(stringKey => (
					<React.Fragment key={stringKey}>
						<div className={`${tdStyle}`} onClick={() => this.setState({stringKey})}>
							<div style={{marginRight: "12px", minWidth: "150px"}}>{stringKey}: {LOCALE[stringKey]()}</div>
						</div>
					</React.Fragment>))}
			</div>
		</div>;
	}

	protected generateCodeSnippet(): string {
		return `{LOCALE.${this.state.stringKey}(${this.state.params.join(", ")})}`;
	}

	private renderLocalesDropDown() {
		const adapter = AdapterBuilder()
			.list()
			.singleRender(
				(props: NodeRendererProps<Language>) => (
					<div className="ll_h_c" style={{background: COLORS.darkSky(props.node.focused ? 0.5 : 1)}}>
						<div>{props.item.shortLocale} - {props.item.shortName}</div>
					</div>))
			.setData(LocaleModule.getAllLanguages())
			.build();

		return <div className="ll_h_c" style={{minHeight: "30px", marginBottom: "12px"}}>
			<div style={{minWidth: "100px", marginRight: "16px"}}>Select a Language:</div>
			<DropDown<Language>
				adapter={adapter}
				onSelected={selected => {
					LocaleModule.setActiveLocale(selected.shortLocale);
					this.setState({language: selected});
				}}
				selected={this.state.language}/>
		</div>;
	}

	private renderCodeSnippet() {
		const snippet = this.generateCodeSnippet();
		return (
			<div className="ll_h_c" style={{marginBottom: "12px"}}>
				<TS_TextArea
					id={"snippet"}
					type={"text"} style={{fontFamily: "monospace !important", resize: "none", width: "400px", marginRight: "12px"}} value={snippet}
					enable={false}/>
				{ICONS.copy(COLORS.mediumPink(), 25, {
					style: {alignSelf: "center"},
					onClick: async () => {
						await navigator.clipboard.writeText(snippet);
					}
				})}
			</div>
		);
	}

	private renderParams() {
		return (
			<div className="ll_v_l">
				{this.state.params.map((param, index) => (

					<div className="ll_h_c" key={index}>
						<TS_Input
							onChange={value => {
								this.state.params[index] = value;
								this.forceUpdate();
							}}
							type="text"
							id={`input-${index}`}
							value={this.state.params[index]} style={{border: "1px solid black"}}/>
						{ICONS.remove(COLORS.mediumPink(), 20, {
							onClick: () => {
								this.state.params.splice(index, 1);
								this.forceUpdate();
							}
						})}
					</div>
				))}
			</div>
		);
	}
}

export const PgDev_Locales = {name: "DevTool - Locales", renderer: Pg_Component};
