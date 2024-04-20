
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #6624e0 
		"--color-primary-50": "232 222 250", // #e8defa
		"--color-primary-100": "224 211 249", // #e0d3f9
		"--color-primary-200": "217 200 247", // #d9c8f7
		"--color-primary-300": "194 167 243", // #c2a7f3
		"--color-primary-400": "148 102 233", // #9466e9
		"--color-primary-500": "102 36 224", // #6624e0
		"--color-primary-600": "92 32 202", // #5c20ca
		"--color-primary-700": "77 27 168", // #4d1ba8
		"--color-primary-800": "61 22 134", // #3d1686
		"--color-primary-900": "50 18 110", // #32126e
		// secondary | #6F9CEB 
		"--color-secondary-50": "233 240 252", // #e9f0fc
		"--color-secondary-100": "226 235 251", // #e2ebfb
		"--color-secondary-200": "219 230 250", // #dbe6fa
		"--color-secondary-300": "197 215 247", // #c5d7f7
		"--color-secondary-400": "154 186 241", // #9abaf1
		"--color-secondary-500": "111 156 235", // #6F9CEB
		"--color-secondary-600": "100 140 212", // #648cd4
		"--color-secondary-700": "83 117 176", // #5375b0
		"--color-secondary-800": "67 94 141", // #435e8d
		"--color-secondary-900": "54 76 115", // #364c73
		// tertiary | #D81159 
		"--color-tertiary-50": "249 219 230", // #f9dbe6
		"--color-tertiary-100": "247 207 222", // #f7cfde
		"--color-tertiary-200": "245 196 214", // #f5c4d6
		"--color-tertiary-300": "239 160 189", // #efa0bd
		"--color-tertiary-400": "228 88 139", // #e4588b
		"--color-tertiary-500": "216 17 89", // #D81159
		"--color-tertiary-600": "194 15 80", // #c20f50
		"--color-tertiary-700": "162 13 67", // #a20d43
		"--color-tertiary-800": "130 10 53", // #820a35
		"--color-tertiary-900": "106 8 44", // #6a082c
		// success | #CEFF1A 
		"--color-success-50": "248 255 221", // #f8ffdd
		"--color-success-100": "245 255 209", // #f5ffd1
		"--color-success-200": "243 255 198", // #f3ffc6
		"--color-success-300": "235 255 163", // #ebffa3
		"--color-success-400": "221 255 95", // #ddff5f
		"--color-success-500": "206 255 26", // #CEFF1A
		"--color-success-600": "185 230 23", // #b9e617
		"--color-success-700": "155 191 20", // #9bbf14
		"--color-success-800": "124 153 16", // #7c9910
		"--color-success-900": "101 125 13", // #657d0d
		// warning | #FAFF00 
		"--color-warning-50": "254 255 217", // #feffd9
		"--color-warning-100": "254 255 204", // #feffcc
		"--color-warning-200": "254 255 191", // #feffbf
		"--color-warning-300": "253 255 153", // #fdff99
		"--color-warning-400": "252 255 77", // #fcff4d
		"--color-warning-500": "250 255 0", // #FAFF00
		"--color-warning-600": "225 230 0", // #e1e600
		"--color-warning-700": "188 191 0", // #bcbf00
		"--color-warning-800": "150 153 0", // #969900
		"--color-warning-900": "123 125 0", // #7b7d00
		// error | #C33C54 
		"--color-error-50": "246 226 229", // #f6e2e5
		"--color-error-100": "243 216 221", // #f3d8dd
		"--color-error-200": "240 206 212", // #f0ced4
		"--color-error-300": "231 177 187", // #e7b1bb
		"--color-error-400": "213 119 135", // #d57787
		"--color-error-500": "195 60 84", // #C33C54
		"--color-error-600": "176 54 76", // #b0364c
		"--color-error-700": "146 45 63", // #922d3f
		"--color-error-800": "117 36 50", // #752432
		"--color-error-900": "96 29 41", // #601d29
		// surface | #222823 
		"--color-surface-50": "222 223 222", // #dedfde
		"--color-surface-100": "211 212 211", // #d3d4d3
		"--color-surface-200": "200 201 200", // #c8c9c8
		"--color-surface-300": "167 169 167", // #a7a9a7
		"--color-surface-400": "100 105 101", // #646965
		"--color-surface-500": "34 40 35", // #222823
		"--color-surface-600": "31 36 32", // #1f2420
		"--color-surface-700": "26 30 26", // #1a1e1a
		"--color-surface-800": "20 24 21", // #141815
		"--color-surface-900": "17 20 17", // #111411
		
	}
}