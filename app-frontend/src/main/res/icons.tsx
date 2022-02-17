import * as React from "react";
import {css} from "emotion";
import {HTMLAttributes} from "react";

export type IconStyle = {
	color: string;
	width: number;
	height: number;
}

type Props = {
	iconStyle: IconStyle
	icon: string
	props?: HTMLAttributes<HTMLSpanElement>
}

class RenderIcon
	extends React.Component<Props> {
	render() {
		const iconStyle = css`
		 width: ${this.props.iconStyle.width}px;
		 height: ${this.props.iconStyle.height}px;
		 background: ${this.props.iconStyle.color};
		 -webkit-mask-image: url(${this.props.icon});
		 mask-image: url(${this.props.icon});
		 mask-size: cover;
		 display: inline-block;
		`;

		return <span {...this.props.props} className={`${iconStyle} ${this.props.props?.className}`}/>;
	}
}


export type IconData = {
	ratio: number,
	value: string
}

export const iconsRenderer = (key: IconData, color?: string, width: number = 24, props?: HTMLAttributes<HTMLSpanElement>) => {
	return <RenderIcon icon={key.value} iconStyle={{color: color || "#000000", height: width * key.ratio, width: width}} props={props}/>
};

const add: IconData = {ratio: 22 / 22,  value: require('@res/icons/icon__add.svg')};
const bell: IconData = {ratio: 24 / 24,  value: require('@res/icons/icon__bell.svg')};
const bin: IconData = {ratio: 32 / 32,  value: require('@res/icons/icon__bin.svg')};
const close: IconData = {ratio: 10 / 10,  value: require('@res/icons/icon__close.svg')};
const copy: IconData = {ratio: 32 / 32,  value: require('@res/icons/icon__copy.svg')};
const edit: IconData = {ratio: 32 / 32,  value: require('@res/icons/icon__edit.svg')};
const email: IconData = {ratio: 24 / 24,  value: require('@res/icons/icon__email.svg')};
const errorToast: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__errorToast.svg')};
const infoToast: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__infoToast.svg')};
const remove: IconData = {ratio: 22 / 22,  value: require('@res/icons/icon__remove.svg')};
const successToast: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__successToast.svg')};
const triangle_down: IconData = {ratio: 5 / 6,  value: require('@res/icons/icon__triangle_down.svg')};
const triangle_up: IconData = {ratio: 5 / 6,  value: require('@res/icons/icon__triangle_up.svg')};
const v: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__v.svg')};
const x: IconData = {ratio: 24 / 26,  value: require('@res/icons/icon__x.svg')};

export const ICONS = {

	add: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(add, color, width, props),
	bell: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(bell, color, width, props),
	bin: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(bin, color, width, props),
	close: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(close, color, width, props),
	copy: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(copy, color, width, props),
	edit: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(edit, color, width, props),
	email: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(email, color, width, props),
	errorToast: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(errorToast, color, width, props),
	infoToast: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(infoToast, color, width, props),
	remove: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(remove, color, width, props),
	successToast: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(successToast, color, width, props),
	triangle_down: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(triangle_down, color, width, props),
	triangle_up: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(triangle_up, color, width, props),
	v: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(v, color, width, props),
	x: (color?: string, width?: number, props?: HTMLAttributes<HTMLSpanElement>) => iconsRenderer(x, color, width, props),
};

export type IconsType = typeof ICONS
