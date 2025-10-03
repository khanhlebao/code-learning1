# 🧑‍🏫 Buổi 12: Ôn Tập và Bài Kiểm Tra Nhỏ

## 🎯 Mục tiêu buổi học
- Ôn lại toàn bộ kiến thức JavaScript cơ bản đã học.
- Thực hành tổng hợp qua bài kiểm tra nhỏ.
- Rèn luyện kỹ năng tự suy nghĩ và viết code độc lập.

---

## 📚 Ôn tập kiến thức

| Chủ đề | Nội dung |
|--------|----------|
| Biến & kiểu dữ liệu | `let`, `const`, `number`, `string`, `boolean`, `array`, `object` |
| Toán tử | `+`, `-`, `*`, `/`, `%`, `==`, `===`, `&&`, `||`, `!` |
| Câu điều kiện | `if`, `else if`, `else` |
| Vòng lặp | `for`, `while` |
| Hàm | Tạo hàm, truyền tham số, `return` |
| Mảng | Duyệt mảng, `push`, `pop`, `length` |
| Đối tượng | Tạo object, truy cập thuộc tính, `for...in` |
| DOM | `getElementById`, `innerText`, `style`, `value` |
| Sự kiện | `onclick`, `addEventListener`, xử lý input và form |

---

## 🧪 Bài kiểm tra nhỏ

### Bài 1: Tính tổng các số chia hết cho 3 từ 1 đến 100

```js
let tong = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    tong += i;
  }
}
console.log("Tổng =", tong);
```

---

### Bài 2: Viết hàm kiểm tra số nguyên tố

```js
function laSoNguyenTo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(laSoNguyenTo(7)); // true
```

---

### Bài 3: Nhập tên học sinh, hiện lời chào

```html
<input id="ten" placeholder="Nhập tên" />
<button onclick="chao()">Chào</button>
<p id="ketqua"></p>

<script>
  function chao() {
    let ten = document.getElementById("ten").value;
    document.getElementById("ketqua").innerText = "Chào " + ten + "!";
  }
</script>
```

---

### Bài 4: Tìm học sinh có điểm cao nhất

```js
let lop = [
  { ten: "An", diem: 8 },
  { ten: "Bình", diem: 9 },
  { ten: "Chi", diem: 7.5 }
];

let max = lop[0];
for (let hs of lop) {
  if (hs.diem > max.diem) {
    max = hs;
  }
}
console.log("Học sinh điểm cao nhất:", max.ten, "-", max.diem);
```

---

## ✅ Tổng kết khóa học

- Đã nắm vững kiến thức JavaScript cơ bản.
- Có thể viết được các đoạn mã xử lý logic đơn giản.
- Sẵn sàng học nâng cao về DOM, ES6, lập trình web thực tế.

---