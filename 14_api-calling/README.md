# API

- Frontend <---data---> API <---data---> Backend
- Frontend => Visual
- Backend => Functionality

- Backend se daata JSON(JavaScript Object Notation) format me Frontend pe aata hai.
- Frontend pe data render hoke, User ko dikhta hai.

- API call can be managed using `fetch` or `axios`
- fetch => inbuild web api
- axios => third party api calling tool with extra features

- JSON placeholder API

- Promise => API call krne pe initially pending pe hoti h, then wo resolve ya reject hoti h.

API call promise deti hai.

---

# Fetch api call

- isko manage krne ke liye async await use kr skte h.

```jsx
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
};
```

- then catch bhi use kr skte h.

```jsx
const getData = () => {
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
  response
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
```

Output

```js
{
  completed: false;
  id: 1;
  title: "delectus aut autem";
  userId: 1;
}
```

---

# axios api call

- npm i axios

async await se

```js
const getData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res.data);
};
```

then catch se

```js
const getData = () => {
  const response = axios.get("https://jsonplaceholder.typicode.com/users");
  response.then((res) => console.log(res.data)).catch((err) => console.log(err));
};
```

---

