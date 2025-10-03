
# 🧑‍🏫 Template Dẫn Dắt Bài Tập – Ngày 1: Bài 1 – Hoisting với `var`

## 🎯 Mục tiêu
Giúp học sinh hiểu rõ hoisting hoạt động thế nào với `var` và vì sao kết quả là `undefined` thay vì lỗi.

---

## 🧩 Bài tập:
```js
function test() {
  console.log(a);
  var a = 10;
}
test();
```

---

## 👨‍🏫 Hỏi – Đáp Dẫn Dắt

### ❓Giáo viên hỏi:
> Em nghĩ dòng `console.log(a);` sẽ in ra gì?

✅ Gợi ý: Dù `a` được khai báo sau, JavaScript vẫn cho phép chạy. Vì sao?

---

### ❓Giáo viên hỏi tiếp:
> Em còn nhớ `hoisting` là gì không?

✅ Gợi ý: JavaScript "kéo" phần nào lên đầu?

---

### ❓Giáo viên hỏi:
> Em nghĩ JavaScript kéo cả giá trị `a = 10` lên không?

✅ Gợi ý: Giá trị và khai báo khác nhau như thế nào?

---

### 💬 Học sinh trả lời xong, GV phản hồi:
> Đúng rồi! `var` chỉ được kéo khai báo lên đầu, còn giá trị gán thì không.  
> Nên `console.log(a)` xảy ra trước khi `a = 10`, do đó ta nhận `undefined`.

---

## 🔍 Diễn giải lại:
> Hãy tưởng tượng JS biến đoạn này thành:

```js
function test() {
  var a;            // Hoisted
  console.log(a);   // undefined
  a = 10;
}
```

---

## 🤔 Câu hỏi củng cố:

1. Nếu ta dùng `let` thay `var`, điều gì xảy ra?
2. Vì sao `var` in ra `undefined`, còn `let` lại báo lỗi?
3. `Hoisting` giúp ích hay gây rắc rối trong thực tế?

---

## ✍️ Giao nhiệm vụ nhỏ:
> Viết một đoạn code khác sử dụng `var` và `console.log()` trước dòng khai báo, rồi giải thích kết quả như giáo viên.

---

## 🧠 Tổng kết bài học:
- `var` hoisted + khởi tạo là `undefined`
- `let`/`const` cũng hoisted nhưng nằm trong TDZ → không truy cập được
- Dự đoán kết quả đòi hỏi hiểu thứ tự chạy chương trình (Execution Context)

