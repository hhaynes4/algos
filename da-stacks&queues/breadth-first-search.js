// traversing a tree level by level
// Nodes or vertices are enqueued and dequeued to process each level in order.

function bfs(root) {
  const queue = [root];
  while (queue.length > 0) {
    let currentNode = queue.shift(); // dequeue
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    console.log(currentNode); // or callback
  }
}

