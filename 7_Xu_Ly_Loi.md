## 🧠 Bài học 7: Xử lý lỗi nâng cao

### ✅ Bài 1: Sử dụng try-catch cơ bản
```js
try {
  const a = 1 / 0;
  console.log("Tiếp tục...");
} catch (e) {
  console.error("Lỗi:", e.message);
}
```

---

### ✅ Bài 2: Tự tạo lỗi bằng `throw`
```js
function divide(a, b) {
  if (b === 0) throw new Error("Không chia được cho 0");
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.error(e.message); // 👉 Không chia được cho 0
}
```

---

### ✅ Bài 3: Tạo class lỗi riêng
```js
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}

throw new MyError("Lỗi tùy chỉnh");
```

---

### ✅ Bài 4: Xử lý lỗi bất đồng bộ
```js
async function errorAsync() {
  throw new Error("Lỗi async");
}

(async () => {
  try {
    await errorAsync();
  } catch (e) {
    console.error("Async caught:", e.message); // 👉 Async caught: Lỗi async
  }
})();
```