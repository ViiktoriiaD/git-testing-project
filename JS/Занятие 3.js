var mature = true,
  married = false,
  withFingers = true,
  alive = true;

var isReadyToWork = alive && withFingers && (married || !married) && mature;

console.log(isReadyToWork);


function ressurection() {
    console.log("Walk!");
  } 
  alive && ressurection();


  if (alive) {
} else {
  ressurection();
}

if (!alive) {
    ressurection();
  }

  if (!alive) {
    ressurection();
  } else if (mature) {
    console.log("Yo!");
  } else {
    console.log("Go away!");

    var READY = "y";
    var NOT_READY = "n";
    var READY_FULL = "yes";
    var NOT_READY_FULL = "no";
    
    var areYouReady = prompt("Are you ready?");
    
    if (areYouReady === READY) {
      console.log("You are ready!");
    } else if (areYouReady === NOT_READY) {
      console.log("You aren't ready");
    }

    var READY = "y";
var NOT_READY = "n";
var READY_FULL = "yes";
var NOT_READY_FULL = "no";

var areYouReady = prompt("Are you ready?");

switch (areYouReady) {
  case READY: // areYouReady === READY
    console.log("R");
    break;
  case NOT_READY:
    console.log("N");
    break;
}

switch (areYouReady) {
    case READY: // areYouReady === READY
    case READY_FULL:
      console.log("R");
      break;
    case NOT_READY:
    case NOT_READY_FULL:
      console.log("N");
      break;
    default:
      console.log("Go away!");
  }
  
  if (areYouReady === READY || areYouReady === READY_FULL) {
    console.log("R");
  } else if (areYouReady === NOT_READY || areYouReady === NOT_READY_FULL) {
    console.log("N");
  } else {
    console.log("Go away!");
  }

  var answer = prompt("True/False");

console.log(Boolean(answer));

var answer = prompt("True/False");
var booleanResult;

if (answer === "false") {
  booleanResult = false;
} else {
  booleanResult = Boolean(answer);
}

var answer = prompt("True/False");
var booleanResult;
if (answer === "false") {
  booleanResult = false;
} else {
  booleanResult = Boolean(answer);
}
booleanResult = answer === "false" ? false : Boolean(answer);

booleanResult =
  answer === "false" ? false : answer === null ? "error" : Boolean(answer);

  if (answer === "false") {
    booleanResult = false;
  } else {
    booleanResult = answer === null ? "error" : Boolean(answer);
  }

  var answer = prompt("True/False");
var booleanResult;

if (answer === "false") {
  booleanResult = false;
} else {
  if (answer === null) {
    booleanResult = "error";
  } else {
    booleanResult = Boolean(answer);
  }
}
if (answer === "false") {
  booleanResult = false;
} else if (answer === null) {
  booleanResult = "error";
} else {
  booleanResult = Boolean(answer);
}

switch (answer) {
  case "false":
    booleanResult = false;
    break;
  case null:
    booleanResult = "error";
    break;
  default:
    booleanResult = Boolean(answer);
}





