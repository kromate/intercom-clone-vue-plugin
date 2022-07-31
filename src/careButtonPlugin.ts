import type { App } from 'vue';
import { CareButton } from './components';

interface CareButtonPluginOptions {
	openIcon?: string;
	closeIcon?: string;
	scriptURL?: string;
	title?: string;
	desc?: string;
	color?: string;
	bgColor?: string;
}
const CareButtonPluginOptionsDefaults = {
	openIcon: '',
};
export default {
	install: (
		app: App,
		options: CareButtonPluginOptions = CareButtonPluginOptionsDefaults
	) => {
		app.component('CareButton', CareButton);
		app.provide('openIcon', options.openIcon);
		app.provide('closeIcon', options.closeIcon);
		app.provide('scriptURL', options.scriptURL);
		app.provide('title', options.title);
		app.provide('desc', options.desc);
		app.provide('color', options.color);
		app.provide('bgColor', options.bgColor);
	},
};

export { CareButton };
