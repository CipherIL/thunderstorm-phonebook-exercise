/*
 * A typescript & react boilerplate with api call example
 *
 * Copyright (C) 2020 Adam van der Kruk aka TacB0sS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import {Playground, PlaygroundScreen} from '@nu-art/thunderstorm/frontend';
import {ICONS} from '@res/icons';
import {COLORS} from '@res/colors';
import {BugReport} from '@nu-art/bug-report/frontend';
import {PgDev_Colors} from './examples/PgDev_Colors';
import {PgDev_Icons} from './examples/PgDev_Icons';
import {PgDev_Fonts} from './examples/PgDev_Fonts';
import {PgDev_Locales} from './examples/PgDev_Locales';
import {PgDev_Toaster} from './examples/PgDev_Toaster';
import {PgDev_IndexDB} from './examples/PgDev_IndexDB';

export const selectStyles = {
	container: (provided: any) => ({
		...provided,
		width: 240,
		fontSize: 13,
		outline: 'none'
	}),
	control: () => ({
		border: '1px solid',
		color: COLORS.darkSky(),
		display: 'flex',
		height: 32,
		fontSize: 13,
		outline: 'none'
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: COLORS.darkSky(),
		fontWeight: 500
	}),
	input: (provided: any) => ({
		...provided,
		color: '#fff'
	}),
	option: (provided: any, state: any) => ({
		...provided,
		backgroundColor: 'unset',
		color: COLORS.darkSky(),
		':hover': {
			backgroundColor: COLORS.mediumPink()
		}
	}),
};

export class Page_Playground
	extends React.Component<{}> {

	constructor(props: {}) {
		super(props);
		this.state = {};
	}

	render() {
		const screens = this.getScreens();
		return <BugReport>
			<Playground
				selectStyle={selectStyles}
				iconClose={ICONS.triangle_up(COLORS.mediumPink(), 12)}
				iconOpen={ICONS.triangle_down(COLORS.mediumPink(), 12)}
				screens={screens}
			/>
		</BugReport>;
	}

	getScreens(): PlaygroundScreen[] {
		return [
			{name: 'Toaster', renderer: PgDev_Toaster},
			{name: 'DEV-IndexDB', renderer: PgDev_IndexDB},
			{name: 'DEV-Locales', renderer: PgDev_Locales},
			{name: 'DEV-Colors', renderer: PgDev_Colors},
			{name: 'DEV-Fonts', renderer: PgDev_Fonts},
			{name: 'DEV-Icons', renderer: PgDev_Icons},
		];
	}

}