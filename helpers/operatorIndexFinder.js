// module.exports
const splitter = function (expression) {
  let exp1 = expression;
  let operatorIndex = [];
  let regex = /[()*+-/^]/g;
  let operators = expression.match(regex);
  console.log(operators);
  for (let i = 0; i < operators.length; i++) {
    let a = exp1.indexOf(operators[i]);
    i == 0
      ? operatorIndex.push(a)
      : operatorIndex.push(a + 1 + operatorIndex[i - 1]);
    exp1 = exp1.substr(a + 1, exp1.length - a);
    console.log(exp1);
    console.log("a: " + a);
    console.log(operatorIndex);
  }
};
splitter("1+23+(123-3456)*56");
