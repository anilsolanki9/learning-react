# 0.3 Tailwind CSS Fundamentals — Styling ka Naya Andaaz 🎨

> **Bhai, ek sachchi baat** — Pehli baar Tailwind dekh ke log kehte hain "Yeh toh HTML mein hi CSS likh diya, kya bakwaas hai!" 😂
> Aur 2 din baad wahi log kehte hain "Bhai, regular CSS mein wapas nahi jaana!" 🤩

---

## 1. Utility-First Philosophy — Why Tailwind over Raw CSS?

### 🧠 Simple Explanation (ELI5)

**Traditional CSS** = Pehle ek alag wardrobe banao (CSS file), phir har kapde ko naam do (class name), phir pehno.

**Tailwind** = Seedha kapda uthao aur pehno — wardrobe banane ki zaroorat hi nahi! 👕

Tailwind mein **pre-made small classes** hoti hain — ek class ek kaam. Inhe combine karke koi bhi design bana lo.

### 🏠 Real-World Analogy

**Traditional CSS** = Restaurant mein khana banana — Chef ko recipe batao, wait karo, phir plate aayegi.

**Tailwind** = LEGO blocks 🧱 — Ready-made pieces hain. Jaise chahiye jodo, koi bhi shape banao. Naya set banane ki zaroorat nahi.

**Traditional CSS approach:**
```css
/* style.css — alag file */
.card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
}
```
```html
<div class="card">...</div>
```

**Tailwind approach:**
```html
<div class="p-4 bg-white rounded-lg shadow-md flex items-center">...</div>
```

### 🔍 Core Concepts — Why Tailwind Wins in Production

| Problem (Raw CSS) | Tailwind Solution |
|-------------------|-------------------|
| Class names sochne padte hain 🤔 | Koi naming nahi — utility classes use karo |
| CSS file grow karta rehta hai | CSS file same size rehti hai — unused purge hoti hai |
| Context switching (HTML ↔ CSS) | Sab ek jagah — HTML mein hi |
| Team mein naming inconsistency | Sabka same vocabulary |
| Dead CSS — koi delete nahi karta | Production build mein auto-remove |

### 🏭 Real World Use Cases

- **Production mein heavily used** — Vercel, GitHub, Shopify, Tailscale sab use karte hain
- React + Tailwind = **Industry standard combo** 2024 mein
- Speed of development **3x fast** ho jaati hai once you learn it

---

## 2. Installing Tailwind with Vite

### 🔍 Step-by-Step Setup

```bash
# Step 1: Vite React project banao (agar nahi hai)
npm create vite@latest my-app -- --template react
cd my-app

# Step 2: Tailwind install karo
npm install tailwindcss @tailwindcss/vite
```

```javascript
// Step 3: vite.config.js update karo
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← yeh add karo

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← yeh add karo
  ],
})
```

```css
/* Step 4: src/index.css mein sirf yeh ek line — baaki sab hata do */
@import "tailwindcss";
```

```jsx
// Step 5: Test karo — App.jsx mein
function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-500">
      Tailwind kaam kar raha hai! 🎉
    </h1>
  )
}
```

```bash
# Step 6: Run karo
npm run dev
```

> **Agar blue bold heading dikh rahi hai → Setup done! 🎉**

### ⚠️ Common Mistakes

```bash
# ❌ Purana Tailwind v3 wala setup — ab yeh nahi chalega
npm install tailwindcss postcss autoprefixer  # v3 way — outdated!
npx tailwindcss init  # v3 way — mat karo

# ✅ Tailwind v4 (current) — upar wala naya setup use karo
npm install tailwindcss @tailwindcss/vite
```

---

## 3. Core Utilities — Spacing, Typography, Colors, Flex, Grid

### 🧠 Simple Explanation (ELI5)

Tailwind ek **dictionary** hai jisme har CSS property ke liye short class names hain. Yaad nahi rehte? **Docs always open rakho** — even seniors rakhte hain! 😄

