# 🧑‍🏫 Buổi 11: Ứng Dụng Nhỏ – Máy Tính Mini

## 🎯 Mục tiêu buổi học
- Vận dụng kiến thức đã học: DOM, hàm, sự kiện.
- Tạo ứng dụng tính toán đơn giản (cộng, trừ, nhân, chia).
- Biết tổ chức mã nguồn rõ ràng, dễ bảo trì.

---

## 🧠 Kiến thức ôn tập

- DOM: `getElementById`, thay đổi nội dung phần tử.
- Hàm: dùng để xử lý tính toán.
- Sự kiện: xử lý bằng `onclick`.

---

## 💻 Giao diện HTML

```html
<h2>Máy tính mini</h2>

<input type="number" id="so1" placeholder="Số thứ 1" />
<input type="number" id="so2" placeholder="Số thứ 2" />

<br/><br/>

<button onclick="tinh('+')">Cộng</button>
<button onclick="tinh('-')">Trừ</button>
<button onclick="tinh('*')">Nhân</button>
<button onclick="tinh('/')">Chia</button>

<p id="ketqua">Kết quả: </p>
```

---

## 🧠 JavaScript xử lý

```js
function tinh(phepToan) {
  let a = parseFloat(document.getElementById("so1").value);
  let b = parseFloat(document.getElementById("so2").value);
  let kq;

  if (phepToan === "+") {
    kq = a + b;
  } else if (phepToan === "-") {
    kq = a - b;
  } else if (phepToan === "*") {
    kq = a * b;
  } else if (phepToan === "/") {
    kq = b !== 0 ? a / b : "Không chia được cho 0";
  }

  document.getElementById("ketqua").innerText = "Kết quả: " + kq;
}
```

---

## 🧪 Bài tập mở rộng

### Bài 1: Kiểm tra nhập rỗng

```js
if (isNaN(a) || isNaN(b)) {
  alert("Vui lòng nhập đủ hai số!");
  return;
}
```

---

### Bài 2: Tô màu kết quả

```js
document.getElementById("ketqua").style.color = "green";
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| DOM | Dùng để lấy dữ liệu từ input và cập nhật kết quả |
| Hàm | Dùng để xử lý phép tính dựa trên tham số |
| Sự kiện | Gắn vào nút để xử lý khi người dùng nhấn |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể nâng cấp ứng dụng thêm nút “Xóa kết quả” hoặc “Làm mới”.
- Khuyến khích học sinh tự tạo phiên bản máy tính nâng cao hơn có giao diện đẹp.