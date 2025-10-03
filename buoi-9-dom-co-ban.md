# 🧑‍🏫 Buổi 9: Làm Việc Với DOM (Document Object Model)

## 🎯 Mục tiêu buổi học
- Hiểu DOM là gì và tại sao cần DOM.
- Biết cách truy cập và thay đổi phần tử HTML bằng JavaScript.
- Biết cách thay đổi nội dung, thuộc tính và kiểu dáng (CSS) của phần tử.

---

## 🧠 1. DOM là gì?

- DOM (Document Object Model) là cách JavaScript tương tác với HTML.
- Mỗi phần tử HTML được coi như một "đối tượng" có thể điều khiển bằng mã lệnh.

---

## 🔍 2. Truy cập phần tử trong DOM

| Cách | Mô tả |
|------|------|
| `getElementById` | Tìm phần tử theo `id` |
| `getElementsByClassName` | Tìm theo class (trả về danh sách) |
| `querySelector` | Tìm phần tử đầu tiên phù hợp với CSS selector |

```html
<p id="chao">Xin chào</p>

<script>
  let p = document.getElementById("chao");
  console.log(p.innerText); // Xin chào
</script>
```

---

## 📝 3. Thay đổi nội dung

```js
document.getElementById("chao").innerText = "Chào bạn đến với lớp JS!";
```

---

## 🎨 4. Thay đổi kiểu dáng (CSS)

```js
let p = document.getElementById("chao");
p.style.color = "blue";
p.style.fontSize = "20px";
```

---

## ⚙️ 5. Thay đổi thuộc tính

```js
let anh = document.getElementById("hinh");
anh.src = "anh-moi.jpg";
```

---

## 🧪 Bài tập thực hành

### Bài 1: Thay đổi nội dung khi bấm nút

```html
<p id="loiChao">Xin chào!</p>
<button onclick="doiNoiDung()">Đổi lời chào</button>

<script>
  function doiNoiDung() {
    document.getElementById("loiChao").innerText = "Chúc bạn học tốt!";
  }
</script>
```

---

### Bài 2: Đổi màu chữ bằng JavaScript

```html
<p id="vanBan">Đây là đoạn văn bản</p>
<button onclick="doiMau()">Đổi màu</button>

<script>
  function doiMau() {
    document.getElementById("vanBan").style.color = "red";
  }
</script>
```

---

### Bài 3: Hiện ảnh khi bấm nút

```html
<img id="anh" src="" width="200" />
<button onclick="hienAnh()">Hiện ảnh</button>

<script>
  function hienAnh() {
    document.getElementById("anh").src = "https://picsum.photos/200";
  }
</script>
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| DOM là gì? | Cách JS điều khiển HTML |
| Truy cập phần tử | Dùng `getElementById`, `querySelector`, ... |
| Thay đổi | Dùng `.innerText`, `.style`, `.src` để chỉnh nội dung, giao diện |

---

## 📌 Ghi chú thêm cho giáo viên
- Cho học sinh thử tạo bài mini như "chuyển đổi chủ đề sáng/tối".
- Giới thiệu thêm về sự kiện `onmouseover`, `onchange` nếu học sinh tiếp thu nhanh.