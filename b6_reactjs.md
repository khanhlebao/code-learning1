
# 📘 ReactJS – Buổi 6: Xử Lý Biểu Mẫu (Form) và Quản Lý Dữ Liệu Nhập

> Tài liệu trình bày chi tiết về cách xây dựng và xử lý biểu mẫu (form) trong React – một trong những phần thiết yếu khi thu thập dữ liệu từ người dùng. Bao gồm kỹ thuật xử lý input, quản lý nhiều trường và binding hai chiều.

---

## 🎯 Mục tiêu

- Hiểu cách tạo và xử lý biểu mẫu trong React.
- Quản lý giá trị của các input bằng state.
- Hiểu cơ chế "two-way binding".
- Biết cách xử lý nhiều input bằng state duy nhất.
- Làm quen với form có kiểm tra dữ liệu đầu vào cơ bản.

---

## I. Tổng quan về xử lý form trong React

Trong React, các phần tử form như `<input>`, `<textarea>`, `<select>` được gọi là **controlled components** – giá trị của chúng được điều khiển bởi state.

### 1. Tại sao cần kiểm soát form?

- Đảm bảo dữ liệu luôn đồng bộ với giao diện.
- Cho phép xử lý logic khi người dùng nhập (validation, format...).
- Kiểm soát tốt hơn toàn bộ quá trình submit.

---

## II. Controlled Component – Ví dụ đơn giản

```jsx
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <form>
      <label>
        Tên:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Xin chào, {name}</p>
    </form>
  );
}
```

---

## III. Two-Way Binding

### Khái niệm

Two-way binding là quá trình **ràng buộc dữ liệu 2 chiều** giữa UI và state:
- Khi state thay đổi → input cập nhật.
- Khi người dùng nhập → state được cập nhật.

React hỗ trợ điều này thông qua:
- `value={state}`
- `onChange={(e) => setState(e.target.value)}`

---

## IV. Quản lý nhiều input

Sử dụng object trong state để lưu nhiều trường:

```jsx
function MultiForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}
```

> `name` trong input phải trùng với tên key trong state.

---

## V. Xử lý sự kiện `onSubmit`

```jsx
function ContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn reload
    alert(`Email đã gửi: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Gửi</button>
    </form>
  );
}
```

---

## VI. Tổng kết kiến thức

| Chủ đề                     | Ý nghĩa chính                                                        |
|----------------------------|----------------------------------------------------------------------|
| Controlled Component       | Input được điều khiển bởi state React                               |
| Two-Way Binding            | Giao diện và state đồng bộ khi nhập liệu                            |
| Quản lý nhiều input        | Dùng state object và xử lý bằng `name` động                         |
| `onChange` & `value`       | Cặp điều kiện cần có để điều khiển dữ liệu đầu vào                   |
| `onSubmit`                 | Xử lý khi người dùng gửi form, thường đi kèm `e.preventDefault()`    |

---

## 📋 Câu hỏi ôn tập

1. Controlled component là gì?
2. Two-way binding trong React hoạt động như thế nào?
3. Tại sao cần dùng `e.preventDefault()` trong `onSubmit`?
4. Cách xử lý nhiều input bằng một state duy nhất?
5. Khi nào nên dùng `name` để xác định input?

---

## 🧪 Bài tập thực hành

### Bài 1: Form đơn giản

- Tạo một form nhập tên và hiển thị `"Xin chào, {tên}"` bên dưới.
- Dữ liệu phải được lưu trong state.

### Bài 2: Form liên hệ

- Form có các trường: `name`, `email`, `message`.
- Dùng state object để lưu toàn bộ dữ liệu.
- Khi submit → hiển thị thông báo `"Cảm ơn {name}, đã gửi thành công."`

### Bài 3: Đăng nhập cơ bản

- Form gồm `username` và `password`.
- In ra console giá trị khi submit.
- Reset form về rỗng sau khi gửi.

---

## 📎 Ghi chú chuyên sâu

- Với nhiều trường nhập → dùng object trong state giúp tổ chức dữ liệu rõ ràng.
- Có thể tách logic xử lý thành hàm riêng để giảm phức tạp cho component chính.
- Với form lớn hơn (nhiều field, validate...), có thể dùng thư viện như `Formik`, `React Hook Form` (sẽ học sau).
