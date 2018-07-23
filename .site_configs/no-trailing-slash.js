'use strict';

const path = require('path');

module.exports = {
	title: "Yu Zhanbei's Site",
	inputDir: path.resolve(__dirname, '..'),
	outputDir: path.resolve(__dirname, '../.site'),
	mdPageTemplate: path.resolve(__dirname, 'github/no-trailing-slash-templates/page.ejs'),
	mdPageTemplateName: 'page.ejs',
	mdListTemplate: path.resolve(__dirname, 'github/no-trailing-slash-templates/list.ejs'),
	mdListTemplateName: 'list.ejs',
	assetsDir: path.resolve(__dirname, 'github/assets'),
	// Filter out some files or folders.
	nameFilters: [(name) => name.startsWith('_reserve'), (name) => name === 'backups'],
	nameConverter: (name) => name.toLowerCase(),
	// Whether to generate site in the no-trailing-slash mode.
	noTrailingSlash: true,
	folderIndexConversion: true,
};