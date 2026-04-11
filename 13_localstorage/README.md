- localstorage => permenent data for a website (just casual use, eg. theme)
- session storage => Tab open rhega tab tak data rhega. tab close => data gone

localStorage.clear() => clear local storage data
sessionStorage.clear() => clear session storage data

Data in these storage is saved as key value pair.

localStorage.setItem('user', "Anil"); => To save data, key (user), value (Anil)

localStorage.getItem('user'); => to get value of key user, ie. Anil

localStorage.removeItem('user') => to remove item

To save array, object, or retrieve them

let arr = [10, 20, 30, 40]
let obj = {name:"Anil", age:21}

localStorage.setItem('arr', JSON.stringify(arr))
localStorage.setItem('obj', JSON.stringify(obj))

JSON.parse(localStorage.getItem('arr'))
JSON.parse(localStorage.getItem('obj'))

