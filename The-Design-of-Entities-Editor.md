# The Design of Entities Editor

<!--
```yaml
metadata: true
date: 2018-10-29T15:41:03+0800
titles:
    - The Design of Entities Editor
    - Some Implementations of Entities Editor
keys:
    - The-Design-of-Entities-Editor.md
    - Some-Implementations-of-Entities-Editor.md
```
-->

The design of entities editor.

To create/update an entity, an *Entity Editor* should support all kinds of fields,
including the *Entities Editor*.

## Tasks and Goals

The *Entities Editor* is responsible for the following tasks:

> The mark "`- [x]`" stands for "often being required" while "`- [ ]`" means "often being optional".

- [x] Edit An Existed Entity
- [x] Delete An Existed Entity
- [x] Append New Entity
- [x] Sort Existed Entities
- [ ] Insert/Unshift New Entity
- [ ] Duplicate An Existed Entity

In addition, it would be better to be responsive and mobile compatible.

## Component Properties

The `props` of the component implemented with *React*.

- onChange `({target: {id, value} = {}} = {}) => { ... }`
- value `[{...}, {...}]`

## The Combination of a Bunch of Entity Editors

The entities editor can be seen as a module consisting of *a bunch of entity editors* which take care for their own entities,
with the responsibility to add new empty entity and to sort the existed entities.

However, with a list of editors may be a bit complicated.

## List of a Bunch of Entities with a Single Entity Editor

Pop a dialog of entity editor for *desktop*
and start a new page of the entity editor for *mobile*.

- Entity A
- Entity B
	- Click to Edit B `[hover/focus]` `[mobile]`
		- (New-Page) Editor to Edit B
			- (Button) Save B
			- (Button) Delete B
	- (Button) Edit B `[hover/focus]` `[desktop]`
		- (Dialog) Editor to Edit B
			- (Button) Save B
	- (Button) Delete B `[hover/focus]` `[desktop]`
- Entity C
- Entity D
- Entity E
	- (Button) Drag to Sort E `[desktop]`
	- (Button) Move E Up `[mobile]`
	- (Button) Move E Down `[mobile]`
- Entity F
- Entity G
- Entity H
- (Button) Add Entity
	- (Dialog/New-Page) Editor to Create New Entity
		- (Button) Create Entity
		- (Button) Discard Entity
