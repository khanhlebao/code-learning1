
# 📘 ReactJS – Buổi 5: Render Danh Sách và Sử Dụng Key trong React

> Tài liệu trình bày chi tiết về cách hiển thị danh sách phần tử trong React, sử dụng `.map()` để render lặp component và vai trò quan trọng của thuộc tính `key` trong hiệu suất và sự ổn định của giao diện.

---

## 🎯 Mục tiêu

- Hiểu cơ chế render danh sách trong React.
- Biết cách sử dụng `.map()` để tạo nhiều component từ mảng dữ liệu.
- Nắm rõ vai trò của thuộc tính `key` và cách đặt key hợp lý.
- Xử lý danh sách động từ state (thêm, xoá, cập nhật).

---

## I. Render danh sách bằng `.map()`

### 1. Khái niệm

Trong React, `.map()` được sử dụng để duyệt mảng và render ra các phần tử JSX tương ứng.

### 2. Ví dụ cơ bản

```jsx
const names = ["Lan", "Minh", "Hùng"];

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

> Mỗi phần tử cần có `key` riêng biệt để React theo dõi sự thay đổi.

---

## II. Vai trò của `key`

### 1. Định nghĩa

`key` là một thuộc tính đặc biệt giúp React **xác định từng phần tử trong danh sách** để tối ưu việc cập nhật DOM.

### 2. Tại sao cần `key`?

- Giúp React xác định phần tử nào bị thay đổi, thêm hoặc xoá.
- Giảm số lần re-render không cần thiết.
- Tránh lỗi UI (ví dụ: mất focus input, thứ tự sai...).

---

### 3. Nguyên tắc đặt `key`

| Cách đặt `key`          | Khuyến nghị                                |
|-------------------------|---------------------------------------------|
| Dùng id duy nhất (nếu có)| ✅ Tốt nhất                                 |
| Dùng index trong `.map()`| ⚠️ Chỉ dùng khi danh sách không thay đổi thứ tự |
| Dùng giá trị trùng lặp   | ❌ Tránh – dễ gây lỗi UI                    |

---

## III. Tách component con khi render danh sách

```jsx
function UserItem({ name }) {
  return <li>{name}</li>;
}

function UserList() {
  const users = ["An", "Bình", "Cường"];

  return (
    <ul>
      {users.map((u, i) => (
        <UserItem key={i} name={u} />
      ))}
    </ul>
  );
}
```

> Việc tách component giúp code dễ bảo trì, mở rộng và test.

---

## IV. Render danh sách từ state

Dữ liệu trong danh sách thường đến từ state hoặc API.

```jsx
function TaskList() {
  const [tasks, setTasks] = useState(["Đọc sách", "Viết code"]);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}
```

---

## V. Thêm phần tử vào danh sách

```jsx
function AddItem() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const addItem = () => {
    setItems([...items, text]);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Thêm</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
```

---

## VI. Tổng kết kiến thức

| Chủ điểm                   | Nội dung chính                                                             |
|----------------------------|---------------------------------------------------------------------------|
| Render danh sách           | Duyệt mảng dữ liệu bằng `.map()` và trả về JSX                           |
| Key trong React            | Giúp React xác định và tối ưu phần tử khi thay đổi danh sách             |
| Đặt key đúng cách          | Ưu tiên ID duy nhất, tránh dùng index nếu danh sách có thể thay đổi     |
| Danh sách trong state      | Cho phép thao tác thêm/xoá dữ liệu linh hoạt                             |
| Component con              | Nên tách component để dễ mở rộng, đặc biệt khi danh sách phức tạp        |

---

## 📋 Câu hỏi ôn tập

1. Tại sao cần dùng `.map()` khi render danh sách?
2. Vai trò của thuộc tính `key` là gì?
3. Điều gì xảy ra nếu không khai báo `key` hoặc dùng key trùng?
4. Khi nào nên và không nên dùng `index` làm key?
5. Viết một component cho phép nhập dữ liệu và thêm vào danh sách.

---

## 🧪 Bài tập thực hành

### Bài 1: Danh sách công việc

- Tạo một input để nhập việc.
- Nhấn nút “Thêm” sẽ hiển thị việc đó trong danh sách.
- Dữ liệu lưu trong state.

### Bài 2: Danh sách số yêu thích

- Tạo nút thêm số ngẫu nhiên (Math.random).
- Hiển thị tất cả số đã thêm trong danh sách.
- Mỗi số hiển thị bằng component con `NumberItem`.

### Bài 3: Danh sách với key duy nhất

- Cho mảng dữ liệu có dạng `{ id, name }`.
- Render danh sách tên và dùng `id` làm key.
- Bài tập kiểm tra khả năng xử lý dữ liệu dạng object.

---

## 📎 Ghi chú chuyên sâu

- Khi render nhiều component, luôn đảm bảo mỗi phần tử có `key` riêng biệt.
- Tránh dùng index làm key nếu danh sách có thể sắp xếp lại hoặc thêm/xoá phần tử giữa chừng.
- Có thể kết hợp `.filter()` và `.map()` để vừa lọc vừa render danh sách động.
