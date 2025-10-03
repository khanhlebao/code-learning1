## 🧠 Bài học 5: Class và Kế thừa

### ✅ Bài 1: Tạo class đơn giản
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p = new Person("Toan");
p.sayHello(); // 👉 Hello, I'm Toan
```

---

### ✅ Bài 2: Sử dụng kế thừa (extends)
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Lucky");
dog.speak(); // 👉 Lucky barks
```

---

### ✅ Bài 3: Dùng `super` để gọi constructor/lớp cha
```js
class Parent {
  constructor(value) {
    this.value = value;
  }
}

class Child extends Parent {
  constructor(value) {
    super(value);
    this.extra = "child";
  }
}

const c = new Child(42);
console.log(c); // 👉 Child { value: 42, extra: 'child' }
```

---

### ✅ Bài 4: Static method
```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 👉 5
```