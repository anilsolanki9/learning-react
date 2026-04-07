# Introduction to React.js

- Javascript Frontend Library to create User Interface.
- Used to create SPA
- Created by Jordan Walke at Meta

## History of React.js

- Created by Meta as an internal tool for dynamic components of Facebook.
- Initially React faces criticism for combining HTML and JavaScript, that destroys seperation of concerns.
- Slowly it became famous.

- React is a JS Library not a framework.
- It can be called as React or ReactJS or React.js all are same.
- React is widely used for creating Awesome User Interface.

- React is all about Components,
- React is based on a concept - Don't repeat Yourslef (Dont repeat Code).
- A website reuses components a lot. And those coponents can have dynamic data.

## React is Declarative

- It describes what the UI should look like, rather than how to acheive it.
- This makes the code easier to read and maintain, as it is more focused on the end result rather than the steps involved in getting there.
- React is `Declarative`, JS is `Imperative`

eg. How Declartive nature of React works

```jsx
function MyComponent({ name }) {
  return <div>Hello, {name}!</div>;
}
```

eg. Same thing in JS, it is done using Imperative Nature

```js
function myComponent(name) {
  const element = document.createElement("div");
  element.textContent = `Hello, ${name}!`;
  return element;
}
```

---

## React Workflow

- A component use at a code, is called component Instance. Eg. Card component used to create cards. These Instanced are converted into React Elements (Virtual DOM), then after reconciliation, Browser DOM elements are created
- Reconciliation => Diffing Algorithm to update UI. New virtual DOM vs OLD Virtual DOM, diff is checked and only the diffs are updated in Browser DOM.

```bash
Component -> Instances -> React Element -> (Reconciliation) -> DOM Element -> Final UI
```

## Why Reactjs over Vanilla JavaScript

- In Vanilla JS seperation of concerns was based on Files (index.html, style.css, index.js)
- In ReactJs seperation of concerns is based on Components. (React Component combines HTML, CSS, JS in it.), So now a components html, css, js are stored seperately. So its easier to update and debug components.

## Why ReactJS

- Worlds most popular JS Library.
- Component based architecture
- Declrative UI
- Rich Exosystem (npm packages)
- Strong Community Support.

---

## How to install React v19

- If we install react using `$npm i react` , Then we get latest react version v19.0.0
- Using vite too we can install react v19.
- Comand => `npm create vite @latest`

- To install latest react, and react-dom versions
- `npx npm-check-updates` => Checks the updated versios
- `npx npm-check-updates -u` => Checks the updated version and Install the Updates
- `npm install` => To install latest dependencies.
