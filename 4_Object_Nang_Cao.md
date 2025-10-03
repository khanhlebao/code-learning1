## 🧠 Bài học 4: Object nâng cao

### ✅ Bài 1: Sử dụng `Object.assign` để gộp object
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const result = Object.assign({}, obj1, obj2);
console.log(result); // 👉 { a: 1, b: 3, c: 4 }
```
👉 `Object.assign` sẽ ghi đè thuộc tính trùng nếu gặp key giống nhau.

---

### ✅ Bài 2: Sử dụng spread operator để copy và mở rộng object
```js
const user = { name: "Toan", age: 25 };
const newUser = { ...user, isAdmin: true };
console.log(newUser); // 👉 { name: 'Toan', age: 25, isAdmin: true }
```

---

### ✅ Bài 3: Dùng getter/setter
```js
const person = {
  firstName: "Minh",
  lastName: "Quân",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    const [first, last] = value.split(" ");
    this.firstName = first;
    this.lastName = last;
  },
};

person.fullName = "Nguyen Van";
console.log(person.fullName); // 👉 Nguyen Van
```

---

### ✅ Bài 4: Prototype chain đơn giản
```js
const animal = {
  speak() {
    console.log("Animal speaks");
  },
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Dog barks");
};

dog.speak(); // 👉 Animal speaks
dog.bark();  // 👉 Dog barks
```