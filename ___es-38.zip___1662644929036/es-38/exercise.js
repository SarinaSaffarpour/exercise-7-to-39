function printName() {
  let helloName = "Hello John";
  function inner() {
    console.log(helloName);
  }

  return inner;
}
function sayHelloName(callingFunction) {
  setTimeout(callingFunction, 1000);
}

sayHelloName(printName());
