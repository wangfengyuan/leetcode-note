class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.size > 0 ? this.stack[this.size - 1] : undefined;
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}