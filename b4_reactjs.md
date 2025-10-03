
# 📘 ReactJS – Buổi 4: Xử Lý Sự Kiện và Điều Kiện Hiển Thị (Event & Conditional Rendering)

> Tài liệu này tập trung vào hai kỹ năng quan trọng khi xây dựng giao diện tương tác trong React: **bắt sự kiện (event handling)** và **hiển thị có điều kiện (conditional rendering)**. Đây là nền tảng để xây dựng các ứng dụng phản hồi theo hành vi người dùng.

---

## 🎯 Mục tiêu

- Hiểu cơ chế bắt sự kiện trong React.
- Biết cách viết hàm xử lý sự kiện và gán vào element JSX.
- Làm chủ kỹ thuật hiển thị điều kiện (if, ternary, short-circuit...).
- Xây dựng các component có hành vi tương tác phức tạp hơn.

---

## I. Bắt sự kiện trong React (Event Handling)

### 1. Tổng quan

React sử dụng **sự kiện tổng hợp (Synthetic Events)** – là lớp bao quanh sự kiện gốc DOM để hoạt động đồng nhất trên mọi trình duyệt.

Cú pháp sự kiện trong JSX tương tự HTML, nhưng:
- Dùng **camelCase** (`onClick`, `onChange`, `onSubmit`...)
- Truyền **một hàm**, không phải chuỗi.

### 2. Ví dụ sự kiện `onClick`

```jsx
function AlertButton() {
  function handleClick() {
    alert("Bạn vừa nhấn nút!");
  }

  return <button onClick={handleClick}>Bấm tôi</button>;
}
```

---

## II. Truyền tham số vào hàm xử lý sự kiện

Có thể truyền tham số bằng arrow function:

```jsx
function GreetButton({ name }) {
  const greet = (user) => alert(`Xin chào ${user}!`);

  return <button onClick={() => greet(name)}>Chào</button>;
}
```

> Tránh gọi trực tiếp `greet(name)` vì sẽ chạy ngay khi render.

---

## III. Điều kiện hiển thị (Conditional Rendering)

### 1. Cần thiết khi nào?

- Hiển thị hoặc ẩn thành phần giao diện tùy theo logic.
- Ví dụ: hiển thị form đăng nhập nếu chưa đăng nhập, hoặc thông tin người dùng nếu đã đăng nhập.

---

### 2. Các cách xử lý phổ biến

#### a. Câu lệnh `if` trong function:

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Chào mừng trở lại!</p>;
  }
  return <p>Vui lòng đăng nhập.</p>;
}
```

#### b. Toán tử 3 ngôi (ternary):

```jsx
<p>{isDarkMode ? "Chế độ tối" : "Chế độ sáng"}</p>
```

#### c. Toán tử `&&` (short-circuit):

```jsx
{hasError && <p className="error">Đã xảy ra lỗi.</p>}
```

---

## IV. Ví dụ tổng hợp

```jsx
function ToggleMessage() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ẩn" : "Hiện"} thông báo
      </button>
      {visible && <p>Đây là nội dung có thể ẩn/hiện</p>}
    </div>
  );
}
```

---

## V. Tổng kết kiến thức

| Chủ đề                     | Ý nghĩa chính                                                              |
|----------------------------|----------------------------------------------------------------------------|
| Event Handling             | Bắt sự kiện người dùng (click, input, submit...)                          |
| Synthetic Event            | Hệ thống sự kiện thống nhất của React                                     |
| Gán hàm xử lý sự kiện      | Truyền function trực tiếp vào prop như `onClick`, `onChange`              |
| Conditional Rendering      | Hiển thị hoặc ẩn component dựa vào giá trị logic                          |
| Ternary / if / &&          | Các phương pháp xử lý điều kiện phổ biến trong JSX                        |

---

## 📋 Câu hỏi ôn tập

1. React sử dụng loại sự kiện gì? Synthetic Event là gì?
2. Cách gán hàm xử lý sự kiện `onClick` đúng cú pháp là gì?
3. Khi nào cần hiển thị có điều kiện? Kể tên 3 cách viết.
4. Phân biệt cách dùng toán tử `&&` và ternary `? :` trong JSX.
5. Viết một component có nút bấm ẩn/hiện đoạn văn bản.

---

## 🧪 Bài tập thực hành

### Bài 1: Toggle hiển thị văn bản

- Tạo component có nút “Ẩn/Hiện”.
- Nhấn nút sẽ hiện hoặc ẩn đoạn văn bản phía dưới.

### Bài 2: Đổi màu nền

- Tạo một nút “Chuyển chế độ”.
- Khi nhấn → đổi màu nền giữa “sáng” và “tối”.

### Bài 3: Giao diện điều kiện đăng nhập

- Tạo một biến `isLoggedIn`.
- Nếu true → hiển thị `Xin chào!`, nếu false → hiển thị `Vui lòng đăng nhập.`

---

## 📎 Ghi chú chuyên sâu

- Không nên lồng nhiều biểu thức điều kiện trong JSX → tách thành hàm phụ hoặc biến.
- Gắn sự kiện bằng function để tránh gọi sớm (`onClick={() => doSomething()}`).
- Conditional rendering giúp tối ưu UI nhưng cần viết rõ ràng, tránh lạm dụng lồng nhiều tầng.

