function transferToArithematicFunction(expression) {
  //pattern for detecting 'x'
  let regex = /x/;
  // let expression = "5+2x3";
  let result = expression.replace(regex, "*");
  console.log("the result is :", result);
  // let ans = eval(result);
  // console.log("the ans is ", ans);
  return result;
}
transferToArithematicFunction("1+23+(123-3456)56");
