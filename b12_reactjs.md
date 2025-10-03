
# 📘 ReactJS – Buổi 12: useContext – Chia Sẻ Dữ Liệu Giữa Các Component

> Tài liệu trình bày chi tiết về hook `useContext` và khái niệm **Context API** trong React – giúp chia sẻ dữ liệu giữa nhiều component mà không cần truyền props lồng nhau.

---

## 🎯 Mục tiêu

- Hiểu khái niệm Context và lý do sử dụng.
- Biết cách tạo, cung cấp và sử dụng Context.
- So sánh với props truyền tay (prop drilling).
- Thực hành chia sẻ theme, user info, cấu hình ứng dụng qua context.

---

## I. Vấn đề: Truyền props qua nhiều tầng

```jsx
function App() {
  return <Parent username="Nam" />;
}

function Parent({ username }) {
  return <Child username={username} />;
}

function Child({ username }) {
  return <p>Xin chào, {username}</p>;
}
```

> Khi component sâu cần dữ liệu từ gốc → phải truyền qua nhiều lớp → gọi là **prop drilling**.

---

## II. Context là gì?

**Context** cho phép chia sẻ dữ liệu giữa các component **mà không cần truyền thủ công qua props** từng cấp.

---

## III. Tạo Context

```jsx
import { createContext } from "react";

const UserContext = createContext();
```

---

## IV. Cung cấp Context (Provider)

```jsx
<UserContext.Provider value="Nam">
  <Child />
</UserContext.Provider>
```

---

## V. Sử dụng Context (Consumer hoặc `useContext`)

```jsx
import { useContext } from "react";

function Child() {
  const username = useContext(UserContext);
  return <p>Xin chào, {username}</p>;
}
```

---

## VI. Ví dụ đầy đủ

```jsx
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Nút theo giao diện: {theme}</button>;
}
```

---

## VII. useContext và component lồng

- Context chỉ có hiệu lực bên trong `Provider`.
- Có thể đặt `Provider` nhiều nơi trong cây component để chia tách vùng dữ liệu.

---

## VIII. Tổng kết kiến thức

| Chủ đề                    | Ý nghĩa chính                                                        |
|---------------------------|-----------------------------------------------------------------------|
| Context                   | Cách chia sẻ dữ liệu toàn cục trong React                            |
| createContext             | Tạo ra đối tượng Context                                             |
| Provider                  | Cung cấp giá trị cho cây component bên trong                         |
| useContext                | Hook dùng để truy xuất giá trị của context                           |
| Prop drilling             | Hiện tượng truyền props qua nhiều lớp trung gian                     |

---

## 📋 Câu hỏi ôn tập

1. Context giúp giải quyết vấn đề gì?
2. Sự khác biệt giữa truyền props và context là gì?
3. Cách sử dụng `useContext` để truy xuất dữ liệu?
4. Tại sao `Provider` phải bao quanh component con?
5. Viết cấu trúc chia sẻ theme `"light"` hoặc `"dark"` qua context.

---

## 🧪 Bài tập thực hành

### Bài 1: Giao diện người dùng

- Tạo context `UserContext`.
- Cung cấp tên người dùng `"Lan"` từ App → hiển thị trong component con.

### Bài 2: Theme Toggle

- Tạo `ThemeContext` với `"light"` và `"dark"`.
- Component `Button` nhận class tùy thuộc vào theme.

### Bài 3: Quản lý cấu hình app

- Tạo context `ConfigContext` chứa: `{ language: "vi", debug: true }`.
- Hiển thị ngôn ngữ hiện tại trong một component sâu.

---

## 📎 Ghi chú chuyên sâu

- Context không phải để thay thế state – chỉ dùng cho dữ liệu toàn cục cần chia sẻ rộng (user, theme, config...).
- Mỗi context nên gắn với một mục đích rõ ràng, tránh lồng ghép nhiều giá trị không liên quan.
- Với ứng dụng lớn, nên tách riêng `ContextProvider` thành component riêng để dễ quản lý.
