'use strict';

const path = require('path');
// The selected templates, which will override the default configs.
const templates = require('./github/templates/configs');
// The selected mode, which will override the default configs.
const mode = require('./github/no-trailing-slash-templates/configs');

// The default configs for the markdown site.
const configs = {
	title: 'Yu Zhanbei\'s Site',

	inputDir: path.resolve(__dirname, '..'),
	outputDir: path.resolve(__dirname, '../.site'),

	// Filter out some files or folders.
	nameFilters: [
		(name) => name.startsWith('_reserve'),
		(name) => ['backups', 'README.md', 'Drafts'].includes(name),
	],
	nameConverter: (name) => name.toLowerCase(),

	// Generate site in the no-trailing-slash mode, if true.
	noTrailingSlash: false,
	// Generate site in the trailing-slash mode, if true and !noTrailingSlash.
	trailingSlash: false,

	// The default configures used, which will be override by selected templates and mode.
	assetsDir: path.resolve(__dirname, 'not-existed/assets'),
	mdPageTemplate: path.resolve(__dirname, 'not-existed/templates/page.ejs'),
	mdListTemplate: path.resolve(__dirname, 'not-existed/templates/list.ejs'),
};

module.exports = Object.assign(configs, templates, mode);
