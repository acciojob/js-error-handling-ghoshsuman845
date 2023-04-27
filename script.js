//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

const evaluateExpression = (expression) => {
  // check for invalid characters
  const invalidChars = /[^0-9+\-*/()\s]/g;
  if (invalidChars.test(expression)) {
    throw new OutOfRangeError(invalidChars.exec(expression)[0]);
  }

  // check for invalid expression
  const invalidExpr = /(\d+\s+\d+)|([+\-*/]\s*[+\-*/])/g;
  if (invalidExpr.test(expression)) {
    throw new InvalidExprError();
  }

  // evaluate expression and return result
  return eval(expression);
};

// example usage
try {
  const result = evaluateExpression("2 + 3 * 4 - 5 / 2");
  console.log(result); // 14.5
} catch (error) {
  if (error instanceof OutOfRangeError) {
    console.error(error.message);
  } else if (error instanceof InvalidExprError) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}
