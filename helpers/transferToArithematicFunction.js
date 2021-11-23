module.exports = function transferToArithematicFunction(expression) {
  //regular expression to find number and left parenthesis
  let regexp_left = /(\d+\()/g;
  //regular expression for right parenthesis and number
  let regexp_right = /(\)\d+)/g;
  let splittedResult = expression.split(regexp_left);
  for (let i = 0; i < splittedResult.length; i++) {
    if (splittedResult[i].match(regexp_left)) {
      let number = /\d+/;
      let leftParenthesis = /\(/;
      splittedResult[i] =
        splittedResult[i].match(number) +
        "*" +
        splittedResult[i].match(leftParenthesis);
      expression = splittedResult.join("");
    }
  }

  splittedResult = expression.split(regexp_right);
  for (let i = 0; i < splittedResult.length; i++) {
    if (splittedResult[i].match(regexp_right)) {
      let number = /\d+/;
      let rightParenthesis = /\)/;
      splittedResult[i] =
        splittedResult[i].match(rightParenthesis) +
        "*" +
        splittedResult[i].match(number);
      expression = splittedResult.join("");
    }
  }
  return expression;
};
// transferToArithematicFunction("1+23+(123-3456)56");
