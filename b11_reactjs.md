
# 📘 ReactJS – Buổi 11: useRef – Truy Cập DOM và Lưu Trạng Thái Không Gây Re-render

> Tài liệu trình bày chi tiết về hook `useRef` trong React – dùng để **tham chiếu đến DOM** hoặc lưu trữ giá trị **không ảnh hưởng đến quá trình render**. Đây là công cụ cần thiết khi làm việc với tương tác DOM hoặc giữ lại thông tin giữa các lần render.

---

## 🎯 Mục tiêu

- Hiểu rõ `useRef` là gì và khác gì so với `useState`.
- Sử dụng `useRef` để truy cập phần tử DOM.
- Lưu biến đếm, cache hoặc ID mà không làm re-render.
- Kết hợp `useRef` với `useEffect` và các sự kiện người dùng.

---

## I. Cú pháp `useRef`

```jsx
import { useRef } from "react";

const ref = useRef(initialValue);
```

- `ref.current` là nơi chứa giá trị.
- Không gây re-render khi `ref.current` thay đổi.

---

## II. Truy cập phần tử DOM

```jsx
function FocusInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus vào input</button>
    </>
  );
}
```

> `ref={inputRef}` gán input DOM vào `inputRef.current`

---

## III. Lưu giá trị không re-render

```jsx
function Timer() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Giá trị hiện tại:", countRef.current);
  };

  return <button onClick={increment}>Tăng</button>;
}
```

- Giá trị `countRef.current` thay đổi mà không gây re-render component.

---

## IV. So sánh `useState` vs `useRef`

| Thuộc tính        | `useState`                         | `useRef`                            |
|-------------------|-------------------------------------|-------------------------------------|
| Gây re-render     | ✅ Có                              | ❌ Không                            |
| Truy cập DOM      | ❌ Không                           | ✅ Có thể gán vào DOM element       |
| Lưu giá trị tức thời | ✅ Có thể nhưng trigger render | ✅ Nhanh, giữ nguyên qua nhiều render |

---

## V. Dùng useRef để lưu giá trị trước đó

```jsx
function PreviousValue({ value }) {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <p>
      Giá trị hiện tại: {value} – Giá trị trước đó: {prevRef.current}
    </p>
  );
}
```

---

## VI. Tổng kết kiến thức

| Chủ đề                     | Ý nghĩa chính                                                      |
|----------------------------|---------------------------------------------------------------------|
| `useRef`                   | Hook lưu trữ giá trị không gây re-render, hoặc tham chiếu đến DOM |
| `ref.current`              | Thuộc tính chứa dữ liệu/tham chiếu hiện tại                       |
| DOM access                 | Có thể truy cập phần tử DOM trực tiếp qua `ref`                   |
| Biến tạm, ID, cache        | Dùng `useRef` lưu trạng thái phụ trợ, counter, timeout ID,...     |
| `useRef` vs `useState`     | `useRef` không render lại component, khác với `useState`          |

---

## 📋 Câu hỏi ôn tập

1. `useRef` dùng để làm gì?
2. Tại sao thay đổi `ref.current` không làm component render lại?
3. Khi nào nên dùng `useRef` thay vì `useState`?
4. Viết ví dụ sử dụng `useRef` để focus vào ô input.
5. So sánh `useRef` với `useEffect` về thời điểm hoạt động.

---

## 🧪 Bài tập thực hành

### Bài 1: Focus input

- Tạo một input và nút "Focus".
- Nhấn nút → focus vào input bằng `useRef`.

### Bài 2: Đếm không render

- Tạo nút "Tăng".
- Dùng `useRef` để lưu số lần nhấn.
- Hiển thị giá trị qua `console.log`.

### Bài 3: Theo dõi giá trị trước đó

- Component nhận prop `value`.
- Dùng `useRef` lưu giá trị trước của prop.
- Hiển thị cả giá trị hiện tại và trước đó.

---

## 📎 Ghi chú chuyên sâu

- `useRef` hữu ích trong các trường hợp cần lưu trạng thái tạm, ID timeout, hay logic điều kiện không cần render lại.
- Tránh lạm dụng `useRef` để lưu dữ liệu nên hiển thị – nên dùng `useState` cho dữ liệu giao diện.
- Với `forwardRef` (nâng cao), có thể chuyển ref từ component cha xuống component con.

