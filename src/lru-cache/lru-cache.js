/**
 *
 * @param {number} key
 * @param {number} val
 * @constructor
 */
function Node(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}


/**
 * @param {number} capacity
 * @constructor
 */
function LRUCache(capacity) {
    this.lookup = {};
    this.capacity = capacity;
    this.count = 0;
    this.head = null;
    this.tail = null;
}

/**
 * @param {number} key
 * @return {Node}
 */
LRUCache.prototype.getNode = function(key) {
    let node = this.lookup[key];
    if (node && node !== this.head) {
        // Move the node to the front of the list.
        let prev = node.prev;
        let next = node.next;
        if (node === this.tail) {
            this.tail = prev;
        }
        prev.next = next;
        if (next) {
            next.prev = prev;
        }
        node.prev = null;
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    return node;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.getNode(key);
    if (!node) {
        return -1;
    }
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.getNode(key);
    if (node) {
        // If we have a node, just change its value. getNode() will have already moved it
        // to the front of the list on access.
        node.val = value;
    } else {
        // Evict the end of the list if needed
        if (this.count === this.capacity) {
            let key = this.tail.key;
            delete this.lookup[key];
            let prev = this.tail.prev;
            if (prev) {
                prev.next = null;
            }
            this.tail = prev;
            this.count -= 1;
        }

        // Add a new node in the beginning of the list
        node = new Node(key, value);
        node.next = this.head;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.lookup[key] = node;
        this.count += 1;
    }
};

module.exports=LRUCache;