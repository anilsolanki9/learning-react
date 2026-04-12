# Redux Toolkit Architecture (RTK)

- Redux Store => Centralized data jaha saved h

```bash

UI Layer
Theme:light
change theme btn
->
Event handler chlega -> Event dispatch
->
Action
->
Redux Store -> Action Dispatch -> Reducer -> Upodate state
->
UI Update
```

Event dispatch hone pe action aage jaega, redux store me ayega, yaha pe reducer function hote h (multiple), Vaha se state update hogi, Then UI Update hoga.

Reducer functions => Iske andr hme jo action perform krvana hai, wo perform krenge.

Eg.
Theme state h
Btn click pe event chalega
Action Redux store pe jaega
Reducer function chlega, then state update hogi,
Then UI Update hogi

---

