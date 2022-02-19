import * as React from 'react';
import {ColorsType} from "@res/colors";
import {
	AppPage,
	ToastBuilder,
	ToastModule
} from "@nu-art/thunderstorm/frontend";
import {
	ErrorToast,
	InfoToast,
	SuccessToast
} from "../../themes/toasts";

class Pg_Component
	extends AppPage<{}, { selected?: keyof ColorsType }> {

	constructor(p: {}) {
		super(p, PgDev_Toaster.name);
	}

	showAppToasterSuccessExample = () => {
		ToastModule.toastSuccess("Simple success message");
	};

	showAppToasterErrorExample = () => {
		ToastModule.toastError("Simple error message");
	};

	showAppToasterInfoExample = () => {
		ToastModule.toastInfo("Simple info message");
	};

	showAppToasterCustomInfoExample = () => {
		InfoToast("Custom info message closes in 3 sec", 3000);
	};
	showAppToasterCustomErrorExample = () => {
		ErrorToast("Custom Error message closes in 8 sec", 8000);
	};
	showAppToasterCustomSuccessExample = () => {
		SuccessToast("Custom Success message closes time by thunde default");
	};

	showAppToasterLiveDocsExample = () => {
		new ToastBuilder().setContent("kaki").setActions([<button style={{marginRight: 8}} onClick={this.showAppToasterSuccessExample}>edit</button>]).show();
	};

	render() {
		return <>
			<div>
				<button style={{marginRight: 8}} onClick={this.showAppToasterSuccessExample}>Toaster Default Success Example</button>
				<button style={{marginRight: 8}} onClick={this.showAppToasterErrorExample}>Toaster Default Failure Example</button>
				<button style={{marginRight: 8}} onClick={this.showAppToasterInfoExample}>Toaster Default Info Example</button>
				<button style={{marginRight: 8}} onClick={this.showAppToasterLiveDocsExample}>Toaster Default Live Docs Example</button>
			</div>
			<hr/>
			<div>
				<button style={{marginRight: 8}} onClick={this.showAppToasterCustomSuccessExample}>Toaster Custom Success Example</button>
				<button style={{marginRight: 8}} onClick={this.showAppToasterCustomErrorExample}>Toaster Custom Failure Example</button>
				<button style={{marginRight: 8}} onClick={this.showAppToasterCustomInfoExample}>Toaster Custom Info Example</button>
			</div>
		</>;
	}
}

export const PgDev_Toaster = {name: "DevTool - Toaster", renderer: Pg_Component};
