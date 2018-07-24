# How to Start a Project

<!--
```yaml
metadata: true
date: 2018-07-03T15:56:56+0800
titles:
    - How to Start a Project
    - Start a Project
    - Workflow of a Project
keys:
    - How-to/Start-a-Project.md
```
-->

Start a new project easily and fast.

## Name a Project

<!-- > 2018-05-05T17:22:05+0800 -->

It becomes harder to change a project name as time goes on, so naming a project is worthwhile considering and discussing.

Start a section in the `drafts.md` and start composing the README for a project while considering the name; then create a project folder using the name and move the README document in.

## The Format of a Project Name

I personally follow the following rules:

- For **Go libraries**, lower-cased words connected by '-' are prefered.
	- The lower-cased words are used since the project name is often used as package name in codes.
	- The hyphen mark '-' is used to join multiple words to improve the readability.
- For most **applications**, upper-cased words connected by '-' are prefered.
	- The upper-cased words are used because:
		- the applications are less likely be included to other places.
		- it is easy to read especially when they are displayed in showcase.
	- Again the hyphen mark is added to improve the readability.
- For other libraries like **node modules**, lower-cased words connected by '-' are prefered.
	- The lower-cased words are used because it is likely to be included or be imported as dependency in codes.
	- Again the hyphen mark is added to improve the readability.


## Write a README Document

<!-- > 2018-07-03T16:22:26+0800 -->

A README is important for beginners/users/others to come to understand, get started with, and/or consider to support the project.

Here is a simple structure of README:

<!-- - Name and Keywords -->
<!-- - the names for the project or related and similar project. -->
- Description
- Motivations
	- Note the original motivations or the reasons that drive you to start the project originally and what the project may do.
	- Structure
		1. Context
			- the moment that you really or virtually need something.
		1. Solution
			- what exactly you think could help you.
		1. Features
			- what features you need for your solution to make it complete and more usable.
- Solutions and Goals
	- what the project does and aims for.
- Project Domains
	- Consider primary and potential domains.
- Content Structure
	- Management content and maintain structure.
- References
	- projects or other resources referred.

This is not only suitable for a project but also for a feature of any project to make it real from zero. It is not the standard project framework but the original motivations and purposes can be found as references when the project goes bigger.

<!-- Warning -->
This can be misleading if your project goes *bigger*. You have to upgrade your project documentation in the right and standard way.

## Some Formats of Writing Documents

- Outlines of Something
	- `[${module-name}](/${module-path})`
		- [`${some-state}`] **${module-name}**
		- [`${some-state}`] ${actions-to-be-done}
	- `[Sign-In](/sign-in)`
		- [`Not-Signed-In`] **Sign-In-Panel**
		- [`Already-Signed-In-Without-Linked-Account`] Hint to create a user(Individual) account.
	- `[${module-name}](/${module-path})`
		- **${module-name}** [`${some-state}`]
		- ${actions-to-be-done} [`${some-state}`]
	- `[Sign-In](/sign-in)`
		- **Sign-In-Panel** [`Not-Signed-In`]
		- Hint to create a user(Individual) account. [`Already-Signed-In-Without-Linked-Account`]
