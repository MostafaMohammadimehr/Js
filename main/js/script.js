var Today = new Date().getday();
var day;

switch (day) {
  case 0:
    day = "a";
    break;
  case 1:
    day = "b";
    break;
  case 2:
    day = "c";
    break;
  case 3:
    day = "d";
    break;
  case 4:
    day = "e";
    break;
  case 5:
    day = "f";
    break;
  case 6:
    day = "g";
    break;
  default:
    day = "ad";
}

document.write(day);
console.log(day);
