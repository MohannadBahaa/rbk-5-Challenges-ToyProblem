function sortedInsert(stack, element) {
  var nS = new Stack();
  if (stack.isEmpty()) {
    stack.push(element);
  } else if (!stack.isEmpty()) {
    while (element > stack.peek()) {
      nS.push(stack.pop());
    }
    stack.push(element);
  }

  while (!nS.isEmpty()) {
    stack.push(nS.pop());
  }
  return stack;
}
