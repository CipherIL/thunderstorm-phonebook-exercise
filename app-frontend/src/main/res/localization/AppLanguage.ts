export type DeclaredStrings = {
	HelloWorld?: string
	Logout?: string
	Cancel?: string
	Copy?: string
	Delete?: string
	Save?: string
	Create?: string
	OK?: string
	About?: string
	Home?: string
	Intro?: string
	Intro2Params?: string
	InternalRef?: string
	Date?: string
};

export type AppStrings = {
	[P in keyof DeclaredStrings]-?: (...params: (string | number)[]) => string
};

