/**
 * Calculate a simple arithmetic expression, where + and - are the supported operations,
 * as well as unary - for negative numbers. Parentheses are supported. The input is expected
 * to be a valid expression (leetcode guarantees this).
 *
 * This approach uses the fact that + and - have the same precedence and are associative. This
 * allows evaluating numbers and operations by flipping a "sign" bit every time we see a
 * - character, and then always performing addition (modified by the sign bit) when we see a number.
 *
 * Parentheses are handled by using a stack to push a new working total and sign bit, then popping
 * them off and adding that running total to the previous stack frame.
 * 
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    // Break input string into tokens, discarding whitespace, and converting
    // runs of digits into a single token.
    let tokens = s.match(/\(|\)|\+|-|[0-9]+/g);

    let stack = [{total: 0, neg: false}];
    for (let token of tokens) {
        if (token === '(') {
            stack.push({total: 0, neg: false});
        } else if (token === ')') {
            let last = stack.pop();
            stack[stack.length-1]['total'] += stack[stack.length-1]['neg']? -last['total'] : +last['total'];
            stack[stack.length-1]['neg'] = false;
        } else if (token === '+') {
            // do nothing
        } else if (token === '-') {
            stack[stack.length-1]['neg'] = !stack[stack.length-1]['neg'];
        } else {
            stack[stack.length-1]['total'] += stack[stack.length-1]['neg']? -token : +token;
            stack[stack.length-1]['neg'] = false;
        }
    }
    return stack[stack.length-1]['total'];
}

module.exports=calculate;
