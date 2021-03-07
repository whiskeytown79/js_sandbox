const MyHashMap = require('./design-hashmap');

test('leetcode example 1', () => {
    let hashMap = new MyHashMap();
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    expect(hashMap.get(1)).toBe(1);
    expect(hashMap.get(3)).toBe(-1); // not found
    hashMap.put(2, 1);
    expect(hashMap.get(2)).toBe(1); // updated value
    hashMap.remove(2);
    expect(hashMap.get(2)).toBe(-1); // not found
});
