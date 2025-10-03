
# 🎓 Khóa học ReactJS – Buổi 2: Props & Component Tái Sử Dụng

> Trong buổi học thứ hai này, bạn sẽ học cách truyền dữ liệu giữa các component bằng **props**, một khái niệm cốt lõi để giúp component trở nên linh hoạt và tái sử dụng.

---

## 🎯 Mục tiêu buổi học

- Hiểu khái niệm **props** trong React là gì và dùng để làm gì.
- Biết cách truyền dữ liệu từ component cha xuống component con.
- Viết được các component có thể **tái sử dụng** với dữ liệu khác nhau.
- Làm quen với destructuring props và props mặc định.

---

## 📦 1. Props là gì?

**Props** (viết tắt của "properties") là cách **truyền dữ liệu** từ **component cha** vào **component con**.

### 📌 Bản chất:
- Props là **đối số** của function component.
- Props là **read-only** – không thể thay đổi bên trong component con.
- Props giúp component **tái sử dụng được với dữ liệu khác nhau**.

---

## 🧪 2. Ví dụ đơn giản

### 📁 `Welcome.jsx`:

```jsx
function Welcome(props) {
  return <h2>Chào bạn, {props.name}!</h2>;
}
```

### 📁 `App.jsx`:

```jsx
function App() {
  return (
    <div>
      <Welcome name="Minh" />
      <Welcome name="Lan" />
      <Welcome name="Hùng" />
    </div>
  );
}
```

### ✅ Kết quả:

```
Chào bạn, Minh!
Chào bạn, Lan!
Chào bạn, Hùng!
```

---

## 🔍 3. Destructuring Props

### 💡 Định nghĩa "Destructuring":

**Destructuring** là cú pháp trong JavaScript giúp **"giải nén" giá trị từ object hoặc array** vào các biến riêng biệt.

Ví dụ với object:

```js
const user = { name: "Lan", age: 25 };
const { name, age } = user;
console.log(name); // "Lan"
console.log(age);  // 25
```

Thay vì phải viết `user.name`, `user.age`, bạn có thể **lấy trực tiếp** các giá trị `name` và `age`.

---

## 🧩 Áp dụng vào Props

Trong React, props thường là một object. Do đó, bạn có thể destructure props để viết code gọn gàng hơn.

### So sánh:

🔸 Cách truyền thống (không destructure):

```jsx
function Welcome(props) {
  return <h2>Chào {props.name}, bạn {props.age} tuổi</h2>;
}
```

🔹 Dùng destructure:

```jsx
function Welcome({ name, age }) {
  return <h2>Chào {name}, bạn {age} tuổi</h2>;
}
```

> 🎯 Dễ đọc hơn, đặc biệt khi có nhiều props.

---

## 🚀 Lợi ích khi dùng Destructuring Props

| Lợi ích                          | Giải thích                                               |
|----------------------------------|-----------------------------------------------------------|
| Code ngắn gọn hơn                | Không phải viết `props.tên` nhiều lần                    |
| Dễ đọc, dễ hiểu                  | Nhìn vào là biết component nhận props nào                |
| Tránh lỗi                       | Tránh việc viết sai `props.xxx` khi lặp đi lặp lại       |
| Tăng khả năng tái sử dụng        | Component dễ cấu hình hơn với nhiều props khác nhau      |

---

## 📦 Kết hợp với props mặc định:

```jsx
function Welcome({ name = "bạn mới", age = 18 }) {
  return <p>Xin chào {name}, bạn {age} tuổi!</p>;
}
```

> Nếu `name` hoặc `age` không được truyền vào → sẽ dùng giá trị mặc định.
---

## 🛠️ 4. Component tái sử dụng

Ví dụ tạo một **component hiển thị thẻ người dùng**:

```jsx
function UserCard({ name, avatar, bio }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
```

Sử dụng trong `App.jsx`:

```jsx
<UserCard
  name="Nguyễn Văn A"
  avatar="https://i.pravatar.cc/100"
  bio="Lập trình viên ReactJS"
/>
```

> 📦 Bạn có thể dùng `UserCard` cho **nhiều người dùng khác nhau** chỉ bằng cách đổi props.

---

## 🧠 5. Props mặc định (defaultProps)

Khi không truyền một props nào đó, có thể định nghĩa giá trị mặc định:

```jsx
function Welcome({ name = "khách" }) {
  return <h2>Xin chào, {name}!</h2>;
}
```

---

## 🚫 6. Lưu ý về Props

| Sai lầm thường gặp       | Cách làm đúng                                    |
|--------------------------|--------------------------------------------------|
| Thay đổi trực tiếp props | Không được: `props.name = "A"` ❌                |
| Không truyền props       | Dùng giá trị mặc định hoặc kiểm tra có tồn tại   |
| Gọi component thường     | Đặt tên component viết **hoa chữ cái đầu** ✅    |

---

## 📚 Tổng kết nội dung

| Khái niệm     | Ý nghĩa                                                              |
|--------------|----------------------------------------------------------------------|
| Props         | Truyền dữ liệu từ component cha xuống con                           |
| Destructuring | Trích xuất thuộc tính từ đối tượng props                            |
| Tái sử dụng   | Component hoạt động linh hoạt với dữ liệu truyền vào                |

---

## 💬 Câu hỏi ôn tập

1. Props là gì? Có thể thay đổi giá trị của props trong component con không?
2. Tại sao nên dùng destructuring khi làm việc với props?
3. Khi nào nên dùng props mặc định?
4. Component tái sử dụng là gì? Tại sao nó quan trọng?

---

## 🧪 Bài tập thực hành

### Bài 1: Component `ProfileCard`

- Tạo component `ProfileCard` hiển thị:
  - Ảnh đại diện (link online)
  - Tên người dùng
  - Mô tả ngắn
- Sử dụng props: `name`, `avatar`, `desc`.

### Bài 2: Danh sách bạn bè

- Trong `App.jsx`, gọi `ProfileCard` 3 lần với 3 dữ liệu khác nhau.

---

## 📌 Ghi chú chuyên sâu

> Props là **con đường giao tiếp chính giữa các component** trong React. Hãy luyện tập tạo các component nhỏ gọn, linh hoạt – có thể hiển thị nội dung khác nhau nhờ props.

---


