# 🧑‍🏫 Buổi 10: Sự Kiện (Event)

## 🎯 Mục tiêu buổi học
- Hiểu sự kiện là gì trong JavaScript.
- Biết cách xử lý các sự kiện như click, input, mouse.
- Gắn sự kiện vào phần tử HTML bằng `addEventListener`.

---

## 🧠 1. Sự kiện là gì?

- Là hành động do người dùng thực hiện trên trang web (bấm, gõ, di chuột,...).
- JavaScript cho phép bắt các sự kiện này để phản hồi lại.

---

## 🖱️ 2. Gắn sự kiện trực tiếp trong HTML

```html
<button onclick="chao()">Bấm vào đây</button>

<script>
  function chao() {
    alert("Chào bạn!");
  }
</script>
```

---

## 🧩 3. Gắn sự kiện bằng `addEventListener`

```html
<button id="nut">Bấm đi</button>

<script>
  let btn = document.getElementById("nut");
  btn.addEventListener("click", function () {
    alert("Bạn vừa bấm!");
  });
</script>
```

---

## 🔥 4. Một số sự kiện phổ biến

| Sự kiện | Mô tả |
|--------|------|
| `click` | Khi người dùng bấm chuột |
| `mouseover` | Khi chuột di vào phần tử |
| `mouseout` | Khi chuột rời khỏi phần tử |
| `keydown` | Khi nhấn phím |
| `input` | Khi nhập liệu |
| `submit` | Khi gửi form |

---

## 🧪 Bài tập thực hành

### Bài 1: Hiện thông báo khi bấm nút

```html
<button onclick="alert('Bạn vừa bấm nút!')">Bấm em!</button>
```

---

### Bài 2: Đổi màu nền khi rê chuột

```html
<div id="hop" style="width:100px;height:100px;background:gray;"></div>

<script>
  let hop = document.getElementById("hop");

  hop.addEventListener("mouseover", function () {
    hop.style.background = "blue";
  });

  hop.addEventListener("mouseout", function () {
    hop.style.background = "gray";
  });
</script>
```

---

### Bài 3: Hiện chữ khi gõ vào input

```html
<input type="text" id="ten" />
<p id="hienTen"></p>

<script>
  let input = document.getElementById("ten");
  let hien = document.getElementById("hienTen");

  input.addEventListener("input", function () {
    hien.innerText = "Bạn vừa nhập: " + input.value;
  });
</script>
```

---

### Bài 4: Đếm số lần bấm nút

```html
<button id="nut">Bấm</button>
<p id="dem">0</p>

<script>
  let nut = document.getElementById("nut");
  let dem = document.getElementById("dem");
  let soLan = 0;

  nut.addEventListener("click", function () {
    soLan++;
    dem.innerText = soLan;
  });
</script>
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Sự kiện là gì? | Hành động tương tác của người dùng |
| Cách xử lý | Dùng `onclick`, `addEventListener` |
| Sự kiện phổ biến | `click`, `input`, `mouseover`, `keydown`, ... |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể kết hợp nhiều sự kiện để tạo hiệu ứng tương tác sinh động.
- Khuyến khích học sinh thử tạo "đồng hồ bấm giờ", "đổi màu nền tự động" để thực hành thêm.