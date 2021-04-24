/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let dict = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!dict.has(key)) {
            dict.set(key, []);
        }
        dict.get(key).push(str);
    }
    let output = [];
    dict.forEach((x) => output.push(x.sort()));
    return output;
}

module.exports=groupAnagrams;
