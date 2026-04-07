# Conditional values in JSX

- On the basis of a condition we can either return an JSX element early, or use ternary operator to perform conditional rendering.

eg.

```jsx
const age = 21;

return <p>{age >= 18 ? "You are adult" : "You are minor"}</p>;
```

```jsx
const username;

return <p>{username || "Guest"}</p>; // Guest value work as Fallback value
```

## Conditional rendering

- M-1 : Render and return diff code for diff values. XX (Not good, Repeatitive)
- M-2 : Using `{ }` with ternary operator in it. (Good)
- M-3 : Create a variable, give it a default value, If a condition is fulfilled then, reassign different desired value to the variable. And use the value in return code.
- M-4 : Create function, call the function in `{ }`
