/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const letters = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"]
    };
    if (digits.length === 0) {
        return [];
    }
    if (digits.length === 1) {
        return letters[digits[0]];
    }
    let combos = letterCombinations(digits.substr(1));
    let output = [];
    for (let letter of letters[digits[0]]) {
        for (let combo of combos) {
            output.push(letter + combo);
        }
    }
    return output;
}

module.exports=letterCombinations;