### 📐 SPACING — Padding & Margin

**Scale samjho pehle:** Tailwind mein numbers `4` units = `1rem` = `16px`

```
1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, 6 = 24px, 8 = 32px, 12 = 48px, 16 = 64px
```

```html
<!-- PADDING -->
<div class="p-4">     <!-- padding: 16px — sab taraf -->
<div class="px-4">    <!-- padding-left + right: 16px (x = horizontal) -->
<div class="py-2">    <!-- padding-top + bottom: 8px (y = vertical) -->
<div class="pt-4">    <!-- padding-top only -->
<div class="pb-6">    <!-- padding-bottom only -->
<div class="pl-2">    <!-- padding-left only -->
<div class="pr-2">    <!-- padding-right only -->

<!-- MARGIN -->
<div class="m-4">     <!-- margin: 16px sab taraf -->
<div class="mx-auto"> <!-- margin-left + right: auto (centering trick!) -->
<div class="mt-8">    <!-- margin-top: 32px -->
<div class="mb-4">    <!-- margin-bottom: 16px -->
<div class="space-x-4"> <!-- children ke beech horizontal gap -->
<div class="space-y-2"> <!-- children ke beech vertical gap -->

<!-- WIDTH & HEIGHT -->
<div class="w-full">    <!-- width: 100% -->
<div class="w-1/2">     <!-- width: 50% -->
<div class="w-64">      <!-- width: 256px (64 × 4) -->
<div class="w-screen">  <!-- width: 100vw -->
<div class="h-screen">  <!-- height: 100vh -->
<div class="h-64">      <!-- height: 256px -->
<div class="max-w-lg">  <!-- max-width: 512px -->
<div class="min-h-screen"> <!-- min-height: 100vh -->
```

### ✍️ TYPOGRAPHY

```html
<!-- FONT SIZE -->
<p class="text-xs">    <!-- 12px -->
<p class="text-sm">    <!-- 14px -->
<p class="text-base">  <!-- 16px — default -->
<p class="text-lg">    <!-- 18px -->
<p class="text-xl">    <!-- 20px -->
<p class="text-2xl">   <!-- 24px -->
<p class="text-3xl">   <!-- 30px -->
<p class="text-4xl">   <!-- 36px -->

<!-- FONT WEIGHT -->
<p class="font-thin">      <!-- 100 -->
<p class="font-normal">    <!-- 400 -->
<p class="font-medium">    <!-- 500 -->
<p class="font-semibold">  <!-- 600 -->
<p class="font-bold">      <!-- 700 -->
<p class="font-extrabold"> <!-- 800 -->

<!-- TEXT ALIGNMENT -->
<p class="text-left">
<p class="text-center">
<p class="text-right">

<!-- OTHER TYPOGRAPHY -->
<p class="leading-tight">    <!-- line-height: 1.25 -->
<p class="leading-relaxed">  <!-- line-height: 1.625 -->
<p class="tracking-wide">    <!-- letter-spacing: 0.025em -->
<p class="uppercase">        <!-- text-transform: uppercase -->
<p class="truncate">         <!-- overflow ellipsis (...) -->
<p class="line-clamp-2">     <!-- 2 lines ke baad ... -->
```

### 🎨 COLORS

**Pattern:** `{property}-{color}-{shade}`
Shades: `50` (lightest) → `100, 200, 300, 400, 500, 600, 700, 800, 900, 950` (darkest)

