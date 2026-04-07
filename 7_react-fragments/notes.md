# React Fragments

- Why we need react fragment

- We know a react component can't return multiple element, it must have one single parent.
- We can bypass this rule, by returning Array of elements with keys

eg.

```jsx
return [<p>...</p>, <h2>...</h2>];
```

- But its tedious, so in react v16, fragments were introduces. Which allow components to return multiple elements without adding extra parent node to the DOM.
  eg.

```jsx
import { Fragment } from "react";

return <React.Fragment>...</React.Fragment>;

//or

return <Fragment>...</Fragment>;
```

OR shorthand

```jsx
return <>...</>;
```

# Why we cant return multiple elements?

- JSX element are converted into object, So as from a function we can;t export more then one object, same with JSX we cant return multiple React Elements
