// DFS
// inorder (left, node, right)
// preorder (root, left, right)
// postorder(left, right, root)

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));

//inorder (left, node, right)

function inOrderTraversal(root) {
  const results = [];

  function dfs(node) {
    // base case: if the node doesnt exist!
    if (node == null) {
      return;
    }
    if (node.left !== null) {
      dfs(node.left);
    }
    results.push(node.value);
    if (node.right !== null) {
      dfs(node.right);
    }
  }
  dfs(root);

  return results;
}

console.log(inOrderTraversal(tree)); //[1,2,3]

function preOrderTraversal(root) {
  const results = [];

  function dfs(node) {
    // base case: if the node doesnt exist!
    if (node == null) {
      return;
    }
    results.push(node.value);
    if (node.left !== null) {
      dfs(node.left);
    }
    if (node.right !== null) {
      dfs(node.right);
    }
  }
  dfs(root);

  return results;
}

console.log(preOrderTraversal(tree)); //[2,1,3]

function postOrderTraversal(root) {
  const results = [];

  function dfs(node) {
    // base case: if the node doesnt exist!
    if (node === null) {
      return;
    }
    if (node.left !== null) {
      dfs(node.left);
    }
    if (node.right !== null) {
      dfs(node.right);
    }
    results.push(node.value);
  }
  dfs(root);

  return results;
}

console.log(postOrderTraversal(tree)); //[1,3,2]

// BFS (by layers!)
// use a queue

// while the queue is not empty, dequeue shift() and look at right or left

function breadthFirstSearch(root) {
  // if there is no root, return!
  if (!root) {
    return [];
  }

  const queue = [root];
  const results = [];

  while (queue.length > 0) {
    //
    const currentNode = queue.shift();

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    results.push(currentNode.value);
  }
  return results;
}

console.log(breadthFirstSearch(tree));

var Tree = function() {
  this.root = null;
}

Tree.prototype.insert = function(node, data) {
  if (node == null){
    node = new Node(data);
  }
 else if (data < node.data){
      node.left  = this.insert(node.left, data);
  }
  else{
      node.right = this.insert(node.right, data);   
  }

  return node;
}

var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

