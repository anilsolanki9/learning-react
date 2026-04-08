# 0.2 JavaScript (ES6+) - React ke liye Must-Know Concepts 🚀

> **Bhai, ek baat samajh lo** - React sikhne se pehle yeh JS concepts _must_ hain. Warna React mein ghusoge toh lagega andheri raat mein bina torch ke jungle mein ho. 🔦

---

## 1. Variables - `let`, `const`, `var`

### 🧠 Simple Explanation (ELI5)

Variable ek **dabba** hai jisme tum koi cheez rakh sakte ho. Lekin teen tarah ke dabbe hain - ek lock hota hai, ek nahi, aur ek purana tuta hua dabba jo kabhi kabhi kuch bhi kar deta hai 😅

### 🏠 Real-World Analogy

| Variable | Analogy                                                                      |
| -------- | ---------------------------------------------------------------------------- |
| `const`  | Aadhaar Card - ek baar ban gaya, **change nahi hoga**                        |
| `let`    | Pencil se likha hua naam - **badal sakte ho**                                |
| `var`    | Woh purana dost jo **kabhi bhi, kahin bhi** ghus aata hai - no boundaries 😤 |

### 🔍 Core Concepts Breakdown

**Scope** - Variable kahan tak "dikhta" hai

- `var` → **Function scope** (ya global) - dangerous hai
- `let` → **Block scope** `{}` ke andar hi rehta hai
- `const` → **Block scope** + reassign nahi kar sakte

**Hoisting** - `var` declarations upar "uth" jaati hain mentally, lekin value nahi. `let`/`const` bhi hoist hoti hain lekin **Temporal Dead Zone** mein rehti hain (matlab use karo toh error).

```javascript
// ❌ var ka nautanki behavior
console.log(name); // undefined (error nahi! 😱)
var name = "Rahul";

// ✅ let ka sahi behavior
console.log(age); // ❌ ReferenceError - bilkul sahi!
let age = 25;
```

```javascript
// Block scope demo
{
  let blockVar = "Main andar hoon";
  var globalVar = "Main bahar bhi hoon 😈";
}

console.log(globalVar); // ✅ "Main bahar bhi hoon"
console.log(blockVar); // ❌ ReferenceError - sahi hai!
```

```javascript
// const ke saath object/array UPDATE ho sakta hai, reassign nahi
const user = { name: "Arjun" };
user.name = "Vikram"; // ✅ allowed - property change
user = { name: "Vikram" }; // ❌ TypeError - reassign nahi!

const nums = [1, 2, 3];
nums.push(4); // ✅ allowed
nums = [1, 2]; // ❌ nahi hoga
```

### ⚠️ Common Mistakes

- `var` use karna 2024 mein - **bhai, mat karo**. `var` sirf legacy code mein milega.
- `const` = immutable samajhna - const sirf **binding** lock karta hai, andar ka data nahi.
- `let` ko loop ke bahar declare karna jab zaroorat nahi.

### 🏭 Real World Use Cases

- `const` → React mein **hamesha** use hoga (functions, components, imports sab `const`)
- `let` → Loop counters, conditionally changing values
- `var` → **Production mein avoid karo** - sirf purane codebases mein milega

---

## 2. Arrow Functions & Template Literals

### 🧠 Simple Explanation (ELI5)

**Arrow Function** - Normal function likhne ka **shortcut** hai. Jaise WhatsApp pe "k" likhte ho "okay" ki jagah. 😄

**Template Literal** - String mein variable daalne ka smart tarika - `+` operator se chutkara!

### 🏠 Real-World Analogy

- Normal function = Full formal letter likhna
- Arrow function = WhatsApp message - chhota, fast, kaam ka

### 🔍 Core Concepts Breakdown

```javascript
// Normal function - purana style
function greet(name) {
  return "Hello " + name;
}

// Arrow function - naya style ✨
const greet = (name) => {
  return "Hello " + name;
};

// Aur bhi short - single expression ho toh
const greet = (name) => "Hello " + name;

// Single parameter - parentheses bhi optional
const double = (n) => n * 2;

// No parameters - empty parens zaroori
const sayHi = () => "Hi!";
```

> **🔑 Important** - Arrow functions ka apna `this` nahi hota. Yeh React mein bohot important hai!

```javascript
// Template Literals - backtick ` use karo
const name = "Priya";
const age = 22;

// Purana tarika 😩
const msg1 = "Mera naam " + name + " hai aur main " + age + " saal ki hoon.";

// Naya tarika ✨
const msg2 = `Mera naam ${name} hai aur main ${age} saal ki hoon.`;

// Expression bhi daal sakte ho
const result = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"

// Multi-line string
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;
```

### ⚠️ Common Mistakes

```javascript
// ❌ Object return karte waqt - confusing syntax
const getUser = () => {
  name: "Raj";
}; // Yeh OBJECT return nahi karega!

