# Components in React js

- Componet is a Javascript function, that return a JSX element.
- Its a syntax extension that allows us to write HTML like code in JavaScript.
- Components are building block ofevery React Application.
- Component is a reusable piece of code.
- For React component we create file with extension `.jsx`

# Ways to create Component

- Class Based component => Older way to create components, before functional components came into existance.
- Functional Components => Modern way of creating Reactjs components. These are nothing but a function that return JSX code (React element).

```jsx
// Class Based components
import { Component } from "react";

export class Welcome extends Component {
  render() {
    return <h1>Hello, your name</h1>;
  }
}
```

```jsx
// Functional components
import React from "react";

const App = () => {
  return <div>App</div>;
};

export default App;
```

---

React functional component can be used by

- {App()}
- or
- <App />
