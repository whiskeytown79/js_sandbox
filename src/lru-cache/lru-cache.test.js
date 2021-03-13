const LRUCache = require('./lru-cache');

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

test('leetcode example 1', () => {
    let cache = new LRUCache(2);
    cache.put(1, 1); // cache is {1=1}
    cache.put(2, 2); // cache is {1=1, 2=2}
    expect(cache.get(1)).toBe(1);

    cache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(cache.get(2)).toBe(-1);

    cache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
});

test('capacity 1 always evicts', () => {
    let cache = new LRUCache(1);
    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);

    cache.put(2, 2);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);

    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
});

test('leetcode test case 1', () => {
    let cache = new LRUCache(2);
    expect(cache.get(2)).toBe(-1);

    cache.put(2,6);
    expect(cache.get(1)).toBe(-1);

    cache.put(1,5);
    cache.put(1,2);
    expect(cache.get(1)).toBe(2);
    expect(cache.get(2)).toBe(6);
});

test('leetcode test case 2', () => {
    let cache = new LRUCache(3);
    cache.put(1,1);
    cache.put(2,2);
    cache.put(3,3);
    cache.put(4,4);

    expect(cache.get(4)).toBe(4);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(2)).toBe(2);
    expect(cache.get(1)).toBe(-1);

    cache.put(5,5);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(-1);
    expect(cache.get(5)).toBe(5);
});