// ✅ Object return karna hai toh extra parens lagao
const getUser = () => ({ name: "Raj" }); // ✅ Sahi hai
```

### 🏭 Real World Use Cases

- Arrow functions → React mein **everywhere** - event handlers, array methods, components
- Template literals → API messages, dynamic strings, HTML generation
- **Production mein heavily used** - yeh skip mat karna!

---

## 3. Destructuring - Objects & Arrays

### 🧠 Simple Explanation (ELI5)

Ek bada dabba (object/array) hai jisme bohot saari cheezein hain. Destructuring matlab - **directly woh cheez nikaalo jo chahiye**, poora dabba mat uthao. 📦

### 🏠 Real-World Analogy

**Object Destructuring** = Amazon package aaya, tumhe sirf charger chahiye tha - poora box nahi uthaya, seedha charger nikaal liya.

**Array Destructuring** = Biryani ki plate aayi - tum sirf aloo aur paneer nikaalo, baaki choddo. 🍛

### 🔍 Core Concepts Breakdown

```javascript
// ===== OBJECT DESTRUCTURING =====

const user = {
  name: "Kavya",
  age: 25,
  city: "Bangalore",
  job: "Developer",
};

// Purana boring tarika
const name = user.name;
const age = user.age;

// Destructuring ✨
const { name, age } = user;
console.log(name); // "Kavya"
console.log(age); // 25

// Rename bhi kar sakte ho
const { name: userName, city: location } = user;
console.log(userName); // "Kavya"
console.log(location); // "Bangalore"

// Default value - agar property exist na kare
const { name, salary = 50000 } = user;
console.log(salary); // 50000 (user mein tha hi nahi, default mila)

// Nested object destructuring
const profile = {
  user: {
    name: "Rahul",
    address: {
      city: "Mumbai",
    },
  },
};
const {
  user: {
    name,
    address: { city },
  },
} = profile;
console.log(city); // "Mumbai"
```

```javascript
// ===== ARRAY DESTRUCTURING =====

const colors = ["red", "green", "blue", "yellow"];

// Purana tarika
const first = colors[0];
const second = colors[1];

// Destructuring ✨
const [first, second] = colors;
console.log(first); // "red"
console.log(second); // "green"

// Kuch skip karna ho
const [, , third] = colors; // green skip kiya
console.log(third); // "blue"

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log(e); // "purple" - array mein tha nahi

// Swap variables - cool trick! 😎
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
```

```javascript
// ===== FUNCTION PARAMETERS MEIN DESTRUCTURING =====
// React mein yeh BOHOT zyada use hota hai!

// Bina destructuring
function showUser(user) {
  console.log(user.name, user.age);
}

// Destructuring with parameters ✨
function showUser({ name, age }) {
  console.log(name, age);
}

// React component (preview) - exactly aise hi props aate hain!
const UserCard = ({ name, age, city = "Unknown" }) => {
  return `${name}, ${age}, ${city}`;
};
```

### ⚠️ Common Mistakes

```javascript
// ❌ Undefined property destructure karna
const { phone } = user; // phone nahi hai user mein
console.log(phone); // undefined - error nahi, but confusing

// ✅ Default do
const { phone = "N/A" } = user;

// ❌ Array destructuring mein order bhool jaana
const [, second, first] = ["a", "b", "c"];
// first = "c", second = "b" - position matter karta hai!
```

### 🏭 Real World Use Cases

- **React props destructuring** - Har component mein use hoga
- **API response se data nikalna** - Daily use
- **useState hook** - `const [count, setCount] = useState(0)` - yeh array destructuring hai!

---

## 4. Spread `...` and Rest `...`

### 🧠 Simple Explanation (ELI5)

Dono ka syntax same hai `...` lekin kaam ulta:

- **Spread** → Cheezein **phailata** hai (expand)
- **Rest** → Cheezein **ikattha** karta hai (collect)

### 🏠 Real-World Analogy

**Spread** = Dabba khola, saari cheezein table pe bikhaa di 📤

**Rest** = "Baaki jo bhi hai, ek bag mein daal do" 📥

### 🔍 Core Concepts Breakdown

```javascript
// ===== SPREAD OPERATOR =====

// Arrays merge karna
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Array copy (shallow) - original ko touch nahi karo!
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - safe hai ✅

// Objects merge karna
const defaults = { theme: "light", lang: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };

const finalSettings = { ...defaults, ...userPrefs };
// { theme: "dark", lang: "en", fontSize: 16 }
// Note: userPrefs ne defaults ko override kiya jahan common keys thi

// Object copy + new property add
const user = { name: "Aryan", age: 21 };
const updatedUser = { ...user, age: 22, city: "Delhi" };
// { name: "Aryan", age: 22, city: "Delhi" }
// Original user unchanged ✅

// Function call mein spread
const nums = [5, 10, 3, 8];
console.log(Math.max(...nums)); // 10
// Same as: Math.max(5, 10, 3, 8)
```

```javascript
// ===== REST OPERATOR =====

