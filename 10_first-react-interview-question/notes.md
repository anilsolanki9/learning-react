eg.

```jsx
const students = [];

return (<>
    <p>{students.length && "No students Found}</p>
    <p>Number of students : {students.length}</p>
    </>)
```

- && returns first false value, 0 is false value so 0 is returned.
- Note -> React does not display false, null, undefined, NaN, values in the DOM. If these values are used in JSX then nothing is displayed.
- 0 and "" are exceptions.
- 0 is rendred because it is considerd a valid Reat Node.

In this question to work properly insteed of && we must use || operator.
Or we can do
`<p>{students.length === 0 && "No students Found}</p>`
OR
`<p>{!students.length && "No students Found}</p>`
OR
`<p>{!Boolean(students.length) && "No students Found}</p>`


