/**
 * Calculate a simple arithmetic expression, where + and - are the supported operations,
 * as well as unary - for negative numbers. Parentheses are supported. The input is expected
 * to be a valid expression (leetcode guarantees this).
 *
 * This approach uses the fact that subtraction is the same as adding a negative:
 *
 *    a - b = a + (-b)
 *
 * If we can convert this entirely to addition, we can rely on the fact that addition is associative
 * to more easily handle parentheses. We thus convert all subtractions (including unary - for
 * negative numbers) into addition, by means of a sign bit that we will invert every time we come
 * across a - token in the expression. For example:
 *
 *   4 + 9 - 3 + -1 - -8   =>   4 + 9 + (-3) + (-1) + (-(-8))
 *
 * Which equals 17. In this example, parentheses are simply used to show how the sign bit is used to
 * invert the value being added (sometimes more than once).
 *
 * Parentheses in the actual input expression are handled by using a stack to push a new working
 * total and sign bit, then popping them off when the parenthesis is closed and adding that running
 * total to the previous stack frame.
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
