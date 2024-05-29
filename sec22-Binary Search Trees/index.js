class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return Error('The value already exists');

        if (value < current.value) {
          // left
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Traversal Tree
  breadthFirstSearch() {
    const data = [],
      queue = [];
    let current = this.root;
    queue.push(this.root);
    while (queue.length) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  // DepthFirstSearch
  preOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.value); // push node in first
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  postOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value); // push node in last
    }
    traverse(this.root);
    return data;
  }
  inOrder() {
    const data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value); // push node in middle
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
