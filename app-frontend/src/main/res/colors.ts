// empty line
const charcoalGrey = "#3a3c3d";
const mediumPink = "#ee6187";
const slateGrey = "#606364";
const white = "#ffffff";
const iceBlue = "#edeff1";
const pumpkin = "#fd8600";
const darkSky = "#4cb8d0";
const disabledGrey = "#98a1a8";
const dark = "#1d1d30";
const pink = "#e6004a";
const cyan = "#07f0fc";
const mintyGreen = "#00fb6a";
const oceanBlue = "#0578a7";
const butterscotch = "#ffc046";
const perrywinkle = "#9c9ccd";

function calculateColorWithAlpha(color: string, alpha: number = 1) {
	return color + (255 - Math.round(((1 - alpha) * 256) % 256)).toString(16);
}

export const COLORS = {

	charcoalGrey : (alpha?: number) => calculateColorWithAlpha(charcoalGrey , alpha),
	mediumPink : (alpha?: number) => calculateColorWithAlpha(mediumPink , alpha),
	slateGrey : (alpha?: number) => calculateColorWithAlpha(slateGrey , alpha),
	white : (alpha?: number) => calculateColorWithAlpha(white , alpha),
	iceBlue : (alpha?: number) => calculateColorWithAlpha(iceBlue , alpha),
	pumpkin : (alpha?: number) => calculateColorWithAlpha(pumpkin , alpha),
	darkSky : (alpha?: number) => calculateColorWithAlpha(darkSky , alpha),
	disabledGrey : (alpha?: number) => calculateColorWithAlpha(disabledGrey , alpha),
	dark : (alpha?: number) => calculateColorWithAlpha(dark , alpha),
	pink : (alpha?: number) => calculateColorWithAlpha(pink , alpha),
	cyan : (alpha?: number) => calculateColorWithAlpha(cyan , alpha),
	mintyGreen : (alpha?: number) => calculateColorWithAlpha(mintyGreen , alpha),
	oceanBlue : (alpha?: number) => calculateColorWithAlpha(oceanBlue , alpha),
	butterscotch : (alpha?: number) => calculateColorWithAlpha(butterscotch , alpha),
	perrywinkle : (alpha?: number) => calculateColorWithAlpha(perrywinkle , alpha),
};

export type ColorsType = typeof COLORS
