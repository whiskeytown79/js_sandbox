class SLLNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class DLLNode extends SLLNode {
    constructor(value) {
        super(value);
        this.prev = null;
    }
}

class LinkedList {
    /**
     * Makes a new singly-linked instance using the passed-in aray of values.
     * @param {[]} values
     */
    static makeSinglyLinkedList(values) {
        if (!values || values.length === 0) {
            return null;
        }
        let head = new SLLNode(values[0]);
        let node = head;
        for (let i=1; i<values.length; i++) {
            let newNode = new SLLNode(values[i]);
            node.next = newNode;
            node = newNode;
        }
        return head;
    }

    /**
     * Makes a new doubly-linked list instance using the passed-in aray of values.
     * @param {[]} values
     */
    static makeDoublyLinkedList(values) {
        if (!values || values.length === 0) {
            return null;
        }
        let head = new DLLNode(values[0]);
        let node = head;
        for (let i=1; i<values.length; i++) {
            let newNode = new DLLNode(values[i]);
            newNode.prev = node;
            node.next = newNode;
            node = newNode;
        }
        return head;
    }
}

module.exports = LinkedList;