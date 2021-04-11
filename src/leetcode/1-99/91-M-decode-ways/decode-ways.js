let cache = {};
/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    if (!cache[s]) {
        let result = 0;
        if (s.length > 0 && s[0] !== '0') {
            if (s.length >= 2) {
                if (s[0] === '1' || (s[0] === '2' && +s[1] <= 6)) {
                    // 2 digit token is possible
                    if (s.length === 2) {
                        result = s[1] === '0'? 1 : 2;
                    } else {
                        result = numDecodings(s.substr(1)) + numDecodings(s.substr(2));
                    }
                } else {
                    // only 1-digit tokens possible
                    result = numDecodings(s.substr(1));
                }
            } else {
                result = 1;
            }
        }
        cache[s] = result;
    }
    return cache[s];
}

module.exports=numDecodings;
