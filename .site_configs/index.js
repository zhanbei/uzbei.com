'use strict';

const path = require('path');
// The selected templates.
const templates = require('./github/no-trailing-slash-templates/configs');

module.exports = {
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
	noTrailingSlash: templates.noTrailingSlash,
	// Generate site in the trailing-slash mode, if true and !noTrailingSlash.
	trailingSlash: templates.trailingSlash,

	assetsDir: templates.assetsDir,
	mdPageTemplate: templates.mdPageTemplate,
	mdListTemplate: templates.mdListTemplate,
};
