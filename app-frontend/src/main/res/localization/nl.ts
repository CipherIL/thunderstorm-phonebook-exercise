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

import { Language } from "@nu-art/thunderstorm/frontend";
import {DeclaredStrings} from "@res/localization/AppLanguage";

export const LanguageNL: Language = {
	shortName: "Netherlands",
	shortLocale: "nl",
}

/**
 * Created by tacb0ss on 28/07/2018.
 */
export const Locale_NL: DeclaredStrings = {
	HelloWorld: "NL: Hello World",
	About: "NL: About",
	Home: "NL: Home",
	Intro: "Hallo mijn naam is ${1}, hoe gaat het",
	InternalRef: "About: @{About} Home: @{Home}",
};