// Function mein - baaki ke saare arguments collect karo
function sum(...numbers) {
  // numbers ek array ban jaata hai
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Destructuring ke saath REST
const [first, second, ...remaining] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(remaining); // [30, 40, 50]

// Object rest
const { name, age, ...otherDetails } = {
  name: "Sneha",
  age: 23,
  city: "Pune",
  job: "Designer",
};
console.log(name); // "Sneha"
console.log(otherDetails); // { city: "Pune", job: "Designer" }
```

### ⚠️ Common Mistakes

```javascript
// ❌ Rest parameter last mein nahi diya
function wrong(a, ...rest, b) {} // SyntaxError!

// ✅ Rest hamesha last mein hoga
function correct(a, b, ...rest) {} // ✅

// ❌ Shallow copy samajhna deep copy
const obj = { a: { b: 1 } };
const copy = { ...obj };
copy.a.b = 999;
console.log(obj.a.b); // 999 😱 - nested objects still shared!
```

### 🏭 Real World Use Cases

- **React state update** - `setState({ ...prevState, name: "New" })` - har jagah!
- **Props forwarding** in React
- **Immutable data patterns** - Redux mein heavily used
- **Production mein critical** - yeh concept skip kiya toh React mein rona padega 😭

---

## 5. Short-Circuit Evaluation - `&&`, `||`, `??`

### 🧠 Simple Explanation (ELI5)

JavaScript thoda **lazy** hai - agar pehle se answer pata chal gaya, toh aage jaata hi nahi. Isi laziness ko hum apne fayde ke liye use karte hain! 😄

### 🏠 Real-World Analogy

- `&&` (AND) = Interview mein - "Agar resume accha hai **AND** coding test pass hua, toh offer denge"
- `||` (OR) = "Tea **ya** Coffee chahiye? Jo pehle milega le lunga"
- `??` (Nullish) = "Sirf tab backup use karo jab actually kuch **hai hi nahi**"

### 🔍 Core Concepts Breakdown

```javascript
// ===== && (AND) - Short-circuit =====
// Agar left side FALSY hai → left return karo, right evaluate mat karo
// Agar left side TRUTHY hai → right return karo

console.log(false && "hello"); // false - ruk gaya
console.log(true && "hello"); // "hello" - aage gaya
console.log(0 && "hello"); // 0 - 0 falsy hai
console.log(1 && "hello"); // "hello"

// Real use - conditional rendering (React mein BOHOT use hoga)
const isLoggedIn = true;
const userName = "Arjun";

// Agar logged in hai toh naam dikhao
const message = isLoggedIn && `Welcome, ${userName}!`;
console.log(message); // "Welcome, Arjun!"

const isAdmin = false;
const adminPanel = isAdmin && "Admin Dashboard";
console.log(adminPanel); // false - kuch nahi dikhega

// ===== || (OR) - Short-circuit =====
// Agar left TRUTHY hai → left return karo
// Agar left FALSY hai → right return karo (fallback!)

const userCity = null;
const defaultCity = userCity || "Mumbai";
console.log(defaultCity); // "Mumbai" - fallback mila

const score = 0;
const displayScore = score || "No score"; // ⚠️ PROBLEM!
console.log(displayScore); // "No score" - but 0 valid score tha! 😱

// ===== ?? (Nullish Coalescing) - The Smart One =====
// Sirf null ya undefined par fallback karo
// 0, "", false ko falsy nahi manega!

const score2 = 0;
const displayScore2 = score2 ?? "No score";
console.log(displayScore2); // 0 ✅ - sahi!

const name = "";
const displayName = name ?? "Anonymous";
console.log(displayName); // "" ✅ - empty string valid tha

const nothing = null;
const result = nothing ?? "Default";
console.log(result); // "Default" ✅
```

```javascript
// Practical chaining example
const user = {
  name: "Riya",
  subscription: null,
};

// Agar subscription hai toh plan dikhao, warna "Free" dikhao
const plan = user.subscription?.plan ?? "Free";
console.log(plan); // "Free"
```

### ⚠️ Common Mistakes

```javascript
// ❌ || use karna jab 0 ya "" valid values hain
const qty = 0;
const display = qty || "Not set"; // "Not set" - WRONG! 0 valid tha

// ✅ ?? use karo
const display = qty ?? "Not set"; // 0 - CORRECT!

// ❌ React mein && se number render ho jaata hai
const count = 0;
return <div>{count && <Component />}</div>; // Renders "0" on screen! 😱

// ✅ Boolean banao
return <div>{count > 0 && <Component />}</div>; // ✅
```

### 🏭 Real World Use Cases

- `&&` → React JSX mein conditional rendering - **daily use**
- `||` → Default values (jab 0/"" invalid ho)
- `??` → API se aaye data ka fallback - **production mein preferred**

---

## 6. Array Methods - `map`, `filter`, `reduce`, `find`, `some`, `every`

### 🧠 Simple Explanation (ELI5)

Array methods matlab - array ke har element pe koi **kaam** karo bina manual loop likhe. Yeh React ki **jaan** hain! 💪

### 🏠 Real-World Analogy

Socho ek school hai 30 students ka:

- `map` → Har student ko report card do (har element transform karo)
- `filter` → Sirf passing students ki list banao (condition ke basis pe chhano)
- `reduce` → Poori class ke marks jodo → ek total nikalo
- `find` → "Roll no. 15 kaun hai?" → pehla match dhundo
- `some` → "Koi fail hua kya?" → ek bhi match?
- `every` → "Sab pass hue?" → sab match?

### 🔍 Core Concepts Breakdown

```javascript
const students = [
  { name: "Amit", marks: 85, passed: true },
  { name: "Neha", marks: 45, passed: false },
  { name: "Raj", marks: 92, passed: true },
  { name: "Priya", marks: 38, passed: false },
  { name: "Zara", marks: 78, passed: true },
];

// ===== MAP - Transform each element, same length array =====
// Returns: NEW array (original unchanged)

const names = students.map((student) => student.name);
// ["Amit", "Neha", "Raj", "Priya", "Zara"]

const gradeCards = students.map((student) => ({
  name: student.name,
  grade: student.marks >= 75 ? "A" : student.marks >= 50 ? "B" : "C",
}));
// [{ name: "Amit", grade: "A" }, { name: "Neha", grade: "C" }, ...]

// ===== FILTER - Chhano, sirf matching elements rakho =====
// Returns: NEW array with matching elements only

const passedStudents = students.filter((s) => s.passed);
// [Amit, Raj, Zara]

const highScorers = students.filter((s) => s.marks >= 80);
// [Amit (85), Raj (92)]

// ===== REDUCE - Sab kuch ek value mein compress karo =====
// Returns: Single value (number, object, array - kuch bhi!)

const totalMarks = students.reduce((accumulator, student) => {
  return accumulator + student.marks;
}, 0); // 0 = initial value
// 85 + 45 + 92 + 38 + 78 = 338

// Average nikalna
const average = totalMarks / students.length; // 67.6

// Group by result (advanced)
const grouped = students.reduce((acc, student) => {
  const key = student.passed ? "passed" : "failed";
  acc[key] = [...(acc[key] || []), student.name];
  return acc;
}, {});
// { passed: ["Amit", "Raj", "Zara"], failed: ["Neha", "Priya"] }

// ===== FIND - Pehla match dhundo =====
// Returns: Single element or undefined

const rajInfo = students.find((s) => s.name === "Raj");
// { name: "Raj", marks: 92, passed: true }

const topStudent = students.find((s) => s.marks > 90);
// { name: "Raj", marks: 92, passed: true } - Raj mila

// ===== SOME - Koi ek bhi match karta hai? =====
// Returns: true/false

const anyFailed = students.some((s) => !s.passed);
console.log(anyFailed); // true - Neha aur Priya fail hue

const anyAbove95 = students.some((s) => s.marks > 95);
console.log(anyAbove95); // false

// ===== EVERY - Sab match karte hain? =====
// Returns: true/false

const allPassed = students.every((s) => s.passed);
console.log(allPassed); // false - Neha aur Priya fail hue

const allAbove30 = students.every((s) => s.marks > 30);
console.log(allAbove30); // true
```

```javascript
// ===== CHAINING - Ekdum powerful combo! =====

// Passing students ke naam, alphabetically sorted
const result = students
  .filter((s) => s.passed) // [Amit, Raj, Zara]
  .map((s) => s.name) // ["Amit", "Raj", "Zara"]
  .sort(); // ["Amit", "Raj", "Zara"]

console.log(result); // ["Amit", "Raj", "Zara"]
```

### ⚠️ Common Mistakes

```javascript
// ❌ map mein return bhool jaana (curly braces use karte waqt)
const wrong = students.map((s) => {
  s.name.toUpperCase(); // return missing! → undefined
});

// ✅
const correct = students.map((s) => {
  return s.name.toUpperCase();
});
// ya
const correct2 = students.map((s) => s.name.toUpperCase());

// ❌ reduce mein initial value na dena (empty array pe crash)
[].reduce((acc, val) => acc + val); // TypeError!

// ✅
[].reduce((acc, val) => acc + val, 0); // 0
```

### 🏭 Real World Use Cases

- `map` → **React mein list rendering** - `items.map(item => <Card />)` - har jagah!
- `filter` → Search functionality, show/hide items
- `reduce` → Cart total, data grouping, state management
- `find` → User dhundna by ID from API response
- `some`/`every` → Form validation, permission checks
- **Yeh sab production mein daily use hote hain** - inhe rote mat, samjho!

---

## 7. Objects - Dot Notation, Bracket Notation, Optional Chaining `?.`

### 🧠 Simple Explanation (ELI5)

Object ek **dictionary** hai - key-value pairs. Usse access karne ke do tarike hain aur optional chaining ek **safety net** hai jo error se bachata hai.

### 🏠 Real-World Analogy

- **Dot notation** = Directly naam se bulana - "Rahul, aa jao"
- **Bracket notation** = Register mein dhundna - `register["Row 5"]`
- **Optional chaining** = Pehle check karo "Kya Rahul ghar pe hai?" - agar nahi toh crash mat karo 😄

### 🔍 Core Concepts Breakdown

```javascript
const user = {
  name: "Ananya",
  age: 27,
  "home city": "Chennai", // space wali key
  address: {
    street: "MG Road",
    pincode: "600001",
  },
  hobbies: ["reading", "coding", "painting"],
};

// ===== DOT NOTATION - simple & clean =====
console.log(user.name); // "Ananya"
console.log(user.age); // 27

// ===== BRACKET NOTATION - dynamic access =====
console.log(user["name"]); // "Ananya"
console.log(user["home city"]); // "Chennai" - space wali key, dot nahi chalega!

// Dynamic key - variable se access
const key = "age";
console.log(user[key]); // 27 - user.key nahi chalega! (undefined deta)

// ===== OPTIONAL CHAINING ?. =====
// Deep nested properties safely access karna

// Bina optional chaining - dangerous!
console.log(user.phone.number); // ❌ TypeError! phone undefined hai

// Optional chaining ke saath ✅
console.log(user.phone?.number); // undefined - crash nahi!
console.log(user.address?.street); // "MG Road" ✅

// Arrays ke saath
console.log(user.hobbies?.[0]); // "reading"
console.log(user.scores?.[0]); // undefined (scores nahi hai)

// Methods ke saath
console.log(user.getName?.()); // undefined - getName nahi hai, crash nahi
```

```javascript
// ===== COMPUTED PROPERTY NAMES =====
const field = "email";
const value = "ananya@example.com";

const newUser = {
  name: "Ananya",
  [field]: value, // Dynamic key!
};
// { name: "Ananya", email: "ananya@example.com" }

// ===== PROPERTY SHORTHAND =====
const name = "Arjun";
const age = 25;

// Purana tarika
const oldObj = { name: name, age: age };

// Shorthand ✨
const newObj = { name, age };
// { name: "Arjun", age: 25 }

// ===== OBJECT METHODS =====
const keys = Object.keys(user); // ["name", "age", "home city", ...]
const values = Object.values(user); // ["Ananya", 27, "Chennai", ...]
const entries = Object.entries(user); // [["name", "Ananya"], ["age", 27], ...]
```

### ⚠️ Common Mistakes

```javascript
// ❌ Dynamic key ke liye dot use karna
const prop = "name";
console.log(user.prop); // undefined - "prop" naam ki property dhundh raha hai!

// ✅
console.log(user[prop]); // "Ananya" ✅

// ❌ Optional chaining ke bina deeply nested access
const city = response.data.user.address.city; // Koi bhi step null ho → crash!

// ✅
const city = response?.data?.user?.address?.city; // Safe ✅
```

### 🏭 Real World Use Cases

- Optional chaining → **API response handle karna** - production mein must
- Bracket notation → Dynamic form fields, computed keys
- Object methods → Data transformation pipelines

---

## 8. Modules - `import` / `export`

### 🧠 Simple Explanation (ELI5)

Ek bada project mein sab kuch ek file mein likhna = ek bade kapde ki dukaan mein sab kuch ek hi shelf pe rakhna 🤯. Modules matlab - **alag alag files mein code rakho, zaroorat pe import karo**.

### 🏠 Real-World Analogy

- **Export** = Library mein kitaab rakhna (available karna)
- **Import** = Library se kitaab lena (use karna)
- **Named export** = Specific kitaab ka naam le ke mangna
- **Default export** = "Yahan ki best-seller de do" - ek hi hoti hai

### 🔍 Core Concepts Breakdown

```javascript
// ===== NAMED EXPORTS - mathUtils.js =====

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export const multiply = (a, b) => a * b;

export class Calculator {
  square(n) { return n * n; }
}

// Ya ek saath sab export karo
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
export { subtract, divide };


// ===== NAMED IMPORTS =====

import { add, multiply, PI } from './mathUtils.js';

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log(PI);             // 3.14159

// Rename karte hue import
import { add as addition, PI as piValue } from './mathUtils.js';


// ===== DEFAULT EXPORT - userService.js =====
// Ek file mein SIRF EK default export ho sakta hai!

const userService = {
  getUser: (id) => fetch(`/api/users/${id}`),
  createUser: (data) => fetch('/api/users', { method: 'POST', body: JSON.stringify(data) }),
  deleteUser: (id) => fetch(`/api/users/${id}`, { method: 'DELETE' })
};

export default userService;

// Ya directly:
export default function fetchData(url) {
  return fetch(url).then(res => res.json());
}


// ===== DEFAULT IMPORT =====
// Koi bhi naam de sakte ho!
import userService from './userService.js';
import myFetchData from './userService.js'; // Naam alag, same cheez


// ===== NAMED + DEFAULT DONO SAATH =====
// api.js
export const BASE_URL = "https://api.example.com";
export const TIMEOUT = 5000;

export default class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}

