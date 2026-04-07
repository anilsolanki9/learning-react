# Dyanamic Values in JSX

- We can add variable/JS expression value in jsx using `{ }`
- So JSX is react ki duniya, and JS ke code ke liye, hme JS ki duniya me jana pdega and `{ }` is gate for JS ki duniya.

```jsx
function MyComponent() {
  const name = "Anil";

  return <p>Hello, {name}!!</p>;
}
```

- `{ }` ke beech me hum JS expressions likh skte h. Curly braces in JSX must return a value, that value can be an html element also.
- Means curly braces ke beech me we can write expressions, operations, function calls, other js expressions, that produces a **value**.

