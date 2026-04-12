- Redux is a seperate tool then React
- Redux can be even used with html, css, js

# Why we need React

- React was used to create UI, (Fast performance, scaleable UI)
- React have some problems,
- **State management** was a problem. eg. If we have an UI, we want to update UI (change user name from Anil to Sarthak) on a btn click , its called state management.
- React me updation pe sirf woh changed component hi change hota h. fine
- React me data `parent -> child` , ke liye we were doing `props drilling`.
- Props drilling me data always goes from top to bottom.
- We can pass data from bottom to top using function calls in child components which are defined in parent component.
- Data passing like this is a serious mess.

---

- Around 2015, Redux tool was created (At this time contextAPI was not created). Redux was made for
- data centralizing
- state management
- Redux was also having problem,
- Its syntax was very bad very complex. Boilerplate was very long, setup was very time taking.
- Redux 2.0 was created, which was Redux Toolkit. Syntax was made simpler.

---

- Data passing like : App -> Header -> Navbar -> h1 (Very bad)
- To pass data directly we created a cetralized system, and made data globally available, anyone which require it can use it.
