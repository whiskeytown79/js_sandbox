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
        if (head === head.next) {
            output += ' [Circular]';
            break;
        }
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
     * @param {function(any):any} nodeFactory
     */
    static makeSinglyLinkedList(values, nodeFactory = (v) => new SLLNode(v)) {
        if (!values || values.length === 0) {
            return null;
        }
        let head = nodeFactory(values[0]);
        let node = head;
        for (let i=1; i<values.length; i++) {
            let newNode = nodeFactory(values[i]);
            node.next = newNode;
            node = newNode;
        }
        return head;
    }

    /**
     * Makes a new doubly-linked list instance using the passed-in aray of values.
     * @param {[]} values
     * @param {function(any):any} nodeFactory
     */
    static makeDoublyLinkedList(values, nodeFactory = (v) => new DLLNode(v)) {
        if (!values || values.length === 0) {
            return null;
        }
        let head = nodeFactory(values[0]);
        let node = head;
        for (let i=1; i<values.length; i++) {
            let newNode = nodeFactory(values[i]);
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
        // Just use Jest's equal matching on the string representation. This
        // yields a more useful diff output when they don't match.
        if (this.isNot) {
            expect(received.toString()).not.toEqual(list.toString());
        } else {
            expect(received.toString()).toEqual(list.toString());
        }
        return { pass: !this.isNot };
    }
});

module.exports = LinkedList;
