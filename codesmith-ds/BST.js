function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function (value) {
  // create the tree to add
  const tree = new BinarySearchTree(value);
  // is the value less than the current value?
  if (value < this.value) {
    // does the left branch exist? if not add the tree, if so call add on the left branch
    this.left === null ? (this.left = tree) : this.left.add(value);
  }
  if (value > this.value) {
    this.right === null ? (this.right = tree) : this.right.add(value);
  }
};

const BST = new BinarySearchTree(5);
BST.add(3);
console.log(BST);
BST.add(4);
console.log(BST);

// if the value is less than the current, check the left branch, else check the right branch. if not found return false.
BinarySearchTree.prototype.contains = function (value, current = this) {
  if (current === null) return false;
  if (value === current.value) return true;
  return BinarySearchTree.prototype.contains(
    value,
    value < current.value ? current.left : current.right
  );
};

console.log(BST.contains(3));
console.log(BST.contains(6));

// depth first preorder Root-> left-> right
BinarySearchTree.prototype.depthFirstPre = function (callback) {
  // if the tree doesnt exist return
  if (!this) return;
  // call the callback on the current value
  callback(this.value);
  // if the left exists, call it
  if (this.left) {
    this.left.depthFirstPre(callback);
  }
  // if the right exists, call it
  if (this.right) {
    this.right.depthFirstPre(callback);
  }
};

// depth first inorder left-> root-> right
BinarySearchTree.prototype.depthFirstIn = function (callback) {
  // left (will open execution contexts inside of the others to get to the lowest left)
  if (this.left) {
    this.left.depthFirstIn(callback);
  }
  // root
  callback(this.value);
  // right
  if (this.right) {
    this.right.depthFirstIn(callback);
  }
};

// left -> right -> root
BinarySearchTree.prototype.depthFirstPost = function (callback) {
  if (this.left) {
    this.left.depthFirstPost(callback);
  }
  if (this.right) {
    this.right.depthFirstPost(callback);
  }
  callback(this.value);
};

// applies the callback in the order of breath first (level order)
// use a queue to stack which node we want to visit
// left to right on each level
BinarySearchTree.prototype.breadthFirst = function (callback) {
  // keep track with a queue (FI, FO)
  const queue = [this];

  while (queue.length) {
    // first element of the queue
    const current = queue.shift();

    // push the left child in and then right child in
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    // now we can run the callback on the current node's value
    callback(current.value);
  }
};

// pre order (callback on root, left, right)
// in order (left, callback on root, right)
// post order (left, right, callback on root)

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function () {};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function () {};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function () {};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function (item) {};