// Import karna
import ApiClient, { BASE_URL, TIMEOUT } from './api.js';
// Default pehle, phir named (curly braces mein)


// ===== IMPORT EVERYTHING =====
import * as MathUtils from './mathUtils.js';

console.log(MathUtils.add(2, 3));
console.log(MathUtils.PI);
```

### ⚠️ Common Mistakes

```javascript
// ❌ Default export ko curly braces mein import karna
import { userService } from "./userService.js"; // ❌ Named import syntax - WRONG

// ✅
import userService from "./userService.js"; // ✅ Default import

// ❌ Named export ko bina curly braces ke import karna
import add from "./mathUtils.js"; // ❌ Yeh default dhundega, named nahi

// ✅
import { add } from "./mathUtils.js"; // ✅
```

### 🏭 Real World Use Cases

- **React mein sab modules hain** - components, hooks, utils, constants
- Named exports → Utility functions, constants, multiple components
- Default exports → Main component of a file
- **Har React project mein heavily used** - yeh aana hi chahiye!

---

## 9. Promises, `async/await`, `fetch` API

### 🧠 Simple Explanation (ELI5)

**Promise** = "Main tumhe data de dunga... thodi der baad. Promise!" 🤞

**async/await** = Promise ka readable tarika - synchronous jaisa dikhta hai but asynchronous hota hai.

**fetch** = Browser ka built-in tool jo internet se data laata hai.

### 🏠 Real-World Analogy

Zomato se order kiya:

- **Promise** = Receipt mili - "Aapka order deliver hoga" (pending → fulfilled/rejected)
- **async/await** = Tum phone rakh do, kaam karo - jab order aayega notification milegi
- **fetch** = Delivery ka actual kaam - data laana

### 🔍 Core Concepts Breakdown

```javascript
// ===== PROMISE - 3 states: pending, fulfilled, rejected =====

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data mil gaya! ✅"); // Success
  } else {
    reject("Kuch gadbad ho gayi ❌"); // Failure
  }
});

