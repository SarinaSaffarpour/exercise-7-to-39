function printName() {
  let name1 = "Sarina";
  console.log(name1);
}
function sayHelloName(callingFunction) {
  console.log("Hello ");
  callingFunction();
}
sayHelloName(printName);
