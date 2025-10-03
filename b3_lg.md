# Lời Giải Bài Thực Hành Buổi 3: `this`, call, apply, bind

## Bài 1: Method và `this`
```js
const car = {
  brand: "Toyota",
  showBrand: function() {
    console.log("Xe của tôi là " + this.brand);
  }
};

car.showBrand(); // Xe của tôi là Toyota
```
**Giải thích**: `this` trong method `showBrand` trỏ đến object `car`.

---

## Bài 2: Gọi hàm với `call()`
```js
function introduce() {
  console.log("Tôi là " + this.name);
}

const person = { name: "Minh" };
introduce.call(person); // Tôi là Minh
```
**Giải thích**: `call` gán `this = person` khi gọi hàm.

---

## Bài 3: Gọi hàm với `apply()`
```js
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const user = { name: "Hoa" };
greet.apply(user, ["Hello", "!"]); // Hello, Hoa!
```
**Giải thích**: `apply` truyền tham số dưới dạng mảng, `this` là `user`.

---

## Bài 4: Sử dụng `bind()` để trì hoãn gọi hàm
```js
function sayHello() {
  console.log("Xin chào, tôi là " + this.name);
}

const obj = { name: "Linh" };
const boundHello = sayHello.bind(obj);

setTimeout(boundHello, 1000);
```
**Giải thích**: `bind` tạo hàm mới gắn `this = obj`, gọi sau 1 giây.

---

## Bài 5: Sửa lỗi `this` trong `setTimeout`
**Cách 1: Arrow function**
```js
const counter = {
  count: 0,
  increase: function() {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

counter.increase(); // 1
```

**Cách 2: Bind**
```js
const counter = {
  count: 0,
  increase: function() {
    setTimeout(function() {
      this.count++;
      console.log(this.count);
    }.bind(this), 1000);
  }
};

counter.increase(); // 1
```
**Giải thích**: Dùng arrow function để giữ `this` hoặc dùng `.bind(this)` để buộc `this` không thay đổi trong `setTimeout`.