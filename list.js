function Node() {
  let data = null;
  let next = null;
  return { data, next };
}

function LinkedList() {
  let size = 0;
  let head = null;
  let tail = null;
  function getSize() {
    return size;
  }
  function getHead() {
    return head;
  }

  function appendValue(value) {
    node = Node();
    node.data = value;
    if (head == null) {
      head = node;
    } else {
      let tmp = head;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = node;
    }
    size++;
    tail = node;
  }
  function prependValue(value) {
    let temp = Node();
    temp.data = value;
    if (head) {
      temp.next = head;
      head = temp;
    } else {
      head = temp;
    }
    size++;
  }
  function getTail() {
    return tail;
  }
  function at(index) {
    if (index > size - 1) {
      return null;
    }
    let tmp = head;
    for (let i = 0; i < size - 1; i++) {
      if (i == index) return tmp;
      tmp = tmp.next;
    }
  }
  function pop() {
    let tmp = head;
    let prev = head;
    while (tmp.next != null) {
      prev = tmp;
      tmp = tmp.next;
    }
    prev.next = null;
    tail = prev;
    size--;
  }
  function contains(value) {
    let tmp = head;
    while (tmp != null) {
      if (tmp.data == value) return true;
      tmp = tmp.next;
    }
    return false;
  }
  function find(value) {
    let tmp = head;
    let i = 0;
    while (tmp != null) {
      if (tmp.data == value) return i;
      tmp = tmp.next;
      i++;
    }
    return null;
  }
  function toString() {
    let output = "";
    let tmp = head;
    while (tmp) {
      output += `( ${tmp.data} ) -> `;
      tmp = tmp.next;
    }
    output += "null";
    console.log(output);
  }
  function insertAt(value, index) {
    if (index >= size || index < 0) {
      console.log("Index out of bounds", index);
      return;
    }

    let node = new Node();
    node.data = value;
    let temp = head;

    if (index === 0) {
      prependValue(value);
      return;
    }

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    node.next = temp.next;
    temp.next = node;

    size++;
  }
  function removeAt(index) {
    if (index >= size || index < 0) {
      console.log("Index out of bounds", index);
      return;
    }

    let tmp = head;
    let prev = null;

    if (index === 0) {
      head = tmp.next;
    } else {
      for (let i = 0; i < index; i++) {
        prev = tmp;
        tmp = tmp.next;
      }
      prev.next = tmp.next;
    }

    size--;
  }

  return {
    getSize,
    getHead,
    appendValue,
    prependValue,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

let a = LinkedList();
console.log(a);
console.log("getSize(), getHead()");
console.log(a.getSize(), a.getHead());
console.log("getTail()");
console.log(a.getTail());
console.log("appendValue");
a.appendValue(1);
console.log("getSize() getHead()");
console.log(a.getSize());
console.log(a.getHead());
console.log("a");
console.log(a);
a.prependValue(2);
console.log("prependvalue \ngetSize getTail");
console.log(a.getSize());
console.log(a.getTail());
console.log("at(1) at(2)");
console.log(a.at(1), a.at(2));
console.log("pop");
a.pop();
console.log("getSize");
console.log(a.getSize());
console.log("contains(1) contains(2)");
console.log(a.contains(1), a.contains(2));
console.log("find(1) find(2)");
console.log(a.find(1), a.find(2));
console.log("to string");
a.appendValue(3);
a.prependValue(0);
a.toString();

console.log(a.find(3), a.find(0), a.find(4));
a.insertAt(10, 2);
a.toString();
a.removeAt(0);
a.toString();
