
# 🎓 Khóa học ReactJS – Buổi 1: Giới thiệu ReactJS & Viết Component đầu tiên

> Đây là buổi học mở đầu cho hành trình học ReactJS – một thư viện mạnh mẽ giúp xây dựng giao diện người dùng hiện đại, dễ bảo trì và dễ mở rộng. Trong buổi học này, bạn sẽ làm quen với các khái niệm cốt lõi: React, JSX, SPA và Component.

---

## 🎯 Mục tiêu buổi học

- Hiểu ReactJS là gì, đặc điểm nổi bật và tại sao nên học.
- Hiểu sự khác biệt giữa SPA và web truyền thống.
- Biết cách khởi tạo dự án ReactJS bằng Vite.
- Làm quen với cú pháp JSX.
- Viết được component đầu tiên và sử dụng trong ứng dụng React.

---

## 🔍 1. ReactJS là gì?

ReactJS là một **thư viện JavaScript** được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng (UI) theo cách **component-based** (dựa trên các thành phần).

### 🔸 Ưu điểm chính:
- Xây dựng **Single Page Application (SPA)** hiệu quả.
- Tổ chức giao diện thành các **component** độc lập → dễ bảo trì.
- **Hiệu suất cao** với kỹ thuật Virtual DOM.
- **Dễ mở rộng** và phù hợp với dự án nhỏ đến lớn.

### 🌐 So sánh với cách truyền thống:
| Tiêu chí              | Web truyền thống (HTML + JS) | ReactJS (SPA) |
|----------------------|-------------------------------|---------------|
| Tải lại trang         | Mỗi lần chuyển trang          | Không cần     |
| Cấu trúc mã           | Khó chia nhỏ                  | Component hóa |
| Trải nghiệm người dùng| Không mượt                    | Mượt và nhanh |

---

## 📄 2. SPA là gì?

**SPA (Single Page Application)** là ứng dụng web chạy trên một trang HTML duy nhất. Khi người dùng tương tác (chuyển trang, bấm nút…), nội dung được cập nhật bằng JavaScript mà **không cần reload toàn bộ trang**.

### 🔧 Lợi ích của SPA:
- Trải nghiệm nhanh, giống như ứng dụng desktop.
- Giảm tải server, chỉ fetch dữ liệu cần thiết.
- Thân thiện với người dùng.

---

## ⚙ 3. Tạo dự án React bằng Vite

### ✅ Vì sao dùng Vite thay vì CRA?
- Khởi tạo nhanh hơn nhiều so với CRA.
- Tối ưu cho phát triển frontend hiện đại.

### 🚀 Các bước thực hiện:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

### 📁 Cấu trúc thư mục chính:

| File/Thư mục        | Vai trò                                               |
|---------------------|--------------------------------------------------------|
| `main.jsx`          | Điểm bắt đầu của app, gắn React vào DOM               |
| `App.jsx`           | Component chính, chứa UI tổng thể                     |
| `public/index.html` | Khung HTML gốc, nơi React "bắt đầu sống"              |

---

## ✨ 4. JSX là gì?

**JSX (JavaScript XML)** là cú pháp mở rộng của JavaScript, cho phép viết HTML trong JS.

### 📝 Ví dụ đơn giản:

```jsx
function Welcome() {
  return <h1>Chào mừng đến với React!</h1>;
}
```

### 🔍 Những lưu ý khi viết JSX:
- Mỗi component **phải return một phần tử duy nhất** (dùng `<div>` hoặc `<>...</>`).
- Dùng `className` thay vì `class`.
- Nhúng biểu thức JavaScript bằng `{}` trong JSX.

### 💡 JSX không phải là HTML, nó sẽ được **biên dịch thành JavaScript** dưới dạng React.createElement()

---

## 🧩 5. Component trong React

Component là **đơn vị cơ bản trong React**, giúp chia nhỏ giao diện thành các phần độc lập và tái sử dụng được.

### 📦 Có 2 loại component:
1. **Function Component** – Dùng hàm JS để return JSX.
2. (Sẽ học sau) Class Component – Dùng class ES6 (ít phổ biến hơn hiện nay).

### ✅ Ví dụ function component:

```jsx
function Hello() {
  return <h2>👋 Xin chào! Đây là một component!</h2>;
}
```

### 📌 Gọi component trong `App.jsx`:

```jsx
function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}
```

### 🔑 Nguyên tắc quan trọng:
- Tên component **phải viết hoa chữ cái đầu** (`Hello`, `Navbar`).
- Có thể truyền dữ liệu vào component bằng `props` (học sau).

---

## 📚 Tổng kết nội dung

| Khái niệm       | Ghi nhớ quan trọng                            |
|----------------|------------------------------------------------|
| React          | Thư viện UI hiện đại, component-based          |
| JSX            | Cú pháp viết HTML trong JS                     |
| Component      | Hàm JS trả về JSX – dễ tái sử dụng             |
| SPA            | Web không reload khi chuyển trang              |
| Vite           | Công cụ khởi tạo project React nhanh và nhẹ    |

---

## 💬 Câu hỏi ôn tập

1. JSX là gì? Tại sao cần JSX thay vì viết thuần JavaScript?
2. React khác gì so với jQuery hoặc HTML truyền thống?
3. SPA hoạt động thế nào? Ưu điểm so với web truyền thống?
4. Tại sao component cần viết hoa chữ cái đầu?
5. Tại sao cần chia nhỏ UI thành nhiều component?

---

## 🧪 Bài tập thực hành

### Bài 1: Tạo component `Welcome`

- Tạo file `Welcome.jsx` và export một function component.
- Nội dung component: `Xin chào, mình là học viên ReactJS!`
- Import `Welcome` vào `App.jsx` và hiển thị.

### Bài 2: Thêm ảnh và giới thiệu

- Trong `App.jsx`, thêm một ảnh đại diện (sử dụng link online).
- Thêm một đoạn giới thiệu bản thân ngắn gọn (dùng thẻ `<p>`).

---

## 📌 Ghi chú chuyên sâu

> ReactJS không chỉ là thư viện UI – mà còn là tư duy về cách **chia nhỏ và tổ chức code** logic, có thể tái sử dụng và kiểm soát được dữ liệu.
