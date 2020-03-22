function eval() {
// Do not use eval!!!
return;
}

function expressionCalculator(expr) {

  let left=0, right=0;
  for (let i = 0; i <= expr.length; i++) {
  if (expr[i] == '(') {
  left++;
  }
  if (expr[i] === ')') {
  right++;
  }}
  if (left!=right) {
  throw new Error('ExpressionError: Brackets must be paired');
  }

  if (expr.replace(/\s/g, '').match(/\/0/g))
  throw new Error('TypeError: Division by zero.');

const noWsStr = expr.replace(/\s/g, '');
const operators = noWsStr.replace(/[\d.,]/g, '').split('');
const operands = noWsStr.replace(/[+/%*-]/g, ' ')
.replace(/\,/g, '.')
.split(' ')
.map(parseFloat)
.filter(it => it);


while (operators.includes('/')) {
let opIndex = operators.indexOf('/');
operands.splice(opIndex, 2, operands[opIndex] / operands[opIndex + 1]);
operators.splice(opIndex, 1);
};

while (operators.includes('*')) {
let opIndex = operators.indexOf('*');
operands.splice(opIndex, 2, operands[opIndex] * operands[opIndex + 1]);
operators.splice(opIndex, 1);
};


let result = operands[0];
for (let i = 0; i < operators.length; i++) {
operators[i] === '+' ? (result += operands[i + 1]) : (result -= operands[i + 1])
}
return result
}

module.exports = {
expressionCalculator
}
