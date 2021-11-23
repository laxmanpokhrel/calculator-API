module.exports = function splitString(expression, path) {
  expression = "(" + expression + ")";
  console.log("the expression for split is ::", expression);
  if (path == 0) {
    console.log("this is split function !!! with path 0");
    let content = expression.split("");
    console.log("Content:", content);
    return content;
  }

  if (path == 1) {
    console.log("this is split function !!! with path 1");
    let regex = /[()*+-/^]/g;
    let content = [];
    let contentIndex = 0;
    let operators = expression.match(regex);
    console.log("operators::", operators);

    for (let i = 0; i < operators.length; i++) {
      console.log("value of I:", i);
      if (i == 0) {
        let a = expression.indexOf(operators[i]);
        console.log("A::", a);
        if (a == 0) {
          console.log("a=0 wala if bhitra chiro!!!");
          let ch1 = expression.substr(0, 1);
          content[contentIndex] = ch1;
          contentIndex++;
          console.log(ch1);
        } else {
          let ch1 = expression.substr(0, a);
          content[contentIndex] = ch1;
          contentIndex++;
          console.log(ch1);
        }
      } else {
        console.log("Bahira ko else!!");
        let a =  
        let b = expression.indexOf(operators[i]);
        console.log("A:", a);
        console.log("B:", b);
        let length = b - (a + 1);
        let ch1 = expression.substr(a + 1, length);
        content[contentIndex] = ch1;
        contentIndex++;
        let ch2 = expression.substr(b, 1);
        content[contentIndex] = ch2;
        contentIndex++;
        console.log("CH1::", ch1);
        console.log("CH2::", ch2);
      }
    }
    return content;
  }
};
// console.log(splitString("(1+2)", 1));
/*
split function splits on the basis of tow things.
1. each and every letter
    to be exact for example if your infix expression is 12+3
    it will be splited in ['1','2','+','3']
    This is call fine split method

2. on the basis of operators
  here the expression is split on the basis of operators also called block separation method
  in above expmple this method will split on following way 
  ['12','+','3']
*/
