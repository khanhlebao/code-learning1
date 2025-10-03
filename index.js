function CounterModule() {
  let count = 0;
  return {
    tang() {
      count++;
      return count;
    },
    giam() {
      count--;
      return count;
    },
    lay() {
      return count;
    }
  };
}

const counter = CounterModule();
counter.tang(); // 1
console.log(counter.count); // undefined ✅