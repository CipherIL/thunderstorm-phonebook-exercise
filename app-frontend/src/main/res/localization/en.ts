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

import {DeclaredStrings} from './AppLanguage';
import {Language} from "@nu-art/thunderstorm/frontend";


export const LanguageEN: Language = {
	shortName: 'English',
	shortLocale: 'en',
};
/**
 * Created by tacb0ss on 28/07/2018.
 */
export const Locale_EN: DeclaredStrings = {
	HelloWorld: 'Hello World',
	Logout: 'Logout',
	OK: 'OK',
	Cancel: 'Cancel',
	Save: 'Save',
	Create: 'Create',
	Copy: 'Copy',
	Delete: 'Delete',
	About: 'About',
	Date: 'Date',
	Home: 'Home',
	Intro: 'Hi my name is ${0}, how are you doing',
	Intro2Params: 'param0: ${0}, param1: ${1}',
	InternalRef: 'About: @{About} Home: @{Home}',
};
