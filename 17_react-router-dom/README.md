# React router dom

- types of routers
- `BrowserRouter` (uses History API, Client based routing)
  eg
  sheryians.com => /
  sheryians.com/cources => /cources
  sheryians.com/about => /about

- `HashRouter` (Route ke beech me hash aa jata h)
- eg.
  sheryians.com => /#/
  sheryians.com/cources => /#/cources
  sheryians.com/about => /#/about

- HistoryRouter
  (Experimental)

- MemoryRouter (used to save in memory)

- Static Router (To generate static websites)

# BrowserRouter

m-1
import {BrowserRouter} from 'react-router-dom'
wrap `<App />` by BrowserRouter
create Routes, then Route, define path & element , creates pages/ element components

Routes ke bahar ka element same hi rhea, Routes ke andr vala content hi page route ke hisab se change hoga.

Page ko routing krne ke liye `<a href="/about">About</a>` kr skte . ye /about route pe le jaega
Is se reloading hogi page route pe, Isliye, we use Link
`<Link to="/about">About</Link>`

- Nested Routes
- Dynamic Routes
- UseNavigate
- 404 page Route
