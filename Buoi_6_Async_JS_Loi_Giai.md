
# 📝 Lời giải chi tiết – Buổi 6: Callback, Promise, Async/Await

---

## ✅ Bài 1: Hàm delay dùng Promise

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log("Đã đợi xong");
});
```

Giải thích: `setTimeout` được bao trong Promise → khi timeout kết thúc thì resolve được gọi.

---

## ✅ Bài 2: Hàm `layDuLieu` với callback

```js
function layDuLieu(callback) {
  setTimeout(() => {
    const data = { name: "Sản phẩm A", gia: 1000 };
    callback(data);
  }, 2000);
}

layDuLieu((result) => {
  console.log("Dữ liệu nhận được:", result);
});
```

---

## ✅ Bài 3: Viết lại bằng Promise

```js
function layDuLieu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "Sản phẩm A", gia: 1000 };
      resolve(data);
    }, 2000);
  });
}

layDuLieu().then((result) => {
  console.log("Dữ liệu nhận được:", result);
});
```

---

## ✅ Bài 4: Viết lại bằng async/await

```js
function layDuLieu() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: "Sản phẩm A", gia: 1000 };
      resolve(data);
    }, 2000);
  });
}

async function hienThi() {
  const result = await layDuLieu();
  console.log("Dữ liệu nhận được:", result);
}

hienThi();
```

---

## ✅ Bài 5: Chuỗi hành động – 3 cách

### ➤ Cách 1: Callback

```js
function moCua(callback) {
  setTimeout(() => {
    console.log("Mở cửa");
    callback();
  }, 1000);
}

function phaTra(callback) {
  setTimeout(() => {
    console.log("Pha trà");
    callback();
  }, 1000);
}

function uongTra() {
  setTimeout(() => {
    console.log("Uống trà");
  }, 1000);
}

moCua(() => {
  phaTra(() => {
    uongTra();
  });
});
```

---

### ➤ Cách 2: Promise chain

```js
function moCua() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Mở cửa");
      res();
    }, 1000);
  });
}

function phaTra() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Pha trà");
      res();
    }, 1000);
  });
}

function uongTra() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Uống trà");
      res();
    }, 1000);
  });
}

moCua().then(phaTra).then(uongTra);
```

---

### ➤ Cách 3: Async/Await

```js
async function lamViec() {
  await moCua();
  await phaTra();
  await uongTra();
}

lamViec();
```

> Mỗi bước đợi xong mới chạy bước tiếp theo.

---
