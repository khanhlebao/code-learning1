
# 📘 ReactJS – Buổi 3: State và Quản lý Dữ Liệu Nội Bộ

> Tài liệu này trình bày chi tiết về khái niệm **State** trong React – cơ chế giúp component lưu trữ dữ liệu và tự động cập nhật giao diện khi dữ liệu thay đổi. Đây là nền tảng quan trọng để xây dựng giao diện tương tác động trong React.

---

## 🎯 Mục tiêu

- Hiểu rõ khái niệm `State` trong React và sự khác biệt so với `Props`.
- Sử dụng thành thạo `useState` để quản lý dữ liệu nội bộ của component.
- Áp dụng state để xây dựng giao diện động phản hồi theo hành vi người dùng.
- Phân tích cơ chế re-render và nguyên lý hoạt động khi cập nhật state.

---

## I. Tổng quan về State

### 1. Định nghĩa

**State** là dữ liệu nội tại (internal) của một component trong React, phản ánh **tình trạng hiện tại** và có thể **thay đổi theo thời gian** hoặc hành vi người dùng.

State thường được sử dụng để:
- Lưu trữ dữ liệu động (đếm số lần bấm, nội dung nhập vào form…).
- Điều khiển trạng thái giao diện (ẩn/hiện, bật/tắt…).
- Kết hợp với `Props` để điều hướng dữ liệu trong cấu trúc component.

---

## II. So sánh: Props vs State

| Tiêu chí           | Props (Thuộc tính)                  | State (Trạng thái nội tại)               |
|--------------------|--------------------------------------|------------------------------------------|
| Nguồn dữ liệu      | Từ component cha                    | Được định nghĩa trong chính component    |
| Khả năng thay đổi  | Không thể thay đổi từ bên trong     | Có thể thay đổi với `setState`           |
| Tác động UI        | Khi props thay đổi → re-render      | Khi state thay đổi → re-render           |
| Mục đích sử dụng   | Truyền dữ liệu xuống component con | Quản lý dữ liệu thay đổi nội tại         |

---

## III. Hook `useState`

### 1. Cú pháp sử dụng

```jsx
import { useState } from "react";

const [state, setState] = useState(initialValue);
```

- `state`: giá trị hiện tại của trạng thái.
- `setState`: hàm cập nhật giá trị và kích hoạt re-render.

---

## IV. Ví dụ cơ bản: Bộ đếm

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```

### Phân tích:

- `useState(0)` khởi tạo state với giá trị ban đầu là 0.
- Khi gọi `setCount(count + 1)`, React sẽ:
  - Cập nhật `count`.
  - Thực hiện re-render component.
  - Giao diện hiển thị lại với giá trị mới.

---

## V. Cập nhật giao diện qua State

State là trung tâm phản ánh thay đổi của dữ liệu lên giao diện. Khi một giá trị được cập nhật qua `setState`, React sẽ tự động:
1. Ghi nhận giá trị mới.
2. Kích hoạt re-render component.
3. Cập nhật DOM tương ứng.

---

## VI. Ví dụ nâng cao

### 1. Ô nhập liệu (Input form):

```jsx
function NameForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Xin chào, {name}!</p>
    </div>
  );
}
```

### 2. Toggle trạng thái:

```jsx
function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? "Bật" : "Tắt"}
    </button>
  );
}
```

---

## VII. Các kiểu dữ liệu có thể dùng với State

- **Primitive**: `string`, `number`, `boolean`
- **Complex**: `array`, `object`
- Cần sao chép sâu (spread/cloning) khi cập nhật object/array để tránh lỗi tham chiếu.

---

## VIII. Tổng kết kiến thức

| Chủ điểm                 | Ý nghĩa chính                                                       |
|--------------------------|----------------------------------------------------------------------|
| State                    | Lưu dữ liệu thay đổi trong component                                |
| useState                 | Hook dùng để tạo và quản lý state trong function component          |
| setState                 | Hàm cập nhật state, kích hoạt render lại component                  |
| So sánh với Props        | Props truyền từ cha → con; state là dữ liệu nội tại của chính component |
| Re-render                | Cơ chế React cập nhật UI theo thay đổi state                        |

---

## 📋 Câu hỏi ôn tập

1. State dùng để làm gì trong React?
2. `useState` trả về những gì? Vì sao cần destructuring?
3. Điều gì xảy ra khi gọi `setState`?
4. So sánh sự khác nhau giữa `Props` và `State`.
5. Điều gì khiến component được render lại?

---

## 🧪 Bài tập thực hành

### Bài 1: Bộ đếm số (Counter nâng cao)

Tạo component đếm số lần bấm với 3 nút:
- Nút “Tăng” → tăng 1.
- Nút “Giảm” → giảm 1.
- Nút “Reset” → về 0.

### Bài 2: Form nhập tên

Tạo form nhập tên và hiển thị nội dung `"Xin chào, {tên}"` phía dưới theo thời gian thực.

### Bài 3: Toggle chế độ (Dark/Light)

Tạo một nút chuyển trạng thái bật/tắt:
- Dùng state boolean.
- Thay đổi nội dung hiển thị tương ứng.

---

## 📎 Ghi chú chuyên sâu

- Không nên cập nhật state theo kiểu trực tiếp (`state++`), thay vào đó hãy dùng `setState`.
- Tránh lặp gọi `setState` liên tục nếu không cần thiết.
- Khi state là object hoặc array → nên dùng spread operator (`{...}`, `[...]`) để tạo bản sao trước khi cập nhật.
