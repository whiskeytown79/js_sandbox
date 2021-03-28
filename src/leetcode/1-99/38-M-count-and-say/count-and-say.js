/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    if (n === 1) {
        return "1";
    }
    let seq = countAndSay(n-1);
    let curr = seq[0];
    let cnt = 1;
    let output = "";
    for (let i=1; i<seq.length; i++) {
        if (seq[i] !== curr) {
            output += cnt;
            output += curr;
            curr = seq[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    output += cnt;
    output += curr;
    return output;
}

module.exports=countAndSay;
