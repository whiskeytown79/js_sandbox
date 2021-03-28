/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    const ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b | 0,
    }
    const stack = [];
    for (let token of tokens) {
        if (ops[token]) {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(ops[token](a, b));
        } else {
            stack.push(+token);
        }
    }
    return stack.pop();
}

module.exports=evalRPN;
