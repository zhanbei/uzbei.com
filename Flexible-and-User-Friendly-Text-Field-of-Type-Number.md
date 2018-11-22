# Flexible and User-friendly Text Field of Type Number

<!--
```yaml
metadata: true
date: 2018-08-11T21:03:39+0800
dates:
    - 2018-11-22T10:49:46+0800
titles:
    - Flexible and User-Friendly Text Field of Type Number
    - Flexible and Convenient Text Field of Type Number
    - Flexible Text Field of Type Number with Notice and Suggestions
    - Flexible Text Field of Type Number with Suggestions
    - Flexible and Convenient Text Field of Type Number
    - Text Field of Type Number with Suggestions
    - Text Field of Type Number with High Flexibility and Convenience
keys:
    - Flexible-and-User-Friendly-Text-Field-of-Type-Number.md
    - Flexible-Text-Field-of-Type-Number-with-Suggestions.md
```
-->

An HTML `<input>` accepts user's input and the
[`input` type](https://www.w3schools.com/html/html_form_input_types.asp)
describes the type of the value of an input,
hence the `input` may accept different formats of text and/or number.
For some inputs with different types, the displayed values may differ from their real values,
for example, an `input` expecting a `number` value which stands for Monday to Sunday.

Often a selection will help,
but it can be tedious when there comes lots of values to be selected in some cases,
and reducing the number of values may hurt the flexibility of the application and therefore provide users a not cool experience.

This post tries investigating how to implement a kind of `input`, or `Text Field` for such a use case.

## Text Field of Expiration

<!-- > 2018-08-10T22:20:42+0800 -->

> How to implement a text field of expiration with a high degree of flexibility?

The most straightforward way is providing a text field
and allow the user to input the expiration in seconds whatever they prefer,
which has a maximum flexibility but may not be used
since its inconvenience to convert time to seconds manually.

The following describes some values in the format of "`Displayed Value` -> `Real Value`" in different designs of components.

- **Text Field**
	- `+${input}` -> `+${input} * 1000`
- **Selection**
	- Forever -> -1
	- Five Minutes -> 5\*60
	- An Hour -> 60\*60
	- A Day -> 24 \* 3600
	- A Week -> 7 \* 24 \* 3600
	- A Month -> 30 \* 24 \* 3600
	- A Year -> 365 \* 24 \* 3600
- Multiple **Text Fields**
	- Break the target value down into multiple parts of fields.
	- Multiple `Text Fields` being used to edit parts of fields.
	- Each *Text Field* has its own properties.
		- Default Value
		- Limitations
		- Input Type
		- Displayed Value
		- ...
- **Text Field** of *Real Value* with **Notice** `Technical`
	- Display the *real value* in the text field.
	- Display the *resolved value* elsewhere as notice.
		- Changes following the real value <span style="color: gray">in gray color</span>.
	- Edit the real value directly being notice.
	- May not be convenient to convert time to seconds anyway.
- **Text Field** of *Resolved Value* with **Notice** `User-Friendly`
	- Like the
	[html input(type="month")](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_month)
	shown,
	the real value is hidden,
	but in this solution, we show the real value along with the resolved value.
	- Display the *resolved value* in the text field.
	- Display the *real value* elsewhere as notice.
		- Parse the *resolved value* to get the real value.
		- Emit error and use the default value if any when parsing the *resolved value*.
		- Changes following the resolved value <span style="color: gray">in gray color</span>.
	- Edit the resolved value directly.
	- May not be convenient to edit the resolved value in some cases.
- **Selection** + an additional **Text Field**
	- Use the `Text Field` for the flexibility
	- Use the `Selection` for the convenience.
	- Bad User Experience
- **Text Field** + additional **Suggestions**
	- Use the `Text Field` for the flexibility
	- Use the `Suggestions` for the convenience.
	- Kind of Good User Experience

## References

- [HTML Input Types](https://www.w3schools.com/html/html_form_input_types.asp) -
HTML - W3Schools
- [HTML &lt;input&gt; type Attribute](https://www.w3schools.com/tags/att_input_type.asp) -
HTML - W3Schools
- [Demo of HTML input type="month"](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_month) -
HTML - W3Schools
