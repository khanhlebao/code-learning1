# 📘 Bộ Bài Tập và Lời Giải – JavaScript Cơ Bản (12 Buổi)

Mỗi buổi học gồm **5 bài tập** từ dễ đến trung bình, có lời giải chi tiết kèm theo.

---

## 🔢 Buổi 1 – Giới thiệu JavaScript

**Bài 1:** Dùng `alert` để hiển thị "Xin chào bạn!"
```js
alert("Xin chào bạn!");
```

**Bài 2:** In ra tên và tuổi của bạn bằng `console.log`
```js
console.log("Tên: An");
console.log("Tuổi: 15");
```

**Bài 3:** Viết chương trình hiển thị "Chào mừng đến với JavaScript"
```js
console.log("Chào mừng đến với JavaScript");
```

**Bài 4:** Tạo file HTML và dùng `<script>` để hiện thông báo
```html
<script>
  alert("Chào bạn đến với trang web!");
</script>
```

**Bài 5:** Mở console và gõ `console.log("Thành công!")`
```js
console.log("Thành công!");
```

---

## 🧠 Buổi 2 – Biến và Kiểu Dữ Liệu

**Bài 1:** Tạo biến `ten`, `tuoi`, `lop`
```js
let ten = "Lan";
let tuoi = 14;
let lop = "9A";
```

**Bài 2:** Kiểm tra kiểu của từng biến bằng `typeof`
```js
console.log(typeof ten); // string
console.log(typeof tuoi); // number
```

**Bài 3:** Gán biến `x` bằng `undefined`, rồi gán lại số
```js
let x;
console.log(typeof x); // undefined
x = 10;
console.log(typeof x); // number
```

**Bài 4:** Tạo biến boolean `laHocSinh = true`
```js
let laHocSinh = true;
```

**Bài 5:** In ra object thông tin bản thân
```js
let ban = { ten: "Minh", tuoi: 13 };
console.log(ban);
```

---

## 📌 Buổi 3 – Toán Tử và Biểu Thức

**Bài 1:** Tính tổng 2 số
```js
let a = 7, b = 5;
console.log(a + b);
```

**Bài 2:** Kiểm tra `x == "5"` và `x === "5"`
```js
let x = 5;
console.log(x == "5");  // true
console.log(x === "5"); // false
```

**Bài 3:** Dùng `+=` và `*=`
```js
let y = 3;
y += 2; // 5
y *= 4; // 20
```

**Bài 4:** Dùng `&&` để kiểm tra điều kiện
```js
let tuoi = 20;
let laHocSinh = true;
console.log(tuoi > 18 && laHocSinh); // true
```

**Bài 5:** Dùng `||` để kiểm tra điều kiện thay thế
```js
let x = 1, y = 0;
console.log(x > 0 || y > 0); // true
```

---

(Sẽ tiếp tục với Buổi 4–12 nếu bạn đồng ý)

---

## ✅ Buổi 4 – Câu Lệnh Điều Kiện (if...else)

**Bài 1:** Kiểm tra số âm hay dương
```js
let x = -3;
if (x >= 0) {
  console.log("Số dương");
} else {
  console.log("Số âm");
}
```

**Bài 2:** Xếp loại học sinh theo điểm
```js
let diem = 7.5;
if (diem >= 8) {
  console.log("Giỏi");
} else if (diem >= 6.5) {
  console.log("Khá");
} else if (diem >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
```

**Bài 3:** Kiểm tra tuổi vào lớp 1
```js
let tuoi = 6;
if (tuoi === 6) {
  console.log("Đủ tuổi vào lớp 1");
} else {
  console.log("Không đúng tuổi");
}
```

**Bài 4:** Kiểm tra số chia hết cho 3 và 5
```js
let so = 15;
if (so % 3 === 0 && so % 5 === 0) {
  console.log("Chia hết cho cả 3 và 5");
} else {
  console.log("Không chia hết cho cả hai");
}
```

**Bài 5:** Kiểm tra năm nhuận
```js
let nam = 2024;
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log("Năm nhuận");
} else {
  console.log("Không nhuận");
}
```


---

## 🔁 Buổi 5 – Vòng Lặp (for, while)

