Data passsing though props drilling to multi level nested coponents data flow, its hectic and not manageable.

So we make data globaally available to complete application. We use contextAPI for this.

Reduc too is used to do data centralization.
and state management among complete App.

# Use Context

Require three things

- create context
- context provider
- use context

Creating context => Making data globally available
Context Provider => This make data globally accessbible
Use Context => Using the context data

children element in props -> We get it when we pass the element as child of component
eg.

```jsx
<Navbar>
  <h1>jejej</h1>
</Navbar>
```

we get this h1 as a child of Navbar in the props, we can pass multiple eements, children is like an array of elements, is multiple elements are passed.
-> single child => Object
-> multiple child => Array of objects

- We create multiple conetxts
  folder banao -> context
  usme ek file banao -> ThemeContext.jsx

And us ThemeContext se App ko wrap kr do.
Theme context me children acept kro, and use kro.
T

- Theme context me ek ThemeDataContext banao, createContext
- return krte waqt,
- `<ThemeDataContent.Provider value={[theme, setTheme]}>{children}</ThemeDataContent.Provider>`

So ThemeContext => the file which we are using to wrap App
ThemeDataContext => actual context
ThemeDataContext.Provider => Context Provider

- ThemeDataContext ko named export kro
- Jaha use krna h vaha `const data = useContext(ThemeDataContext);` kr do

# Context Short Summary

- Create an contect file eg. ThemeContext
- Tn it run rafce,
- Wrap `<App/>` by `<ThemeContext></ThemeContext>`
- Accept App as children in ThemeContext.
- Create ThemeDataContext using createContext, and named export it
- return 
- `<ThemeDataContext.Provider value={[theme, setTheme]}>{props.children}</ThemeDataContext.Provider>`
- Jaha pe context data use krna h vaha, useContext(ThemeDataProvider) krke data save krke use kro.


