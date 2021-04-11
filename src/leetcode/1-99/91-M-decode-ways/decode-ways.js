let cache = {};
/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    if (cache[s] === undefined) {
        let result = 0;
        if (s.length === 0) {
            result = 1;
        } else if (s[0] === '0') {
            result = 0;
        } else {
            if (s.length >= 2) {
                let two = Number(s.slice(0, 2));
                if (two >= 10 && two <= 26) {
                    result += numDecodings(s.substr(2));
                }
            }
            result += numDecodings(s.substr(1));
        }
        cache[s] = result;
    }
    return cache[s];
}

module.exports=numDecodings;
