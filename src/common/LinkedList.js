/**
 * Converts a list into a string representation.
 *
 * @param head the head of the list
 * @param listType the list type, e.g. "singly-linked"
 * @param token a token to separate values, e.g. "->" for singly-linked lists
 * @returns {string}
 */
function listToString(head, listType, token) {
    if (head === null) {
        return `(null ${listType} list)`
    }
    let output = `${listType} list ( ${head.val}`;
    head = head.next;
    while (head) {
        output += ` ${token} ${head.val}`;
        head = head.next;
    }
    output += ' )';
    return output;
}

class SLLNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

SLLNode.prototype.toString = function() {
    return listToString(this, 'singly-linked', '->');
};

class DLLNode extends SLLNode {
    constructor(value) {
        super(value);
        this.prev = null;
    }
}

DLLNode.prototype.toString = function() {
    return listToString(this, 'doubly-linked', '<->');
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

    static areEqual(l1, l2) {
        while (l1 && l2) {
            if (l1.val !== l2.val) return false;
            l1 = l1.next;
            l2 = l2.next;
        }
        return l1 === l2;
    }
}

expect.extend({
    toEqualList(received, list) {
        let areEqual = true;
        return {
            pass: areEqual,
            message: `Expected ${received} to equal ${list}`
        }
    }
});

module.exports = LinkedList;