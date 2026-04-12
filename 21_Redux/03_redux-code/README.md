slices => features we want in our App. eg. like, comment, share, dislike etc.

reducer ka data accissble krane ke liye, store se wrap krna pdega.

```jsx
<Provider store={store}>
  <App />
</Provider>
```

Jisko bhi data ki jrurt hogi wo, slices ka use krke use kr lega.

useDispatch, useSelector

useDispatch =>  Kam krane ke liye
useSelector => UI me dikhane ke liye
