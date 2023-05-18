module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'files': [
		'*.js', '*.rep.js', '*.bs.js', '*.mw.js', '*.util.js', '*.ctrl.js', '*.cfg.js', '*.mtt.js'
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'space'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		// TODO: remover quando for necessário
		'no-unused-vars': 'off' 
	}
}
