
# 📘 ReactJS – Buổi 9: Props Nâng Cao và Tổ Chức Component Hiệu Quả

> Tài liệu trình bày các khía cạnh nâng cao của props trong React như `children`, `props điều kiện`, và mô hình **composition** để xây dựng giao diện linh hoạt, tái sử dụng cao và dễ bảo trì.

---

## 🎯 Mục tiêu

- Hiểu rõ props đặc biệt `children` và cách sử dụng để truyền JSX lồng.
- Sử dụng props điều kiện để cấu hình linh hoạt hành vi component.
- Làm quen với mô hình composition – component lồng nhau theo chức năng.
- Thực hành tách và tổ chức giao diện theo mô hình phân tầng component.

---

## I. Prop `children`

### 1. Định nghĩa

`children` là một prop mặc định trong React – đại diện cho nội dung nằm **bên trong cặp thẻ** khi gọi component.

### 2. Ví dụ

```jsx
function Box({ children }) {
  return <div className="box">{children}</div>;
}

// Dùng component
<Box>
  <p>Nội dung bên trong Box</p>
</Box>
```

> `children` có thể là bất kỳ JSX nào: văn bản, phần tử, danh sách, thậm chí component khác.

---

## II. Điều kiện hóa hành vi bằng props

```jsx
function Button({ primary, children }) {
  const className = primary ? "btn btn-primary" : "btn";
  return <button className={className}>{children}</button>;
}
```

- Props boolean giúp điều chỉnh giao diện hoặc hành vi.
- Có thể đặt giá trị mặc định để tăng tính ổn định.

```jsx
Button.defaultProps = {
  primary: false
};
```

---

## III. Component Composition

### 1. Khái niệm

Composition là kỹ thuật **xây dựng UI bằng cách lồng các component lại với nhau** thay vì kế thừa.

### 2. Ví dụ:

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

<Card title="Thông báo">
  <p>Đây là nội dung bên trong card.</p>
</Card>
```

> Đây là cách tổ chức giao diện động, rõ ràng và tách biệt logic + trình bày.

---

## IV. Slot-like pattern – Nhiều vùng nội dung

```jsx
function Layout({ header, footer, children }) {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}

// Gọi
<Layout
  header={<h1>Tiêu đề</h1>}
  footer={<small>Bản quyền ©</small>}
>
  <p>Nội dung chính ở đây</p>
</Layout>
```

---

## V. Tổ chức giao diện theo tầng (Layout / Section / Item)

- Component tầng ngoài: Layout / Container
- Component trung gian: Section, Panel, Card
- Component cụ thể: Button, Avatar, Input, v.v.

> Tổ chức theo hướng này giúp tái sử dụng và test dễ hơn.

---

## VI. Tổng kết kiến thức

| Chủ đề                     | Nội dung chính                                                           |
|----------------------------|--------------------------------------------------------------------------|
| `children`                 | Prop mặc định chứa JSX con trong thẻ mở/đóng của component               |
| Props có điều kiện         | Cho phép cấu hình động (kiểu, trạng thái, kích thước…)                  |
| Composition pattern        | Xây dựng component từ các thành phần nhỏ hơn                            |
| Slot pattern               | Truyền nhiều vùng nội dung như `header`, `footer`, `sidebar`,…          |
| Kiến trúc UI phân tầng     | Phân cấp component theo chức năng để dễ tổ chức, tái sử dụng, bảo trì   |

---

## 📋 Câu hỏi ôn tập

1. Prop `children` là gì? Khi nào nó được sinh ra?
2. Tại sao nên tách component theo tầng (layout → section → control)?
3. Props điều kiện hoạt động như thế nào?
4. Composition khác gì so với kế thừa trong React?
5. Viết component `Card` có 3 props: `header`, `footer`, và `children`.

---

## 🧪 Bài tập thực hành

### Bài 1: Component `Box` có children

- Tạo component `Box` bọc nội dung truyền từ ngoài.
- Thêm border cho box bằng CSS.

### Bài 2: Component `Button` tùy biến

- Component `Button` có prop `primary`.
- Nếu `primary = true` → đổi màu nền, font đậm.

### Bài 3: Layout với vùng hiển thị

- Component `Layout` nhận props: `header`, `children`, `footer`.
- Gọi `Layout` với nội dung khác nhau cho từng phần.

---

## 📎 Ghi chú chuyên sâu

- Prop `children` là cách hữu hiệu để tái sử dụng khối nội dung giữa các component.
- Composition giúp thay thế tư duy kế thừa truyền thống, hỗ trợ cấu trúc UI linh hoạt hơn.
- Có thể kết hợp `children` và `props slot` để tạo giao diện động, tương tự “slot” trong Vue.
