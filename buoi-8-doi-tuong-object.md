# 🧑‍🏫 Buổi 8: Đối Tượng (Object)

## 🎯 Mục tiêu buổi học
- Hiểu object là gì và khi nào sử dụng.
- Biết cách tạo và truy cập thuộc tính trong object.
- Lặp qua object bằng vòng lặp.
- Kết hợp object và array để quản lý dữ liệu.

---

## 🧠 1. Object là gì?

- Object là một tập hợp các cặp `tên: giá trị` (gọi là thuộc tính).
- Dùng để lưu thông tin có cấu trúc.

```js
let hocSinh = {
  ten: "An",
  tuoi: 15,
  lop: "9A"
};
```

---

## 🔍 2. Truy cập thuộc tính

```js
console.log(hocSinh.ten);     // "An"
console.log(hocSinh["tuoi"]); // 15
```

> Có thể dùng dấu chấm `.` hoặc ngoặc vuông `[]`.

---

## ✏️ 3. Thêm, sửa, xoá thuộc tính

```js
hocSinh.diem = 9;       // thêm
hocSinh.ten = "Bình";   // sửa
delete hocSinh.lop;     // xoá
```

---

## 🔁 4. Lặp qua object

```js
for (let key in hocSinh) {
  console.log(key + ":", hocSinh[key]);
}
```

---

## 📚 5. Mảng chứa object

```js
let lopHoc = [
  { ten: "An", tuoi: 15 },
  { ten: "Bình", tuoi: 14 }
];

for (let hs of lopHoc) {
  console.log(hs.ten + " - " + hs.tuoi + " tuổi");
}
```

---

## 🧪 Bài tập thực hành

### Bài 1: Tạo object thông tin học sinh

```js
let hs = {
  ten: "Chi",
  tuoi: 16,
  diem: 8.5
};
console.log(hs);
```

---

### Bài 2: In ra từng thuộc tính

```js
console.log("Tên:", hs.ten);
console.log("Tuổi:", hs["tuoi"]);
console.log("Điểm:", hs.diem);
```

---

### Bài 3: Duyệt object bằng `for...in`

```js
for (let key in hs) {
  console.log(key + ":", hs[key]);
}
```

---

### Bài 4: Tính điểm trung bình của lớp

```js
let lop = [
  { ten: "An", diem: 8 },
  { ten: "Bình", diem: 9 },
  { ten: "Chi", diem: 7 }
];

let tong = 0;
for (let hs of lop) {
  tong += hs.diem;
}
console.log("Điểm trung bình:", tong / lop.length);
```

---

## ✅ Tổng kết

| Nội dung | Ghi nhớ |
|----------|---------|
| Object là gì? | Tập hợp dữ liệu có cấu trúc |
| Truy cập | Dùng dấu `.` hoặc `[]` |
| Lặp object | Dùng `for...in` |
| Kết hợp | Dùng array chứa nhiều object |

---

## 📌 Ghi chú thêm cho giáo viên
- Có thể yêu cầu học sinh tạo danh sách học sinh rồi lọc ra người có điểm cao nhất.
- Giới thiệu sơ về JSON để liên hệ object với dữ liệu thực tế.