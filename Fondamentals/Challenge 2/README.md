## Part 1
1. Create a New Component
###
Create a new file called `JSXRules.jsx`.

Inside this file, write a functional component called `JSXRules`.
The component should return a `<div>` containing the following:
- A `<h1>` element with the text "JSX Rules".
- A paragraph (`<p>`) that lists at least 3 rules of JSX:
    - JSX must return a single parent element.
    - JSX elements must be properly closed.
    - JSX attributes are written using camelCase (e.g., className instead of class).
2. Run the project
- Register `JSXRules` in your `App.jsx` and run the app 

## Part 2
1. Converting HTML to JSX
```html
<h1>Todos</h1>
<img 
  src="https://i.imgur.com/src.jpg" 
  alt="Person" 
  class="photo"
>
<ul>
    <li>Invent new traffic lights </li>
    <li>Rehearse a movie scene </li>
    <li>Improve the spectrum technology </li>
</ul>
```