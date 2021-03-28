const evalRPN = require('./evaluate-reverse-polish-notation');

test('leetcode example 1', () => {
    let tokens = ["2","1","+","3","*"];
    expect(evalRPN(tokens)).toEqual(9);
});

test('leetcode example 2', () => {
    let tokens = ["4","13","5","/","+"];
    expect(evalRPN(tokens)).toEqual(6);
});

test('leetcode example 3', () => {
    let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
    expect(evalRPN(tokens)).toEqual(22);
});