// .then() aur .catch() se handle karna
myPromise
  .then((data) => console.log(data)) // "Data mil gaya! ✅"
  .catch((err) => console.error(err)) // Error handle karo
  .finally(() => console.log("Done")); // Hamesha chalega

// ===== ASYNC/AWAIT - Clean syntax =====

async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    // Response check karo
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json(); // JSON parse karo
    return data;
  } catch (error) {
    console.error("Error aaya:", error.message);
    throw error; // Upar bhejo agar zaroorat ho
  }
}

// Use karna
const user = await fetchUser(1);
console.log(user.name); // "Leanne Graham"

// ===== FETCH API - Complete Example =====

// GET request
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users; // Array of users
}

// POST request - data bhejna
async function createPost(title, body) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-token-here",
    },
    body: JSON.stringify({ title, body, userId: 1 }),
  });

  const newPost = await response.json();
  return newPost;
}

// DELETE request
async function deletePost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  return response.ok; // true if successful
}

// ===== PROMISE.ALL - Multiple promises ek saath =====

async function loadDashboard() {
  try {
    // Teeno requests simultaneously chalao - faster! 🚀
    const [users, posts, comments] = await Promise.all([fetch("/api/users").then((r) => r.json()), fetch("/api/posts").then((r) => r.json()), fetch("/api/comments").then((r) => r.json())]);

    return { users, posts, comments };
  } catch (error) {
    // Agar koi bhi fail ho → yahan aa jaayega
    console.error("Dashboard load failed:", error);
  }
}
```

### ⚠️ Common Mistakes

```javascript
// ❌ await bina async ke
function wrong() {
  const data = await fetch('/api'); // SyntaxError!
}

