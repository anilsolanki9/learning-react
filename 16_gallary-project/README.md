`axios.get("api url") => to get the data`

To Post data to backend

```js
axios.post("api url", {
  username: "Anil solanki",
  password: "181917@Agaya",
});
```

To Update any data on api location

```js
axios.patch("api url");
```

axios.delete() => To delete any data on backend

---

api se aya data => setUserData , userData

```js
let printUserData = "No user available";

if (userData.length > 0) {
  printUserData = userData.map((elem, idx) => {
    return (
      <Card
        elem={elem}
        key={idx}
      />
    );
  });
}
```

ek variable banao, usme loading vala cod likho do,

array me data aa jane ke bad (length > 0) hone pe us variable ka data map krke change kr lo.

return me {variable} kr do.
agar data nahi aya hoga tab loading vala code, otherwise variable vala code.

# Pagination

- Pages ko manage krna,
- API should support pagination, otherwise hme complete data ko cut ktna pdega, slice se.
- btn clicks pe pg number ++, ya -- kro

# Infinite scrolling

- scroll ke basis pe api call.
- limit ko badhana h , prev 10, next 10 + 5 => 15, then 15 + 5 => 20 etc.
- Library =. React-pagination ka use kr skte h.
- Manual page loading chalu kro.

