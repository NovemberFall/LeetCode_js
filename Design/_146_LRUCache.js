class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }

    get(key) {
        const node = this.map.get(key);
        if (node == null) {
            return -1;
        }
        //Even though we just read from linkedList, but we still need to move node to the head
        this.remove(node);
        this.appendToHead(node);
        return node.val;
    }

    put(key, val) {
        //1. if the key already in the cache, we need to update its value
        //and move it to head (most recently used position)
        if (this.map.has(key)) {
            let node = this.map.get(key);
            node.val = val;
            this.remove(node);
            this.appendToHead(node);
        } else {
            let node = new Node(key, val);
            if (this.map.size < this.capacity) {
                //2. if the key is not in the cache, assume we have enough space
                // we just need to add new node into the head
                this.appendToHead(node);
            } else { // map.size >= capacity
                //3. if the key is not in the cache, even we don't have enough space
                // we need to evict the tail,  move the new node<Node.key, value> into the head
                this.remove(this.tail);
                this.appendToHead(node);
            }
        }
    }

    appendToHead(node) {
        this.map.set(node.key, node);
        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
    }

    remove(node) {
        this.map.delete(node.key);
        if (node === this.tail) {
            this.tail = this.tail.previous;
        }
        if (node.previous) {
            node.previous.next = node.next;
        }
        if (node.next) {
            node.next.previous = node.previous;
        }
        if (node === this.head) {
            this.head = this.head.next;
        }
        node.previous = null;
        node.next = null;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */