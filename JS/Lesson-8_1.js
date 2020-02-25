ar obj2 = {};

function mutate(obj) {
  obj.a = 52;
}

mutate(obj2);

console.log(obj2);


var obj2 = {};

function mutate(obj) {
  obj.a = 52;
}

mutate(obj2);

var myObject = obj2;

myObject.b = 30;

console.log(obj2);

  