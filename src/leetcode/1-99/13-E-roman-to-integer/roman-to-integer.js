/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const roman  = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const arabic = [ 1000, 900, 500,  400, 100,   90,  50,   40,  10,    9,   5,    4,   1];
    let sIdx = 0;
    let result = 0;
    for (let i=0; i<roman.length; i++) {
        while (s.substring(sIdx, sIdx + roman[i].length) === roman[i]) {
            result += arabic[i];
            sIdx += roman[i].length;
        }
    }
    return result;
}

module.exports=romanToInt;