// ✅
async function correct() {
  const data = await fetch('/api');
}

// ❌ response.json() ko await karna bhool jaana
const response = await fetch('/api/users');
console.log(response); // ReadableStream - JSON nahi! 😱

// ✅
const response = await fetch('/api/users');
const data = await response.json(); // ✅

// ❌ Error check na karna
const response = await fetch('/api/users');
const data = await response.json(); // 404 pe bhi run karega!

// ✅
const response = await fetch('/api/users');
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const data = await response.json();
```

### 🏭 Real World Use Cases

- **Every React app mein** - API calls, data loading
- `async/await` → Modern standard - `.then()` chain se prefer karo
- `Promise.all` → Dashboard loading, parallel requests
- **Production critical** - iske bina modern web apps exist nahi karte

---

## 10. `localStorage` / `sessionStorage`

### 🧠 Simple Explanation (ELI5)

Browser mein data save karne ki **mini hard drive** hai - server ki zaroorat nahi, directly browser mein!

### 🏠 Real-World Analogy

- **localStorage** = Diary - app band karo, phir khologe toh bhi diary wahi rahegi 📔
- **sessionStorage** = Sticky note - tab band karo, note gaayab! 🗒️

### 🔍 Core Concepts Breakdown

```javascript
// ===== LOCALSTORAGE - Persistent storage =====

