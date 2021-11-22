//------ Function to convert infix to postfix expression -------------------
module.exports=function infixToPostfixConversion(expression) {
    console.log("Now we convert Infix Notation To postfix Notation");
    console.log("expression is:",expression);
    //**** We declare precedence of the operators as below. This methode of arranging information is called JSON format ****
    let precedence = {
      "-": "1",
      "+": "2",
      "*": "3",
      "/": "4",
      "&": "5",
      "^": "5",
    };
  
    //   stack to push the operators......
    let stack = [];
    let stackIndex = 0;
    // variable to keep the output ie: postfix expression.
    let Q = [];
  
    let qIndex = 0;
    // we use regular expression to match operators and symbols involved in the expression, because they have to be push in to the stack....
    let regex = /[&^*+-/]/;
    //we split the infix expression to an array to access each element of the expression
  
  
    let content = expression;
    // console.log("Decleration Sakio!!!");
    //we create a loop to go after each element in the expression continuously.......
    /*
    on scanning the elements we have 3 conditions depending on which element it is
          1-> if the element is left parenthesis '(' (best if given separate condition)
          2-> if the element belongs to the character set [+-/*&^];
                  ** if the last element of the stack is '(' just add the element to the stack and increase the stackIndex;
                  ** if the last precedence of the last element of the stack is greater then the precedence of the element
                      then the last element of the stack must be popped and add to 'Q' and element should be added to the last position 
                      of the stack
                  ** else just add the element to the stack;
          3-> if the element is right parenthesis ')' ;
                  ** all the elements must be popped from the stack and add to the postfix expression "Q" until we encounter 
                  left parenthesis'(';
    
    */
  
    for (let i = 0; i < content.length; i++) {
      console.log("***********************************");
      console.log(".......CHARACTER SCANNED ::", content[i]);
      if (content[i] == "(") {
        console.log(regex.test(content[i]));
        console.log("LEFT PARENTHESIS BHETAYO!!!");
        stack[stackIndex] = content[i];
        stackIndex++;
  
        console.log("Q:", Q);
        console.log("stack", stack);
      } else if (regex.test(content[i])) {
        console.log(regex.test(content[i]));
        console.log("SYMBOL BHETIO!!!");
        if (stack[stackIndex - 1] == "(") {
          stack[stackIndex] = content[i];
          stackIndex++;
        } else {
          let x = precedence[`${content[i]}`];
          console.log("value of x is: ", x);
          let y = precedence[`${stack[stackIndex - 1]}`];
          console.log("value of y is: ", y);
  
          if (x < y) {
            console.log("X Y ko IF bhitra chiro !!!!");
            let x = stack.pop();
            Q[qIndex] = x;
            qIndex++;
            stack[stackIndex - 1] = content[i];
            delete x;
          } else {
            console.log("X Y ko ELSE bhitra chiro !!!!");
  
            stack[stackIndex] = content[i];
            stackIndex++;
          }
        }
        console.log("Q:", Q);
        console.log("stack", stack);
      } else if (content[i] == ")") {
        console.log("RIGHT PARENTHESIS BHATIYO..");
        let k = stackIndex - 1;
        while (stack[k] != "(") {
          console.log("right parenthesis ko while bhitra chiro!!!");
          let x = stack.pop();
          console.log("pop bhayo!!!");
  
          Q[qIndex] = x;
          qIndex++;
          delete x;
          k--;
          stackIndex--;
          console.log("Q:", Q);
          console.log("stack", stack);
        }
        console.log("while bahira nisko!!!");
  
        let x = stack.pop();
        delete x;
        stackIndex--;
        console.log("Q:", Q);
        console.log("stack", stack);
      } else {
        console.log("ALPHABETS BHETAYO!!!");
        Q[qIndex] = content[i];
        qIndex++;
        console.log("Q:", Q);
        console.log("stack", stack);
      }
    }
    return Q;
  }
  
  /* This completes the conversion part. Beside this rule based step forward process we also have to check for exceptions
                  ->  for example: infix="A+B-";
                      'Some times we get this type of input error from user and we have to return 'syntax error!!!' so we need to account the worst
                        cases also'
                        here "-" sign at the end becomes exception. THIS IS PROBABLY ONE WAY TO OVERCOME EXCEPTIONS.
          BUT, here we have used regular expressions(way of giving patterns to string and basically used for getting valid input) to 
          find out the errors in input expression.
                        --> we have generated regular expressions for three most probable errors, ie:
                                                        1->operator at begining of expression
                                                        2->multiple operators one after another in between the expression
                                                        3->operator at the end of expression
  
  >   To handle this type of exceptions we provide this input to the regular conversion function and see where is the flaw.
  */
  
  
  //calling the function for test purpose.
  
  // console.log(infixToPostfixConversion('1+2'));