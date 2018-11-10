'use strict';

const newExtension = (name, description, webStore, rating, rates, users, github, stars, forks, by) => ({
	name, description,
	// The average rating out of 5; the number of users rated; the number of users.
	webStore, rating, rates, users,
	github, stars, forks,
	// Author or offered by.
	by,
});

// Convert int to comma-separated string.
const itoa = (int) => int >= 1000 ? `${Math.floor(int / 1000)},${int % 1000}` : `${int}`;

const sections = [{
	name: 'General',
	extensions: [
		newExtension(
			'Vimium',
			// 2018-11-10T20:28:31+0800
			'Vimium is a Chrome extension that provides keyboard-based navigation and control of the web in the spirit of the Vim editor.',
			'https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb', 4.8, 4470, 304527,
			'https://github.com/philc/vimium', 9862, 1196,
			'Phil Crosby, Ilya Sukhar',
		),
		newExtension(
			'Markdown Here',
			// 2018-11-10T20:28:31+0800
			'Write your email in Markdown, then make it pretty.',
			'https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa', 4.5, 333, 87396,
			'https://github.com/adam-p/markdown-here', 33279, 5608,
			'Adam Pritchard',
		),
	],
}, {
	name: 'Github Related',
	description: 'Extensions that make browsing Github.com more productive.',
	extensions: [
		newExtension(
			'GitHub Repository Size',
			// 2018-11-10T20:28:31+0800
			'Automatically adds repository size to GitHub\'s repository summary.',
			'https://chrome.google.com/webstore/detail/github-repository-size/apnjnioapinblneaedefcnopcjepgkci', 4.7, 41, 7850,
			'https://github.com/harshjv/github-repo-size', 464, 54,
			'Harsh Vakharia',
		),
		newExtension(
			'Octotree',
			// 2018-11-10T20:30:46+0800
			'Extension to show code tree for GitHub. Awesome for exploring project source without having to pull every single repository to your machine.',
			'https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc', 4.9, 887, 203735,
			'https://github.com/ovity/octotree', 13921, 1160,
			'Buu Nguyen',
		),
	],
}];

let out = '';
for (let i = 0; i < sections.length; i++) {
	const section = sections[i];
	out += `## ${section.name}\n\n`;
	if (section.description) {out += `${section.description}\n\n`;}

	// Rendering extensions.
	for (let ii = 0; ii < section.extensions.length; ii++) {
		const ext = section.extensions[ii];
		out += `- ${ext.name} - [\n`;
		out += `[Github](${ext.github}) \`${itoa(ext.stars)}\` Stars |\n`;
		// out += `[WebStore](${ext.webStore}) - **${ext.rating}** / 5 Rating - **${itoa(ext.rates)}** / ${itoa(ext.rates)} Rates\n`;
		out += `[WebStore](${ext.webStore}) - Rating(**${ext.rating}**/5) - Rates(**${itoa(ext.rates)}**/${itoa(ext.rates)})\n`;
		out += `]\n\n\t> ${ext.description}\n\n`;
	}
}

console.log();
console.log('Rendered Content:\n');
console.log(out);

