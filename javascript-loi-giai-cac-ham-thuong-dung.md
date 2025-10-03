
# ✅ Lời giải chi tiết – Câu hỏi lý thuyết & bài tập JS (Các hàm thường dùng)

---

## 📚 I. Lời giải câu hỏi lý thuyết

1. **Hàm `split()` trong JavaScript có công dụng gì và trả về kiểu dữ liệu nào?**  
   → `split()` dùng để tách chuỗi thành mảng con dựa theo ký tự phân tách. Kết quả trả về là một `Array`.

2. **Phân biệt sự khác nhau giữa `map()` và `forEach()` trong mảng?**  
   → `map()` trả về một mảng mới với các giá trị được biến đổi từ mảng gốc, còn `forEach()` chỉ lặp qua mảng và không trả về gì.

3. **Khi nào nên dùng `parseInt()` thay vì `Number()` để ép kiểu chuỗi sang số?**  
   → Dùng `parseInt()` khi bạn muốn phân tích số nguyên từ chuỗi (có thể chứa cả chữ), còn `Number()` dùng khi cần chuyển đổi toàn bộ chuỗi sang số nếu hợp lệ.

4. **Tại sao biểu thức chính quy thường được dùng với phương thức `replace()`?**  
   → Regex giúp tìm kiếm theo mẫu phức tạp và có thể thay thế tất cả ký tự phù hợp bằng cách kết hợp với flag `g`.

5. **`Math.random()` hoạt động như thế nào và làm sao để lấy số ngẫu nhiên từ 1 đến 100?**  
   → `Math.random()` trả về số thực từ 0 đến nhỏ hơn 1. Để lấy số từ 1 đến 100:
   ```js
   Math.floor(Math.random() * 100) + 1;
   ```

---

## 🧪 II. Lời giải bài tập thực hành

1. **Tách chuỗi thành mảng từ, bỏ khoảng trắng thừa**
   ```js
   function splitWords(str) {
     return str.trim().split(/\s+/);
   }
   ```

2. **Kiểm tra chuỗi có chứa từ khóa**
   ```js
   function containsKeyword(str, keyword) {
     return str.includes(keyword);
   }
   ```

3. **Chuyển chữ thành chữ thường**
   ```js
   function toLower(str) {
     return str.toLowerCase();
   }
   ```

4. **Tính tổng số chẵn trong mảng**
   ```js
   function sumEven(arr) {
     return arr.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
   }
   ```

5. **Tìm số lớn nhất**
   ```js
   function findMax(arr) {
     return Math.max(...arr);
   }
   ```

6. **Kiểm tra biến có phải mảng**
   ```js
   function isArray(value) {
     return Array.isArray(value);
   }
   ```

7. **Tạo mảng mới với bình phương mỗi phần tử**
   ```js
   function squareArray(arr) {
     return arr.map(x => x * x);
   }
   ```

8. **Lọc số nguyên tố**
   ```js
   function isPrime(n) {
     if (n < 2) return false;
     for (let i = 2; i <= Math.sqrt(n); i++) {
       if (n % i === 0) return false;
     }
     return true;
   }

   function filterPrimes(arr) {
     return arr.filter(isPrime);
   }
   ```

9. **Kiểm tra chuỗi là email đơn giản**
   ```js
   function isValidEmail(str) {
     return /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i.test(str);
   }
   ```

10. **Tạo số ngẫu nhiên trong khoảng min đến max**
   ```js
   function randomBetween(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   ```

---

🎉 Chúc bạn học tốt và hiểu sâu về các hàm thông dụng trong JavaScript!
