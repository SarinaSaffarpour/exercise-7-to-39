let roomType;
switch (roomType) {
  case "Basic Room":
    console.log("the price of your chosen room is: 50€");
    break;
  case "Junior Suite Room":
    console.log("the price of your chosen room is: 80€");
    break;
  case "Master Suite":
    console.log("the price of your chosen room is: 100€");
    break;
  default:
    console.log(
      "You either have not chosen your room type or your room type is not valid!!!"
    );
}
