function printName() {
  let name1 = "Sarina";
  console.log("Hello " + name1);
}
function sayHelloName(callingFunction) {
  setTimeout(callingFunction, 1000);
}
sayHelloName(printName);
