/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
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
