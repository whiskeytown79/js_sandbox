/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let prefix = "";
    if (strs.length > 0) {
        prefix = strs[0];
        let idx = 1;
        while (idx < strs.length) {
            let common = 0;
            while (common < prefix.length && common < strs[idx].length) {
                if (prefix[common] !== strs[idx][common]) {
                    break;
                }
                common++;
            }
            prefix = prefix.substr(0, common);
            idx++;
        }
    }
    return prefix;
}

module.exports=longestCommonPrefix;
