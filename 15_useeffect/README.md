# useEffect

- react rendering process => creates UI (Visible on screen)
- Iske parrallaly hme or bhi kai tasks parrallaly krne hote hai, jis se frontend rendering dirturb na ho but side me ye tasks bhi chalte rhe

## eg. of tasks needed to run in side stack

- API call
- dom manipulation krna
- settimemout lgana
- interval me kam krna

eg.

- react rendering process => A big truck runing on the main road (covering complete space of road)
- useEffect => Make us able to run tasks on side stack, its like a footpath jispe se we can walk, so main truck keep running, and we perform side stack.
- useEffect function, component ki rendering complete hone ke bad side stack me chalta h.
- Jab bhi component render hota h, uske andr ka useeffect chalta h,
- Jab jab useState variable change hota h, wo component fir se render hota h, so basically
- useeffect two times chalta h => Jab jab state variable change hota h, jab jab component re rnder hota h.

- So jab jab state variable change hota h, ta tab useEffect side stack chala skte h.
-

(Mounting ?)

- useEffect me agr , dependency arrat nahi diya to => Run when component renders , state change
- useEffect me agr, dependency array empty diya, => sirf ek bar chalega, component ke render hone pe.
- useEffect me agr, dependency array me state variable diya, to -> render pe chalega, and us variable ki state change pe bhi


- unMount  => event listner htana, 
