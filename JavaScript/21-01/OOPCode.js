class ListNode {
  val;
  next;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class TestLinkedList {
  listHead;
  

  constructor(listHead = null) {
    this.listHead = listHead;
  }

  hasLast() {
    return this.listHead !== null;
  }

  getLast() {
    if (!this.hasLast()) {
      return null;
    }
    let current = this.listHead;
    while (current.next !== null) {
      current = current.next;
    }
    let valueToReturn = current.val;

    current = this.listHead;
    while (current.next !== null && current.next.next !== null) {
      current = current.next;
    }
    if (current.next === null) {
      this.listHead = null;
    }
    current.next = null;
    return valueToReturn;
  }
}

let myVariable = new TestLinkedList(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  )
);

console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());

let myHead = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

function hasLast(head) {
  return head !== null;
}

function getLast(head) {
  if (!hasLast(head)) {
    return null;
  }
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  let valueToReturn = current.val;

  current = head;
  while (current.next !== null && current.next.next !== null) {
    current = current.next;
  }
  if (current.next === null) {
    head = null;
  }
  current.next = null;
  return valueToReturn;
}

console.log(getLast(myHead));
console.log(getLast(myHead));
console.log(getLast(myHead));
console.log(getLast(myHead));
console.log(getLast(myHead));
console.log(getLast(myHead));
console.log(getLast(myHead));
