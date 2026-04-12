- 404 animations ke liye,
- lottiefiles
- ya fir codepen se 404 page utha lo.

- Nested route
  /product/men

m1 (Basic)
ALag se routes bna do

```js
<Route
    path="/product"
    element={<Product />}
  />

  <Route
    path="/product/men"
    element={<Men />}
  />

  <Route
    path="/product/women"
    element={<Women />}
  />
```

m2- child routes bnao

```js
<Route
  path="/product"
  element={<Product />}
>
  <Route
    path="men"
    element={<Men />}
  />

  <Route
    path="women"
    element={<Women />}
  />
</Route>
```

But in child routes ko dekhne ke liye, Outlet chalana pdega, parent ke andr

- Dynamic routes -> /cources/:id
- id ko access kr skte h useParams se

- usenavigate() => Koi action hone pe reouting krne ke liye, like fn call pe, btn click pe etc., login hone pe etc

```js
const navigate = useNavigate();

function btnClick() {
  // navigate("/"); // to go to home
  navigate(-1); // to go back
}
```