**Bài 1:** In các số từ 1 đến 10 bằng `for`
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Bài 2:** In số chẵn từ 2 đến 20
```js
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

**Bài 3:** Tính tổng các số từ 1 đến 100
```js
let tong = 0;
for (let i = 1; i <= 100; i++) {
  tong += i;
}
console.log("Tổng =", tong);
```

**Bài 4:** Dùng `while` để in các số từ 5 đến 1
```js
let i = 5;
while (i >= 1) {
  console.log(i);
  i--;
}
```

**Bài 5:** Tính giai thừa của một số `n`
```js
let n = 5;
let giaiThua = 1;
for (let i = 1; i <= n; i++) {
  giaiThua *= i;
}
console.log("Giai thừa của", n, "là", giaiThua);
```


---

## 🧮 Buổi 6 – Hàm (Function)

**Bài 1:** Viết hàm chào "Xin chào bạn!"
```js
function chao() {
  console.log("Xin chào bạn!");
}
chao();
```

**Bài 2:** Viết hàm tính tổng hai số
```js
function tong(a, b) {
  return a + b;
}
console.log(tong(3, 5)); // 8
```

**Bài 3:** Viết hàm kiểm tra số chẵn
```js
function laChan(n) {
  return n % 2 === 0;
}
console.log(laChan(4)); // true
console.log(laChan(7)); // false
```

**Bài 4:** Viết hàm tính bình phương của một số
```js
function binhPhuong(x) {
  return x * x;
}
console.log(binhPhuong(6)); // 36
```

**Bài 5:** Viết hàm tính tổng từ 1 đến n
```js
function tongTu1DenN(n) {
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong += i;
  }
  return tong;
}
console.log(tongTu1DenN(10)); // 55
```


---

## 📚 Buổi 7 – Mảng (Array)

**Bài 1:** Tạo mảng chứa 5 số và in ra từng số
```js
let mang = [3, 5, 7, 9, 11];
for (let i = 0; i < mang.length; i++) {
  console.log(mang[i]);
}
```

**Bài 2:** Tính tổng các phần tử trong mảng
```js
let ds = [2, 4, 6];
let tong = 0;
for (let so of ds) {
  tong += so;
}
console.log("Tổng =", tong);
```

**Bài 3:** Tìm số lớn nhất trong mảng
```js
let ds = [3, 7, 2, 9, 5];
let max = ds[0];
for (let so of ds) {
  if (so > max) max = so;
}
console.log("Số lớn nhất là:", max);
```

**Bài 4:** Thêm số vào cuối mảng rồi in mảng mới
```js
let ds = [1, 2];
ds.push(3);
console.log(ds); // [1, 2, 3]
```

**Bài 5:** Đảo ngược mảng
```js
let ds = [1, 2, 3, 4];
let dao = ds.reverse();
console.log(dao); // [4, 3, 2, 1]
```


---

## 🧱 Buổi 8 – Đối Tượng (Object)

**Bài 1:** Tạo object học sinh với tên, tuổi, điểm
```js
let hocSinh = {
  ten: "An",
  tuoi: 15,
  diem: 8.5
};
```

**Bài 2:** In ra từng thuộc tính của object
```js
console.log("Tên:", hocSinh.ten);
console.log("Tuổi:", hocSinh.tuoi);
console.log("Điểm:", hocSinh.diem);
```

**Bài 3:** Thêm thuộc tính mới vào object
```js
hocSinh.lop = "9A";
console.log(hocSinh);
```

**Bài 4:** Duyệt qua các thuộc tính bằng `for...in`
```js
for (let key in hocSinh) {
  console.log(key + ":", hocSinh[key]);
}
```

**Bài 5:** Tìm học sinh có điểm cao nhất trong lớp
```js
let lop = [
  { ten: "An", diem: 7 },
  { ten: "Bình", diem: 9 },
  { ten: "Chi", diem: 8 }
];

let gioiNhat = lop[0];
for (let hs of lop) {
  if (hs.diem > gioiNhat.diem) {
    gioiNhat = hs;
  }
}
console.log("Học sinh giỏi nhất:", gioiNhat.ten, "-", gioiNhat.diem);
```


---

## 🌐 Buổi 9 – Làm Việc Với DOM

**Bài 1:** Lấy phần tử có `id="ten"` và đổi nội dung
```html
<p id="ten">Tên cũ</p>
<script>
  document.getElementById("ten").innerText = "Tên mới";
</script>
```

**Bài 2:** Thay đổi màu chữ của phần tử `id="vanban"`
```html
<p id="vanban">Chữ sẽ đổi màu</p>
<script>
  document.getElementById("vanban").style.color = "blue";
</script>
```

**Bài 3:** Gán ảnh mới cho phần tử `img`
```html
<img id="hinh" src="" />
<script>
  document.getElementById("hinh").src = "https://picsum.photos/200";
</script>
```

**Bài 4:** Thay đổi kích thước chữ khi bấm nút
```html
<p id="text">Đoạn văn bản</p>
<button onclick="phongTo()">Phóng to</button>
<script>
  function phongTo() {
    document.getElementById("text").style.fontSize = "24px";
  }
