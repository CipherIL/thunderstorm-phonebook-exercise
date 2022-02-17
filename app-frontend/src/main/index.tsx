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

// tslint:disable:no-import-side-effect
import './res/styles/styles.scss';

import {App} from "./app/App";
import {
	LocaleModule,
	Thunder,
} from "@nu-art/thunderstorm/frontend";
import {registerRoutes} from "./app/Routes";
import {
	LanguageHE,
	Locale_HE
} from '@res/localization/he';
import {
	LanguageEN,
	Locale_EN
} from '@res/localization/en';
import {
	LanguageNL,
	Locale_NL
} from '@res/localization/nl';

// const modules = [
// 	ExampleModule,
// ];

LocaleModule.setDefaultConfig(
	{
		languages: {
			[LanguageHE.shortLocale]: {
				language: LanguageHE,
				texts: Locale_HE
			},
			[LanguageEN.shortLocale]: {
				language: LanguageEN,
				texts: Locale_EN
			},
			[LanguageNL.shortLocale]: {
				language: LanguageNL,
				texts: Locale_NL
			}
		},
		defaultLocal: LanguageEN.shortLocale
	}
);
LocaleModule.setActiveLocale(LanguageEN.shortLocale);

registerRoutes();

new Thunder()
	.setConfig(require("./config").config)
	.setMainApp(App)
	.build();