```html
<!-- TEXT COLORS -->
<p class="text-gray-900">     <!-- Dark gray text -->
<p class="text-blue-500">     <!-- Medium blue -->
<p class="text-red-600">      <!-- Error red -->
<p class="text-green-500">    <!-- Success green -->
<p class="text-white">        <!-- White -->

<!-- BACKGROUND COLORS -->
<div class="bg-white">
<div class="bg-gray-50">      <!-- Very light gray — cards ke liye -->
<div class="bg-blue-500">
<div class="bg-linear-to-r from-blue-500 to-purple-600"> <!-- Gradient! -->

<!-- BORDER COLORS -->
<div class="border border-gray-200">   <!-- border + color -->
<div class="border-2 border-blue-500"> <!-- 2px blue border -->
<div class="rounded">          <!-- border-radius: 4px -->
<div class="rounded-lg">       <!-- border-radius: 8px -->
<div class="rounded-xl">       <!-- border-radius: 12px -->
<div class="rounded-full">     <!-- border-radius: 9999px (circle/pill) -->

<!-- OPACITY -->
<div class="opacity-50">       <!-- 50% transparent -->
<div class="bg-blue-500/20">   <!-- bg with 20% opacity — new syntax! -->
```

### 📦 FLEXBOX

```html
<!-- FLEX CONTAINER -->
<div class="flex">                    <!-- display: flex -->
<div class="flex items-center">       <!-- align-items: center (vertical) -->
<div class="flex items-start">        <!-- align-items: flex-start -->
<div class="flex justify-center">     <!-- justify-content: center (horizontal) -->
<div class="flex justify-between">    <!-- justify-content: space-between -->
<div class="flex justify-end">        <!-- justify-content: flex-end -->
<div class="flex gap-4">              <!-- gap: 16px between children -->
<div class="flex flex-col">           <!-- flex-direction: column -->
<div class="flex flex-wrap">          <!-- flex-wrap: wrap -->

<!-- FLEX CHILDREN -->
<div class="flex-1">     <!-- flex: 1 — available space le lo -->
<div class="flex-none">  <!-- flex: none — size fix rakho -->
<div class="shrink-0">   <!-- flex-shrink: 0 — chhota mat hono -->

<!-- Common pattern — Navbar -->
<nav class="flex items-center justify-between px-6 py-4">
  <div class="text-xl font-bold">Logo</div>
  <div class="flex gap-6">
    <a>Home</a>
    <a>About</a>
  </div>
</nav>
```

### 🔲 GRID

```html
<!-- GRID CONTAINER -->
<div class="grid grid-cols-3 gap-4">   <!-- 3 equal columns, 16px gap -->
<div class="grid grid-cols-2 gap-6">   <!-- 2 columns -->
<div class="grid grid-cols-12 gap-4">  <!-- 12-column layout (like Bootstrap) -->

<!-- GRID CHILDREN -->
<div class="col-span-2">   <!-- 2 columns occupy karo -->
<div class="col-span-full"> <!-- Full width -->

<!-- Responsive grid — next section mein detail mein -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Mobile: 1 col, Tablet: 2 col, Desktop: 3 col -->
</div>
```

### ⚠️ Common Mistakes

```html
<!-- ❌ Spacing scale bhool jaana -->
<div class="p-16px">  <!-- ❌ Yeh kaam nahi karega! -->

<!-- ✅ Number use karo — 4 = 16px -->
<div class="p-4">  <!-- ✅ -->

<!-- ❌ w aur h ke liye arbitrary values ki jagah scale use karo -->
<div class="w-[500px]">  <!-- Works, but avoid karo jab scale mein ho -->
<div class="w-96">       <!-- ✅ 384px — use scale -->

<!-- Arbitrary values kb use karo? Jab scale mein nahi ho specifically -->
<div class="w-[537px]">  <!-- ✅ Specific design requirement -->
```

---

## 4. Responsive Prefixes — `sm:`, `md:`, `lg:`, `xl:`

### 🧠 Simple Explanation (ELI5)

**Mobile first** approach — pehle chhoti screen ke liye design karo, phir badi screens ke liye override karo. Prefix = "Iss size se bade screens pe yeh class lagao"

### 🏠 Real-World Analogy

Ghar ki design — "Normal ghar mein ek room, bada ghar ho toh 2 room, aur mansion ho toh 4 room" — same concept!

