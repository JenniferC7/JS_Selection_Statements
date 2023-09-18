console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let magicNumber = 13;

let guessNumber = prompt("What is the magic number?");

if (guessNumber == magicNumber) {
  console.log("Congratulations!!!");
} else if (guessNumber > magicNumber) {
  console.log("too high");
} else if (guessNumber < magicNumber) {
  console.log("too low");
}



let birthmonth = prompt("What season is your birth month in?")
switch (birthmonth.toLowerCase()) {
  case "december":
  case "january":
  case "febuary":
    console.log("Winter");
    break;
    case "march":
      case "april":
        case "may":
      console.log("Spring");
      break;
      case "june":
        case "july":
          case "august":
        console.log("Summer");
        break;
        case "september":
          case "october":
            case "november":
          console.log("Fall")
          break;
          default:
            console.log("I don't know that month");
}



let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
  case "01":
    type = "Tank top";
    break;
    case "02":
      type = "T-Shirt";
      break;
      case "03":
        type="Long Sleeve";
        break;
        case "04":
          type="Sweat Shirt";
          default:
            type="Other";
}

switch (colorId) {
  case "BL":
    color="Black";
    break;
    case "BL":
      color="Blue";
      break;
      case "RD":
        color="Red";
        break;
        case "PU":
          color= "Purple";
          break;
          default: 
          color="White";
}

switch(sizeId){
  case "S":
    size ="Small"
    break;
    case "M":
      size ="Medium";
      break;
      case "L":
        size ="Large";
        break;
        case "XL":
          size ="Extra Large";
          default: 
          size ="One Size Fits All";
    
}
console.log(`Product: ${size} ${color} ${type}`);