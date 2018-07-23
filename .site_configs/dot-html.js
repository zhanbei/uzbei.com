const path = require('path');
const configs = require('./no-trailing-slash');

module.exports = {
	...configs,
	outputDir: path.resolve(__dirname, '../.site_test'),
	mdPageTemplate: path.resolve(__dirname, 'github/dot-html-templates/page.ejs'),
	mdListTemplate: path.resolve(__dirname, 'github/dot-html-templates/list.ejs'),
	noTrailingSlash: false,
};
