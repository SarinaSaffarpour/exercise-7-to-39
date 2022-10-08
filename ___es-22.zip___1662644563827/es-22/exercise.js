let primitive = "Hello World!";

switch (typeof primitive) {
  case "string":
    console.log("String");
    break;
  case "number":
    console.log("Number");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  default:
    console.log("The variable is not a string, a number or a boolean");
}
