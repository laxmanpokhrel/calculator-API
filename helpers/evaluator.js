module.exports = function evaluate(expression) {
  console.log("================ this is evaluation function ===============");

  let stack = [];
  let stackIndex = 0;
  let value;
  let operand1;
  let operand2;
  let regularExp = /[&^*+-/]/;
  for (let i = 0; i < expression.length; i++) {
    console.log("______________________");
    console.log("CHARACTER SCANNED::", expression[i]);
    if (regularExp.test(expression[i])) {
      console.log("IF PART!!!!");
      console.log("STACK::", stack);

      operand2 = stack.pop();
      stackIndex--;
      /* TO HANDLE EXCEPTIONS (ie: if operator still exists and if there are no operands then the postfix expression 
            is not true, so must return 'error')
      */
      if (!operand2) {
        return "syntax error!!";
      }
      console.log("stack INDEX::", stackIndex);
      operand1 = stack.pop();
      stackIndex--;
      /* TO HANDLE EXCEPTIONS (ie: if operator still exists and if there are no operands then the postfix expression 
            is not true, so must return 'error')
      */
      if (!operand1) {
        return "syntax error!!";
      }
      console.log("stack INDEX::", stackIndex);
      let input = "(" + operand1 + ")" + expression[i] + "(" + operand2 + ")";
      console.log("The input is :" + input);
      value = eval(input);
      console.log("VALUE IS :::", value);
      stack[stackIndex] = value;
      stackIndex++;
      console.log("STACK::", stack);
    } else {
      console.log("ELSE PART!!");
      console.log("stack INDEX::", stackIndex);
      stack[stackIndex] = expression[i];
      console.log("STACK::", stack);

      stackIndex++;
    }
  }
  return stack.pop();
};

function transformToArithmaticExpression() {
  newContent = content.replace("log", Math.log10(8));
  console.log(newContent);
}
