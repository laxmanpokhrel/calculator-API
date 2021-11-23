module.exports = function splitter(exp) {
  console.log("This is split function!!!");
  exp = "(" + exp + ")";
  let regex = /[()*+-/^]/g;
  let operators = exp.match(regex);
  console.log("operators are: " + operators);
  console.log("operators length: " + operators.length);
  let splittedItems = [];
  for (let i = 0; i < operators.length; i++) {
    console.log("Iteration: " + i);
    //at i=0 there must be an operator
    if (i == 0) {
      let A = exp.indexOf(operators[i]);
      let ch1 = exp.substr(0, 1);
      splittedItems.push(ch1);
      exp = exp.substr(A + 1, exp.length - 1);
    } else {
      let A = exp.indexOf(operators[i]);
      //if the expression still has an operator in the first place
      if (A == 0) {
        let ch1 = exp.substr(0, 1);
        splittedItems.push(ch1);
        exp = exp.substr(A + 1, exp.length - 1);
      } else {
        let ch1 = exp.substr(0, A);
        splittedItems.push(ch1);
        let ch2 = exp.substr(A, 1);
        splittedItems.push(ch2);
        exp = exp.substr(A + 1, exp.length - (A + 1));
      }
    }
  }
  return splittedItems;
};
//test purpose
console.log(splitter("+2+(32*6+5)"));
