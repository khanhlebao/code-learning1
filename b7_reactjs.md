
# 📘 ReactJS – Buổi 7: Styling trong React – CSS, Inline và CSS Modules

> Tài liệu trình bày tổng quan các phương pháp định kiểu (styling) trong React, từ cách tích hợp CSS truyền thống đến sử dụng inline styles và CSS Modules. Mục tiêu là xây dựng giao diện rõ ràng, dễ bảo trì và tránh xung đột class.

---

## 🎯 Mục tiêu

- Hiểu các phương pháp định kiểu phổ biến trong React.
- Biết cách áp dụng class CSS từ file `.css` vào component.
- Biết sử dụng inline style với đối tượng JavaScript.
- Hiểu CSS Modules và cách tổ chức style theo component.
- So sánh ưu nhược điểm của từng cách.

---

## I. Dùng CSS truyền thống (file .css)

### 1. Tạo và import file CSS

```jsx
// App.css
.title {
  color: blue;
  font-size: 24px;
}

// App.jsx
import "./App.css";

function App() {
  return <h1 className="title">Chào React</h1>;
}
```

> Dùng `className` thay vì `class` trong JSX.

### Ưu điểm:
- Dễ dùng, quen thuộc với người dùng HTML/CSS.
- Phù hợp với style toàn cục.

### Nhược điểm:
- Có thể bị **xung đột class** khi dự án lớn.
- Không có "scope" theo component.

---

## II. Dùng inline style (object style)

```jsx
function AlertBox() {
  const boxStyle = {
    color: "red",
    padding: "10px",
    backgroundColor: "#eee"
  };

  return <div style={boxStyle}>Cảnh báo!</div>;
}
```

> Giá trị trong inline style là **object JavaScript**.

### Lưu ý:
- Tên thuộc tính phải viết kiểu camelCase (`backgroundColor`, `fontSize`).
- Giá trị là string (nếu không phải số) hoặc số nếu đơn vị là px.

### Ưu điểm:
- Không bị ảnh hưởng bởi CSS ngoài.
- Dễ tùy biến động theo logic.

### Nhược điểm:
- Khó tái sử dụng.
- Không hỗ trợ pseudo-class (`:hover`, `:focus`) hay media query.

---

## III. Dùng CSS Modules

### 1. Tạo file `.module.css`

```css
/* styles.module.css */
.title {
  color: green;
  font-weight: bold;
}
```

### 2. Import và sử dụng

```jsx
import styles from "./styles.module.css";

function Welcome() {
  return <h2 className={styles.title}>Xin chào</h2>;
}
```

> Mỗi class trong module sẽ được đổi tên thành tên duy nhất khi build (`title_xyz123`), giúp **tránh xung đột class**.

---

## IV. So sánh các phương pháp

| Phương pháp       | Ưu điểm                                          | Nhược điểm                                        |
|-------------------|--------------------------------------------------|--------------------------------------------------|
| CSS truyền thống  | Dễ dùng, quen thuộc                             | Không scope hóa, dễ xung đột class               |
| Inline style      | Gọn, dễ thêm logic                              | Không hỗ trợ nhiều tính năng CSS nâng cao        |
| CSS Modules       | Tránh xung đột, tổ chức theo component          | Cần cấu hình build (Vite/CRA hỗ trợ sẵn)         |

---

## V. Tổng kết kiến thức

| Kỹ thuật             | Mục tiêu sử dụng                                              |
|----------------------|--------------------------------------------------------------|
| className            | Thay cho `class` trong JSX                                   |
| inline style         | Khi cần tuỳ biến logic trong style hoặc thay đổi động        |
| CSS Modules          | Scope style theo component, tránh trùng lặp                  |
| camelCase            | Quy tắc tên thuộc tính khi dùng object style trong JSX       |

---

## 📋 Câu hỏi ôn tập

1. Sự khác biệt giữa `class` và `className` trong React?
2. Vì sao nên tránh dùng CSS toàn cục cho component?
3. CSS Modules hoạt động như thế nào để tránh trùng tên class?
4. Lợi ích và hạn chế của inline style?
5. Khi nào nên dùng CSS Modules thay vì inline style?

---

## 🧪 Bài tập thực hành

### Bài 1: Dùng file CSS toàn cục

- Tạo file `App.css`.
- Viết class `.title` và áp dụng vào tiêu đề trong `App.jsx`.

### Bài 2: Dùng inline style

- Tạo component `Box` nhận props `color`, `padding`.
- Áp dụng inline style tuỳ theo props truyền vào.

### Bài 3: CSS Module

- Tạo `Welcome.module.css` với class `highlight`.
- Import vào component `Welcome.jsx` và áp dụng.

---

## 📎 Ghi chú chuyên sâu

- Với dự án lớn, nên ưu tiên dùng **CSS Modules** hoặc **CSS-in-JS** để quản lý style theo component.
- Một số thư viện CSS-in-JS phổ biến: `styled-components`, `emotion` (sẽ học ở phần nâng cao).
- Có thể kết hợp nhiều phương pháp nhưng cần thống nhất cấu trúc style trong dự án.
