let count = 0;

export const counter = {
  increment() {
    count++;
    return count;
  },
  decrement() {
    count--;
    return count;
  },
  getCount() {
    return count;
  },
  reset() {
    count = 0;
    return count;
  },
};