### 🔍 Core Concepts

| Prefix | Min Width | Device |
|--------|-----------|--------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large mobile / Small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large Desktop |

```html
<!-- Mobile first — chhote se bade ki taraf sochna! -->

<!-- TEXT SIZE -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  <!-- Mobile: 24px, Tablet: 36px, Desktop: 60px -->
</h1>

<!-- COLUMNS -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Mobile: 1 col, Small tablet: 2 col, Desktop: 4 col -->
</div>

<!-- SHOW/HIDE -->
<div class="hidden md:block">  <!-- Mobile pe hide, tablet+ pe show -->
<div class="block md:hidden">  <!-- Mobile pe show, tablet+ pe hide -->

<!-- PADDING/MARGIN responsive -->
<div class="p-4 md:p-8 lg:p-12">
  <!-- Mobile: 16px, Tablet: 32px, Desktop: 48px -->
</div>

<!-- FLEX DIRECTION responsive -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- Mobile: vertical stack, Tablet: horizontal row -->
</div>
```

```jsx
// Real-world: Product cards grid
function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-8">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={product.image}
            className="w-full h-48 object-cover"
            // h-48 = 192px height, object-cover = image crop smartly
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-900 truncate">
              {product.name}
            </h3>
            <p className="text-blue-600 font-bold mt-2 text-xl">
              ₹{product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### ⚠️ Common Mistakes

```html
<!-- ❌ Desktop first sochna — Tailwind mobile first hai! -->
<div class="text-4xl sm:text-2xl">
<!-- Yeh WRONG thinking hai — sm: OVERRIDE karta hai, restrict nahi -->
<!-- Mobile: 4xl, Small+: 2xl — strange behavior lagega -->

<!-- ✅ Mobile first -->
<div class="text-2xl sm:text-3xl lg:text-4xl">
<!-- Mobile: small → bigger screens: bigger — natural! -->

<!-- ❌ Har breakpoint pe same value -->
<div class="text-lg sm:text-lg md:text-lg">  <!-- Pointless! -->

<!-- ✅ Sirf jab change ho -->
<div class="text-lg md:text-xl">  <!-- Clean! -->
```

### 🏭 Real World Use Cases

- **Every production site** mein responsive design zaroori hai
- Mobile traffic 60%+ hai — mobile first critical hai
- Responsive grid + flex = **90% of real layouts covered**

---

## 5. State Variants — `hover:`, `focus:`, `active:`, `disabled:`

### 🧠 Simple Explanation (ELI5)

Element ki **alag alag conditions** mein alag styling. Jaise — button pe mouse le jao toh color badlo, click karo toh aur badlo.

### 🏠 Real-World Analogy

Traffic light 🚦 — Same light, teen states: Red (stop), Yellow (ready), Green (go). Har state ka apna look.

### 🔍 Core Concepts

```html
<!-- HOVER — Mouse le jao element pe -->
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
  <!-- Normal: blue-500, Hover: blue-600 — slightly darker -->
</button>

<a class="text-blue-500 hover:text-blue-700 hover:underline">Link</a>

<div class="bg-gray-100 hover:bg-gray-200 hover:shadow-lg transition-all duration-200">
  <!-- transition-all: smooth animation, duration-200: 200ms -->
</div>

<!-- FOCUS — Input selected hone pe (keyboard navigation ke liye!) -->
<input class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none rounded-lg p-3">
<!-- focus:outline-none — default browser outline hatao -->
<!-- focus:ring-2 — custom ring lagao -->

<!-- ACTIVE — Click karte waqt (press state) -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 active:scale-95 px-6 py-3 rounded-lg">
  <!-- active:scale-95 — click pe thoda chhota — feels real! -->
</button>

<!-- DISABLED — Button disabled hone pe -->
<button
  disabled
  class="bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 text-white px-4 py-2 rounded-lg"
>
  Submit
</button>