// Set karna - sirf strings!
localStorage.setItem("username", "Ravi");
localStorage.setItem("theme", "dark");

// Get karna
const username = localStorage.getItem("username"); // "Ravi"
const missing = localStorage.getItem("xyz"); // null - exist nahi karta

// Delete karna
localStorage.removeItem("theme");

// Sab clear karo
localStorage.clear(); // ⚠️ Sab chala jaayega!

// ===== OBJECTS STORE KARNA - JSON.stringify zaroor! =====

const user = { name: "Kavita", age: 29, role: "admin" };

// Store - convert to string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve - parse back to object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Kavita"

// ===== SAFE PATTERN - Helper functions banao =====

// Safe get - null handle karta hai
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Storage read error:", error);
    return defaultValue;
  }
}

// Safe set - error handle karta hai (storage full ho sakti hai!)
function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Storage write error:", error); // QuotaExceededError
    return false;
  }
}

// Use karna
saveToStorage("cart", [
  { id: 1, qty: 2 },
  { id: 3, qty: 1 },
]);
const cart = getFromStorage("cart", []); // Default = empty array

// ===== SESSIONSTORAGE - Tab-specific =====
// Same API, sirf tab band hone pe clear hota hai

sessionStorage.setItem("formData", JSON.stringify({ step: 2, email: "test@mail.com" }));
const formData = JSON.parse(sessionStorage.getItem("formData"));
```

### ⚠️ Common Mistakes

```javascript
// ❌ Object directly store karna
localStorage.setItem("user", { name: "Raj" }); // "[object Object]" store hoga! 😱

// ✅
localStorage.setItem("user", JSON.stringify({ name: "Raj" }));

// ❌ JSON.parse na karna
const user = localStorage.getItem("user"); // String mili!
console.log(user.name); // undefined - string hai, object nahi!

// ✅
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name); // "Raj" ✅

// ❌ Sensitive data store karna
localStorage.setItem("password", "secret123"); // ❌ NEVER!
localStorage.setItem("creditCard", "4111..."); // ❌ NEVER EVER!
```

### 🏭 Real World Use Cases

- **localStorage** → Dark mode preference, cart data, auth tokens (carefully!), language preference
- **sessionStorage** → Multi-step form data, temporary filters
- React mein custom `useLocalStorage` hook banate hain - **production pattern**

---

## 11. `try/catch/finally`

### 🧠 Simple Explanation (ELI5)

Code kabhi kabhi **fail** ho sakta hai - API down ho, network gayi, user ne galat input diya. `try/catch` ek **safety net** hai jo app ko crash hone se bachata hai.

### 🏠 Real-World Analogy

- **try** = Kaam karo - "Karo yeh kaam"
- **catch** = Backup plan - "Agar kuch gadbad ho toh yeh karo"
- **finally** = Hamesha karna wala kaam - "Success ho ya fail, yeh toh karna hi hai"

Jaise doctor operation karta hai:

- **try** = Operation karo
- **catch** = Agar complication aaye toh handle karo
- **finally** = Patient ko ICU se bahar le jao (kuch bhi ho)

### 🔍 Core Concepts Breakdown

```javascript
// ===== BASIC TRY/CATCH =====

try {
  // Yahan risky code likhte hain
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Agar kuch gadbad ho → yahan aao
  console.error("Error pakda:", error.message);
} finally {
  // Hamesha chalega - success ho ya fail
  console.log("Operation complete (pass/fail dono)");
}

// ===== ASYNC/AWAIT KE SAATH - Most common use =====

async function loadUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`User not found: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    // Network error, parse error, custom throw - sab yahan aayenge
    if (error.name === "TypeError") {
      console.error("Network error - check internet connection");
    } else {
      console.error("API error:", error.message);
    }

    return null; // Ya default value return karo
  } finally {
    // Loading spinner band karo - hamesha!
    setLoading(false);
  }
}

// ===== CUSTOM ERRORS =====

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required", "name");
  }
  if (user.age < 0) {
    throw new ValidationError("Age cannot be negative", "age");
  }
  return true;
}

try {
  validateUser({ name: "", age: 25 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation failed on ${error.field}: ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
}

// ===== NESTED TRY/CATCH - Alag errors alag handle karo =====

async function processOrder(orderId) {
  let connection = null;

  try {
    connection = await db.connect();

    try {
      const order = await db.getOrder(orderId);
      await processPayment(order);
      await sendConfirmationEmail(order);
      return { success: true };
    } catch (businessError) {
      // Business logic error - handle gracefully
      await db.rollback();
      return { success: false, reason: businessError.message };
    }
  } catch (dbError) {
    // Database connection error - serious!
    console.error("DB connection failed:", dbError);
    throw dbError; // Upar bhejo
  } finally {
    // Connection close karo - hamesha!
    if (connection) await connection.close();
  }
}
```

