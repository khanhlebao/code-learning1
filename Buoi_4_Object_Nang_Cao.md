
# 🧠 Buổi 4: Object nâng cao trong JavaScript

## 🎯 Mục tiêu học tập
- Làm chủ các thao tác với object trong ES6+.
- Sử dụng hiệu quả `Object.assign`, spread operator (`...`), getter/setter.
- Hiểu và áp dụng nguyên lý kế thừa qua prototype chain.

---

## 📘 1. `Object.assign()` – Sao chép và hợp nhất object

### ✅ Mô tả:
`Object.assign()` sao chép thuộc tính từ một hoặc nhiều object nguồn vào object đích.

### ✅ Cú pháp:
```js
Object.assign(target, ...sources)
```

### ✅ Ví dụ:
```js
const user = { name: "Linh" };
const info = { age: 20 };
const result = Object.assign({}, user, info);

console.log(result); // { name: "Linh", age: 20 }
```

> **Lưu ý:** Đây là **shallow copy** – nếu giá trị là object, nó sẽ không sao chép sâu.

---

## 📘 2. Spread Operator (`...`) – Cách viết gọn hơn

### ✅ Dùng để:
- Sao chép object
- Gộp nhiều object

### ✅ Ví dụ:
```js
const a = { x: 1 };
const b = { y: 2 };
const c = { ...a, ...b };

console.log(c); // { x: 1, y: 2 }
```

> Cách viết tương đương `Object.assign({}, a, b)` nhưng ngắn gọn hơn.

---

## 📘 3. Getter và Setter – Kiểm soát truy cập

### ✅ Mô tả:
- **Getter**: Được gọi khi lấy giá trị.
- **Setter**: Được gọi khi gán giá trị.

### ✅ Ví dụ:
```js
const user = {
  firstName: "Mai",
  lastName: "Trang",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(user.fullName); // Mai Trang
user.fullName = "An Nhiên";
console.log(user.firstName); // An
```

---

## 📘 4. Prototype & Prototype Chain

### ✅ Prototype là gì?
Mỗi object đều "kế thừa" từ prototype (ngoại lệ: Object.create(null)).

### ✅ Ví dụ:
```js
const animal = {
  speak() {
    console.log("Gâu gâu!");
  }
};

const dog = Object.create(animal);
dog.speak(); // Gâu gâu!
```

> Khi gọi `dog.speak()`, JS sẽ tìm `speak` trên `dog`, nếu không thấy sẽ tìm trên `animal` (prototype).

---

## 📌 Tổng kết nhanh

| Tính năng         | Ý nghĩa                                                      |
|------------------|--------------------------------------------------------------|
| `Object.assign`  | Gộp nhiều object thành 1 object mới (shallow copy)           |
| Spread (`...`)   | Trải các thuộc tính object (gộp, sao chép)                   |
| Getter/Setter    | Tùy chỉnh việc truy cập và gán thuộc tính                    |
| Prototype Chain  | Cơ chế kế thừa thuộc tính/phương thức giữa các object       |

---

## ❓ Câu hỏi ôn tập

1. Sự khác nhau giữa `Object.assign` và spread là gì?
2. Khi nào dùng getter/setter? Ưu điểm?
3. Prototype là gì? Prototype chain giúp ích như thế nào?
4. Làm sao để tạo object kế thừa từ object khác?
5. Shallow copy khác deep copy ra sao?

---

## 🧪 Bài tập thực hành

1. Tạo object `sach` có các thuộc tính (`tieuDe`, `tacGia`, `namXB`) và một getter `moTa`.
2. Gộp 2 object `nguoi` và `diaChi` bằng `Object.assign` và spread.
3. Tạo object `hinhVuong` có `canh`, getter `chuVi`, setter `dienTich`.
4. Tạo object `meo` kế thừa từ `dongVat`, thử gọi phương thức của `dongVat`.
5. Dùng `Object.create()` tạo object `hs`, kế thừa từ object `nguoi`, sau đó thêm thuộc tính `lop` vào prototype.