</script>
```

**Bài 5:** Gán giá trị từ input vào thẻ `p`
```html
<input id="nhap" placeholder="Nhập tên" />
<p id="hien"></p>
<button onclick="hienTen()">Hiện tên</button>
<script>
  function hienTen() {
    let ten = document.getElementById("nhap").value;
    document.getElementById("hien").innerText = "Xin chào " + ten;
  }
</script>
```


---

## 🖱️ Buổi 10 – Sự Kiện (Event)

**Bài 1:** Hiện thông báo khi bấm nút
```html
<button onclick="alert('Chào bạn!')">Bấm tôi</button>
```

**Bài 2:** Đổi màu nền khi rê chuột vào ô vuông
```html
<div id="box" style="width:100px;height:100px;background:gray;"></div>
<script>
  let box = document.getElementById("box");
  box.addEventListener("mouseover", () => box.style.background = "red");
  box.addEventListener("mouseout", () => box.style.background = "gray");
</script>
```

**Bài 3:** Hiện chữ đang nhập trong ô input
```html
<input id="txt" />
<p id="show"></p>
<script>
  document.getElementById("txt").addEventListener("input", function() {
    document.getElementById("show").innerText = this.value;
  });
</script>
```

**Bài 4:** Đếm số lần bấm nút
```html
<button id="btn">Bấm</button>
<p id="count">0</p>
<script>
  let so = 0;
  document.getElementById("btn").addEventListener("click", function() {
    so++;
    document.getElementById("count").innerText = so;
  });
</script>
```

**Bài 5:** Hiện thông báo khi nhấn phím `Enter`
```html
<input id="input" />
<script>
  document.getElementById("input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      alert("Bạn vừa nhấn Enter!");
    }
  });
</script>
```


---

## 🧮 Buổi 11 – Ứng Dụng Máy Tính Mini

**Bài 1:** Viết giao diện nhập 2 số và 1 nút tính tổng
```html
<input id="a" type="number" />
<input id="b" type="number" />
<button onclick="tinhTong()">Tính</button>
<p id="kq"></p>
<script>
  function tinhTong() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    document.getElementById("kq").innerText = "Tổng: " + (a + b);
  }
</script>
```

**Bài 2:** Viết nút thực hiện phép trừ
```js
function tinhHieu() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  document.getElementById("kq").innerText = "Hiệu: " + (a - b);
}
```

**Bài 3:** Kiểm tra chia được hay không trước khi chia
```js
function chia() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  if (b === 0) {
    alert("Không thể chia cho 0");
  } else {
    document.getElementById("kq").innerText = "Thương: " + (a / b);
  }
}
```

**Bài 4:** Gộp các phép tính vào 1 hàm duy nhất
```js
function tinh(phepToan) {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let kq;
  if (phepToan === '+') kq = a + b;
  else if (phepToan === '-') kq = a - b;
  else if (phepToan === '*') kq = a * b;
  else if (phepToan === '/') kq = b !== 0 ? a / b : "Không chia được";
  document.getElementById("kq").innerText = "Kết quả: " + kq;
}
```

**Bài 5:** Làm đẹp giao diện máy tính
```html
<style>
  input, button { margin: 5px; padding: 5px; }
  #kq { font-weight: bold; color: green; }
</style>
```


---

## 📝 Buổi 12 – Ôn Tập và Kiểm Tra Nhỏ

**Bài 1:** Tính tổng các số chia hết cho 3 từ 1 đến 100
```js
let tong = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) tong += i;
}
console.log("Tổng =", tong);
```

**Bài 2:** Viết hàm kiểm tra số nguyên tố
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

**Bài 3:** Nhập tên học sinh và hiện lời chào
```html
<input id="ten" placeholder="Nhập tên" />
<button onclick="chao()">Chào</button>
<p id="loichao"></p>
<script>
  function chao() {
    let ten = document.getElementById("ten").value;
    document.getElementById("loichao").innerText = "Chào bạn " + ten + "!";
  }
</script>
```

**Bài 4:** Tính điểm trung bình của lớp và phân loại
```js
let lop = [
  { ten: "An", diem: 8 },
  { ten: "Bình", diem: 9 },
  { ten: "Chi", diem: 7.5 }
];
let tong = 0;
for (let hs of lop) {
  tong += hs.diem;
}
let dtb = tong / lop.length;
console.log("Điểm TB:", dtb);
if (dtb >= 8) console.log("Giỏi");
else if (dtb >= 6.5) console.log("Khá");
else console.log("Trung bình hoặc yếu");
```

**Bài 5:** Tìm học sinh có điểm cao nhất
```js
let gioiNhat = lop[0];
for (let hs of lop) {
  if (hs.diem > gioiNhat.diem) {
    gioiNhat = hs;
  }
}
console.log("HS điểm cao nhất:", gioiNhat.ten, "-", gioiNhat.diem);
```
