import {Locale_EN} from "@res/localization/en";
import {AppStrings, DeclaredStrings} from "@res/localization/AppLanguage";
import {_keys} from "@nu-art/ts-common";
import {LocaleModule, LocaleModule_Class} from "@nu-art/thunderstorm/frontend";

export const LOCALE: AppStrings = _keys(Locale_EN).reduce((toRet, key) => {
	toRet[key] = (LocaleModule as unknown as LocaleModule_Class<DeclaredStrings>).stringify(key)
	return toRet;
}, {} as AppStrings)
