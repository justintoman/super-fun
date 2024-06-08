import defaultConfig from '@epic-web/config/prettier'

/** @type {import("prettier").Options} */
export default {
	...defaultConfig,
	plugins: ['prettier-plugin-organize-imports', ...defaultConfig.plugins],
}
