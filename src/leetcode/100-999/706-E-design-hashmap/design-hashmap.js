const SIZE = 251; // 251 is a prime number

/**
 * Initialize your data structure here.
 */
function MyHashMap() {
    this.table = new Array(SIZE);
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let index = key % SIZE;
    if (this.table[index] === undefined) {
        this.table[index] = [];
    }
    for (let kv of this.table[index]) {
        if (kv[0] === key) {
            kv[1] = value;
            return;
        }
    }
    this.table[index].push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let index = key % SIZE;
    if (this.table[index]) {
        for (let kv of this.table[index]) {
            if (kv[0] === key) {
                return kv[1];
            }
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let index = key % SIZE;
    if (this.table[index]) {
        for (let i=0; i<this.table[index].length; i++) {
            let kv = this.table[index][i];
            if (kv[0] === key) {
                this.table[index].splice(i, 1);
                return;
            }
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

module.exports=MyHashMap;
