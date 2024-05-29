/**
 * Node:
		- val
		- next
		- prev
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/*
		* DoublyLinkedList:
		- head
		- tail
		- length
*/
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const shiftHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftHead.next;
      this.head.prev = null;
      shiftHead.next = null;
    }
    this.length--;
    return shiftHead;
  }
  unshift(val) {
    const newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}
