import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "嘉应学院ACM算法协会Blog",
	prologue: "算法，不只是逻辑，更是艺术。",
	author: {
		name: "lim342",
		email: "",
		link: ""
	},
	description: "A modern Astro theme focused on content creation.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["zh-cn"],
		defaultLocale: "zh-cn"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
