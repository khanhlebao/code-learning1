
# 🧠 Buổi 5: Class và Kế thừa trong JavaScript

---

## 🎯 Mục tiêu
- Làm chủ class trong ES6+: constructor, method, kế thừa, static, private field.
- Giải thích từng khái niệm kỹ lưỡng, ví dụ dễ hiểu.
- Biết áp dụng class vào mô hình hóa thực tế.

---

## 📘 1. Class là gì?

### 🧾 Khái niệm:
Class là một "khuôn mẫu" để tạo ra các đối tượng (object). Nó giống như bản thiết kế, còn object là sản phẩm được tạo từ thiết kế đó.

### 🔧 Cú pháp:
```js
class TenClass {
  constructor(thamSo) {
    this.thuocTinh = giaTri;
  }

  phuongThuc() {
    // hành động
  }
}
```

### 🧪 Ví dụ:
```js
class Nguoi {
  constructor(ten, tuoi) {
    this.ten = ten;
    this.tuoi = tuoi;
  }

  gioiThieu() {
    return `Tôi là ${this.ten}, ${this.tuoi} tuổi.`;
  }
}

const a = new Nguoi("Linh", 18);
console.log(a.gioiThieu()); // Tôi là Linh, 18 tuổi.
```

---

## 📘 2. Constructor – Hàm khởi tạo

### 🧾 Khái niệm:
`constructor` là hàm đặc biệt tự chạy khi dùng `new` để tạo object từ class.

> Dùng để khởi tạo thuộc tính ban đầu cho object.

---

## 📘 3. Method – Phương thức

### 🧾 Khái niệm:
Phương thức là hàm gắn liền với object (nằm trong class). Dùng để hành xử (hành động) của đối tượng.

---

## 📘 4. Kế thừa với `extends` và `super()`

### 🧾 Khái niệm:
- `extends`: Tạo class con kế thừa từ class cha.
- `super()`: Gọi đến constructor (hoặc method) của class cha.

### 🧪 Ví dụ:
```js
class Nguoi {
  constructor(ten) {
    this.ten = ten;
  }

  chao() {
    return `Chào bạn, tôi là ${this.ten}`;
  }
}

class HocSinh extends Nguoi {
  constructor(ten, lop) {
    super(ten); // Gọi constructor Nguoi
    this.lop = lop;
  }

  chao() {
    return `${super.chao()} và tôi học lớp ${this.lop}`;
  }
}

const hs = new HocSinh("Quân", "12A1");
console.log(hs.chao());
// Chào bạn, tôi là Quân và tôi học lớp 12A1
```

---

## 📘 5. Ghi đè phương thức – Method override

### 🧾 Khái niệm:
Khi class con định nghĩa lại method trùng tên với class cha → phương thức của class con sẽ ghi đè.

> Dùng `super.tenMethod()` để gọi lại phương thức cha nếu cần.

---

## 📘 6. Static Method và Field

### 🧾 Khái niệm:
- `static`: Gắn với class, không gắn với instance (object).
- Dùng khi hành vi không phụ thuộc dữ liệu từng đối tượng.

### 🧪 Ví dụ:
```js
class ToanHoc {
  static PI = 3.14;

  static binhPhuong(x) {
    return x * x;
  }
}

console.log(ToanHoc.binhPhuong(3)); // 9
console.log(ToanHoc.PI); // 3.14
```

> Không cần `new ToanHoc()`.

---

## 📘 7. Trường riêng tư (Private fields)

### 🧾 Khái niệm:
- Đặt tên thuộc tính với `#` để làm biến private (chỉ dùng bên trong class).
- Không thể truy cập từ ngoài object.

### 🧪 Ví dụ:
```js
class TaiKhoan {
  #soDu = 0;

  napTien(tien) {
    this.#soDu += tien;
  }

  xemSoDu() {
    return this.#soDu;
  }
}

const tk = new TaiKhoan();
tk.napTien(1000);
console.log(tk.xemSoDu()); // 1000
// console.log(tk.#soDu); // ❌ Lỗi: không truy cập được
```

---

## 📘 8. Dùng `instanceof` để kiểm tra đối tượng

```js
console.log(tk instanceof TaiKhoan); // true
console.log(hs instanceof Nguoi);    // true
```

---

## 📘 9. So sánh Class và Function Constructor

```js
// Function Constructor (ES5)
function NguoiCu(ten) {
  this.ten = ten;
}
NguoiCu.prototype.chao = function () {
  return `Tôi là ${this.ten}`;
};

// Class (ES6)
class NguoiMoi {
  constructor(ten) {
    this.ten = ten;
  }
  chao() {
    return `Tôi là ${this.ten}`;
  }
}
```

> Class là cú pháp mới gọn hơn, dễ tổ chức và kế thừa hơn.

---

## 📌 Tổng kết

| Tính năng        | Mô tả                                                              |
|------------------|---------------------------------------------------------------------|
| `constructor`    | Hàm chạy khi khởi tạo object                                       |
| `extends`        | Cho phép kế thừa class                                             |
| `super()`        | Gọi constructor hoặc method từ class cha                           |
| `static`         | Dùng cho method không cần tạo object                               |
| `#private`       | Trường/method chỉ dùng trong class                                 |
| `override`       | Ghi đè phương thức class cha                                       |
| `instanceof`     | Kiểm tra mối quan hệ object–class                                  |

---

## ❓ Câu hỏi ôn tập

1. Vì sao cần `super()` trong constructor?
2. Lợi ích khi dùng static method?
3. Sự khác nhau giữa class và function constructor?
4. Trường hợp nào nên dùng private field?
5. Làm sao để ghi đè method cha mà vẫn dùng được code gốc?

---