<!-- GROUP HOVER — Parent hover pe child style change karo -->
<div class="group bg-white rounded-xl p-4 hover:bg-blue-500 cursor-pointer">
  <h3 class="text-gray-900 group-hover:text-white font-bold">Title</h3>
  <p class="text-gray-500 group-hover:text-blue-100 text-sm">Description</p>
  <!-- Parent hover pe → children ka color bhi badla! -->
</div>

<!-- PEER — Sibling pe based styling -->
<div>
  <input type="checkbox" class="peer hidden" id="toggle" />
  <label for="toggle" class="cursor-pointer">Toggle</label>
  <div class="hidden peer-checked:block bg-blue-100 p-4 mt-2">
    <!-- Checkbox check hone pe yeh div dikhega! -->
    Yeh content tab dikhega jab checkbox checked ho
  </div>
</div>
```

```jsx
// Real Button Component with all states
function Button({ children, disabled, variant = 'primary', onClick }) {
  const base = "px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 active:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 active:scale-95"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
```

### ⚠️ Common Mistakes

```html
<!-- ❌ transition bhool jaana — jarky lagta hai -->
<div class="bg-white hover:bg-blue-500">  <!-- Instant snap — ugly -->

<!-- ✅ transition add karo -->
<div class="bg-white hover:bg-blue-500 transition-colors duration-200">

<!-- ❌ focus styles hata dena (accessibility issue!) -->
<input class="focus:outline-none">  <!-- Keyboard users ke liye problem! -->

<!-- ✅ Custom focus style do — outline hatao, ring do -->
<input class="focus:outline-none focus:ring-2 focus:ring-blue-500">
```

### 🏭 Real World Use Cases

- `hover:` + `transition` → Every button, card, link
- `focus:ring` → Form inputs — **accessibility must**
- `active:scale-95` → Buttons pe press effect — **production standard feel**
- `group-hover` → Card hover effects, dropdown triggers
- `disabled:` → Form submit buttons — **loading state mein disable karo**

---

## 6. `clsx` and `cn()` Utility for Conditional Classes

### 🧠 Simple Explanation (ELI5)

Kabhi kabhi classes **conditionally** lagani hoti hain — "Agar error hai toh red border, warna gray". String concatenation se yeh messy ho jaata hai. `clsx` aur `cn()` yeh cleanly karte hain.

### 🏠 Real-World Analogy

Dress code selector 👔 — "Interview hai → formal suit, Party hai → casual, Gym hai → sportswear". Ek function jo condition dekh ke decide kare.

### 🔍 Core Concepts

```bash
# Install karo
npm install clsx tailwind-merge
```

```javascript
// ===== CLSX — Conditional classes cleanly =====
import clsx from 'clsx';

// Basic use
const className = clsx('p-4', 'bg-white', 'rounded-lg');
// "p-4 bg-white rounded-lg"

// Conditional — object syntax
const isActive = true;
const isError = false;

const cls = clsx({
  'bg-blue-500': isActive,    // isActive true hai → add karo
  'bg-gray-200': !isActive,   // isActive false hai → add karo
  'border-red-500': isError,  // isError false → nahi lagega
  'p-4 rounded': true,        // hamesha lagega
});
// "bg-blue-500 p-4 rounded"

// Mixed syntax — string + conditional
const buttonCls = clsx(
  'px-4 py-2 rounded font-semibold', // hamesha
  isActive && 'bg-blue-500 text-white',  // conditional
  !isActive && 'bg-gray-200 text-gray-700',
  isError && 'border-2 border-red-500'
);
```

```javascript
// ===== CN() — The Production Standard =====
// clsx + tailwind-merge = cn()
// tailwind-merge conflicts resolve karta hai!

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Yeh function banao — utils/cn.js mein
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// WHY tailwind-merge? — Conflict resolution!
// clsx without merge:
clsx('p-4', 'p-8')  // "p-4 p-8" — dono rahenge, conflict! 😱

// cn with merge:
cn('p-4', 'p-8')    // "p-8" — last one wins! ✅
```

```jsx
// ===== PRACTICAL EXAMPLES =====
import { cn } from '@/utils/cn';

// Button with variants
function Button({ variant = 'primary', size = 'md', disabled, className, children }) {
  return (
    <button
      disabled={disabled}
      className={cn(
        // Base styles — hamesha
        'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',

        // Variant styles
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        variant === 'danger' && 'bg-red-500 text-white hover:bg-red-600',
        variant === 'ghost' && 'text-gray-600 hover:bg-gray-100',

        // Size styles
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',

        // Disabled state
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',

        // Custom className — bahar se aaya (override allow karo)
        className
      )}
    >
      {children}
    </button>
  );
}

// Use karna:
<Button variant="primary" size="lg">Submit</Button>
<Button variant="danger" disabled>Delete</Button>
<Button variant="secondary" className="w-full">Full Width</Button>
// className prop se additional classes — cn merge karega smartly!
```

```jsx
// Input field with error state
function Input({ label, error, className, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={cn(
          'px-4 py-2 rounded-lg border text-gray-900 placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 transition-all duration-200',
          error
            ? 'border-red-400 focus:ring-red-200 bg-red-50'
            : 'border-gray-300 focus:ring-blue-200 focus:border-blue-400',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

// Use:
<Input label="Email" placeholder="test@mail.com" />
<Input label="Email" error="Invalid email address" />
```

### ⚠️ Common Mistakes

```jsx
// ❌ Template literals se conditional — messy ho jaata hai
<div className={`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-200'} ${isError ? 'border-red-500' : ''} rounded`}>

// ✅ cn() use karo — clean aur readable
<div className={cn('p-4 rounded', isActive ? 'bg-blue-500' : 'bg-gray-200', isError && 'border-red-500')}>

// ❌ clsx without twMerge — conflicts rahenge
import { clsx } from 'clsx';
// <div className={clsx('p-4', props.className)}>
// Agar props.className = "p-8" → "p-4 p-8" conflict!

// ✅ cn() use karo — merge ho jaayega
cn('p-4', props.className) // agar p-8 aaya → "p-8" ✅
```

### 🏭 Real World Use Cases

- **Every production React project** mein `cn()` standard hai
- shadcn/ui library bhi internally `cn()` use karti hai
- Reusable component libraries banane ke liye **must have tool**

---

## 7. Dark Mode with `dark:` Prefix

### 🧠 Simple Explanation (ELI5)

`dark:` prefix = "Agar dark mode on hai toh yeh class lagao". Simple!

### 🏠 Real-World Analogy

Ghar ki automatic lights 🏠 — Din mein normal light, raat mein dim warm light automatically. Same ghar, alag setting.

### 🔍 Core Concepts

Tailwind v4 mein dark mode `@media (prefers-color-scheme: dark)` se automatically kaam karta hai (system dark mode follow karta hai).

```html
<!-- BASIC DARK MODE -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
  <!-- Light: white bg, dark text -->
  <!-- Dark: dark bg, white text -->
</div>

<p class="text-gray-600 dark:text-gray-300">Secondary text</p>

<button class="bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded">
  Button
</button>

<div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
  Card with border
</div>
```

```jsx
// CSS variable approach in index.css (Tailwind v4 recommended way)
```

```css
/* index.css */
@import "tailwindcss";

/* Custom dark mode colors — optional but powerful */
@layer base {
  :root {
    --bg-primary: #ffffff;
    --text-primary: #111827;
    --border-color: #e5e7eb;
  }

  .dark {
    --bg-primary: #111827;
    --text-primary: #f9fafb;
    --border-color: #374151;
  }
}
```

```jsx
// Manual dark mode toggle — React mein
import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // localStorage se saved preference lo
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    // Ya system preference lo
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // HTML element pe dark class toggle karo
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return [isDark, setIsDark];
}

// vite.config.js mein darkMode: 'class' set karna hoga v3 mein
// v4 mein:
```

```css
/* index.css mein Tailwind v4 dark mode class-based */
@import "tailwindcss";

/* Class-based dark mode enable karo */
@custom-variant dark (&:where(.dark, .dark *));
```

```jsx
// App mein use karna
function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Dark mode toggle button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hello World
        </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Dark mode mein bhi sahi dikh raha hai! ✨
        </p>

        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Card</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Card content</p>
        </div>
      </main>
    </div>
  );
}
```

### ⚠️ Common Mistakes

```html
<!-- ❌ Dark mode sirf background pe lagana — text ignore karna -->
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900">  <!-- ❌ Dark mein dark text on dark bg! -->

<!-- ✅ Pair karo hamesha -->
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-white">  <!-- ✅ -->

<!-- ❌ Har element pe dark: lagana bhool jaana -->
<!-- Systematic approach lo — define karo pehle kitne levels chahiye -->

<!-- ❌ Transition bhool jaana — jarky mode switch -->
<div class="bg-white dark:bg-gray-900">

<!-- ✅ Smooth transition -->
<div class="bg-white dark:bg-gray-900 transition-colors duration-300">
```

### 🏭 Real World Use Cases

- **Modern apps mein dark mode standard** hai — users expect karte hain
- `dark:` prefix + `transition` → **Production polished feel**
- System preference respect karna → **Better UX**

---

## 🎯 Quick Reference Cheatsheet

```
SPACING:     p-{n}, m-{n}, px, py, pt, pb, pl, pr, mx-auto
SIZING:      w-full, w-1/2, h-screen, max-w-lg, min-h-screen
TYPOGRAPHY:  text-{size}, font-{weight}, text-center, truncate
COLORS:      text-{color}-{shade}, bg-{color}-{shade}, border-{color}
FLEX:        flex, items-center, justify-between, gap-4, flex-col
GRID:        grid, grid-cols-{n}, col-span-{n}, gap-{n}
BORDERS:     border, rounded-lg, rounded-full, border-2
SHADOWS:     shadow-sm, shadow-md, shadow-lg, shadow-xl
RESPONSIVE:  sm: md: lg: xl: 2xl: (mobile first!)
STATES:      hover: focus: active: disabled: group-hover:
DARK MODE:   dark:
TRANSITION:  transition-all duration-200 ease-in-out
```

---

## 🏗️ Mini Practice Project — Profile Card

**Sab concepts ek saath use karo!**

```jsx
import { cn } from './utils/cn';

function ProfileCard({ user, isOnline, isPremium }) {
  return (
    <div className={cn(
      // Base styles
      "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md",
      "border border-gray-100 dark:border-gray-700",
      "transition-all duration-200",
      // Hover effect
      "hover:shadow-xl hover:-translate-y-1",
      // Premium border
      isPremium && "border-2 border-yellow-400 dark:border-yellow-500"
    )}>

      {/* Avatar + Online Status */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <span className={cn(
            "absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800",
            isOnline ? "bg-green-500" : "bg-gray-400"
          )} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg truncate">
              {user.name}
            </h3>
            {isPremium && (
              <span className="text-yellow-500 text-sm">⭐</span>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm truncate">
            {user.role}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Posts', value: user.posts },
          { label: 'Followers', value: user.followers },
          { label: 'Following', value: user.following }
        ].map(stat => (
          <div key={stat.label} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <p className="font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-2 rounded-xl font-semibold text-sm transition-all duration-200">
          Follow
        </button>
        <button className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 rounded-xl font-semibold text-sm transition-all duration-200">
          Message
        </button>
      </div>
    </div>
  );
}

// Responsive Grid mein use karo
function App() {
  const users = [/* ... */];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Community 👥
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <ProfileCard key={user.id} user={user} isOnline={user.online} isPremium={user.premium} />
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