### ⚠️ Common Mistakes

```javascript
// ❌ Empty catch block - errors swallow karna
try {
  await fetchData();
} catch (e) {} // Sab kuch chupa liya - debugging nightmare! 😱

// ✅ Hamesha log karo ya handle karo
try {
  await fetchData();
} catch (e) {
  console.error("fetchData failed:", e);
  // Ya user ko notify karo
}

// ❌ Har cheez ek hi try/catch mein
try {
  const user = await getUser();
  const posts = await getPosts();
  const comments = await getComments();
} catch (e) {
  console.error(e); // Kaunsa fail hua pata nahi! 🤔
}

// ✅ Specific handling
try {
  const user = await getUser();
  // user specific code...
} catch (e) {
  console.error("User fetch failed:", e);
}

// ❌ finally mein return karna - catch ka return override ho jaata hai!
function risky() {
  try {
    return "success";
  } finally {
    return "finally"; // ❌ "success" kabhi return nahi hoga
  }
}
console.log(risky()); // "finally" 😱
```

### 🏭 Real World Use Cases

- **API calls wrap karna** - Every production app mein
- **Form validation** - Custom error throw karna
- **Database operations** - Transaction rollback
- `finally` → Cleanup - connection close, loading state off, spinner hide
- **Production mein must** - Bina error handling ke app crash-prone hota hai

---

## 🎯 Quick Revision Table

| Concept                 | React Mein Use                 | Production Importance |
| ----------------------- | ------------------------------ | --------------------- |
| `let`/`const`           | Everywhere                     | ⭐⭐⭐⭐⭐            |
| Arrow Functions         | Components, handlers           | ⭐⭐⭐⭐⭐            |
| Destructuring           | Props, state, API data         | ⭐⭐⭐⭐⭐            |
| Spread/Rest             | State updates, props           | ⭐⭐⭐⭐⭐            |
| Short-circuit `&&`/`??` | Conditional rendering          | ⭐⭐⭐⭐⭐            |
| Array methods           | List rendering, data transform | ⭐⭐⭐⭐⭐            |
| Optional chaining `?.`  | API data access                | ⭐⭐⭐⭐⭐            |
| Modules                 | Every file                     | ⭐⭐⭐⭐⭐            |
| async/await + fetch     | Data fetching                  | ⭐⭐⭐⭐⭐            |
| localStorage            | User preferences               | ⭐⭐⭐⭐              |
| try/catch               | Error handling                 | ⭐⭐⭐⭐⭐            |

> **Bhai, notice kiya?** - Sab ko ⭐⭐⭐⭐⭐ diya hai. Yeh **sab** important hain React ke liye. Inhe skip mat karna! 😄

---

## 🏗️ Mini Practice Project

**Yeh sab concepts ek saath use karo - ek simple "User Dashboard" banao:**

```javascript
// Sab concepts ek jagah! Practice karo yeh ✅

const API_URL = "https://jsonplaceholder.typicode.com";

// localStorage se theme load karo
const getTheme = () => localStorage.getItem("theme") ?? "light";
const saveTheme = (theme) => localStorage.setItem("theme", theme);

// Users fetch karo
async function loadDashboard() {
  try {
    const [usersRes, postsRes] = await Promise.all([fetch(`${API_URL}/users`), fetch(`${API_URL}/posts`)]);

    if (!usersRes.ok || !postsRes.ok) {
      throw new Error("Failed to load data");
    }

    const [users, posts] = await Promise.all([usersRes.json(), postsRes.json()]);

    // Filter active users (first 5)
    const activeUsers = users.filter((_, index) => index < 5);

    // Map to display format
    const userCards = activeUsers.map(({ id, name, email, address }) => ({
      id,
      name,
      email,
      city: address?.city ?? "Unknown",
      postCount: posts.filter((p) => p.userId === id).length,
    }));

    // Total posts
    const totalPosts = userCards.reduce((sum, u) => sum + u.postCount, 0);
    const hasActiveUsers = userCards.some((u) => u.postCount > 0);

    return { userCards, totalPosts, hasActiveUsers };
  } catch (error) {
    console.error("Dashboard load failed:", error.message);
    return { userCards: [], totalPosts: 0, hasActiveUsers: false };
  }
}

// Run karo!
const dashboard = await loadDashboard();
console.log(dashboard);
```
