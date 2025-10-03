## 🧠 Bài học 6: Async JS (callback, promise, async/await)

### ✅ Bài 1: Callback hell ví dụ
```js
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function task2() {
  console.log("Task 2 done");
}

task1(task2); // 👉 Task 1 done → Task 2 done
```

---

### ✅ Bài 2: Promise cơ bản
```js
function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

loadData().then((data) => console.log(data)); // 👉 Data loaded
```

---

### ✅ Bài 3: Dùng async/await
```js
async function fetchData() {
  const result = await loadData();
  console.log(result); // 👉 Data loaded
}

fetchData();
```

---

### ✅ Bài 4: Xử lý lỗi trong async
```js
async function mayFail() {
  throw new Error("Failed");
}

async function run() {
  try {
    await mayFail();
  } catch (e) {
    console.error("Caught:", e.message); // 👉 Caught: Failed
  }
}

run();
```