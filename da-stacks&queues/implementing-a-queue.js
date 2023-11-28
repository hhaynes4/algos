// goal:Implement a queue with its fundamental operations: enqueue, dequeue, and front.
// FIFO

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element)
        return
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        this.items.shift()
        return
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.front())
queue.dequeue()
console.log(queue)
console.log(queue.front())