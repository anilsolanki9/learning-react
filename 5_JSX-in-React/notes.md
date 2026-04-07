# JSX in React

- React is all about Components, and a component is mad up of JSX code.
- JSX (JavaScript XML)
- It allows to write HTML elements in JavaScript, and place them in DOM without createElement() or appendChild

- JSX is converted into React.createElement()
- JSX is syntactical sugar for writting React.js components easily
- JSX => JS me HTML likhna

eg.

```jsx
React.createElement("h1", null, "Helo World")
// is same as
<h1>Helo World</h1>
```

- Code gets converted into -> react.element -> That is then reconcialiated -> Then rendred to UI
- To compile react code, it uses Babel compiler

- We can see react element by console log

```jsx
console.log(React.createElement("h1", null, "Helo World"));
```

# Note

- React Component can only return one react element,
- We must close every tag, for self closing tags use `<img src="" />`. For normal `<h1></h1>`
