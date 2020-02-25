var a = 6;

for(var i = 0; i < 10000; i)
console.log('p');
}
console.log(a);



var a = 2;

setTimeout(function() {
  for (var i = 0; i < 10; i++) {
    console.log("abc");
  }
})

console.log(a);


var a = 2;

setTimeout(function() {
  for (var i = 0; i < 10; i++) {
    console.log("abc");
  }
}, 4);

console.log(a);


var a = 2;

setTimeout(function() {
  for (var i = 0; i < 10; i++) {
    console.log("abc");
  }
  console.log(a);
}, 4);

console.log(a);


// var a = 2;

// function test() {}

// test.a = 2;

// setTimeout(function() {
//   for (var i = 0; i < 10; i++) {
//     console.log("abc");
//   }
//   console.log(a);
// }, 4);

// console.log(a, test.a);

function testCallback() {
    console.log('TEST!!!');
  }
  
  function generateAndRespond() {
    
  }
  
  testCallback();



  function testCallback() {
    console.log("TEST!!!");
  }
  
  function generateAndRespond() {
    setTimeout(function() {
      var users = [1, 2, 3, 4];
      console.log(users);
    }, 1000);
  }
  
  
  generateAndRespond();

  
  function testCallback() {
    console.log("TEST!!!");
  }
  
  function generateAndRespond() {
    setTimeout(function() {
      var users = [1, 2, 3, 4];
      return users;
    }, 1000);
  }
  
  var users = generateAndRespond();
  
  console.log(users);



  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function testCallback() {
    console.log("TEST!!!");
  }
  
  function generateAndRespond() {
    setTimeout(function() {
      var users = [1, 2, 3, 4];
      return users;
    }, random(500, 1000));
  }
  
  var users = generateAndRespond();
  
  console.log(users);


  // var a = 2;

// function test() {}

// test.a = 2;

// setTimeout(function() {
//   for (var i = 0; i < 10; i++) {
//     console.log("abc");
//   }
//   console.log(a);
// }, 4);

// console.log(a, test.a);

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function generateAndRespond(cb) {
    setTimeout(function() {
      console.log("Getting users...");
      var users = [1, 2, 3, 4];
      cb(users);
    }, random(500, 1000));
  }
  
  generateAndRespond(function(users) {
    console.log("GOT USERS!!!", users);
  });
  
  console.log("conntinue...");



  // var a = 2;

// function test() {}

// test.a = 2;

// setTimeout(function() {
//   for (var i = 0; i < 10; i++) {
//     console.log("abc");
//   }
//   console.log(a);
// }, 4);

// console.log(a, test.a);

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function generateAndRespond(cb) {
//   setTimeout(function() {
//     console.log("Getting users...");
//     var users = [1, 2, 3, 4];
//     cb(users);
//   }, random(500, 1000));
// }

// generateAndRespond(function(users) {
//   console.log("GOT USERS!!!", users);
// });

// console.log("conntinue...");

function taskRunner(tasks) {}

function task1() {
  console.log("Task 1");
}
function task2() {
  console.log("Task 2");
}
function task3() {
  console.log("Task 3");
}

taskRunner([task1, task2, task3]);

  
function taskRunner(tasks) {}

function task1() {
  console.log("Task 1");
}
function task2() {
  console.log("Task 2");
}
function task3() {
  console.log("Task 3");
}

var arrOfTasks = [task1, task2, task3];
taskRunner(arrOfTasks);

arrOfTasks[0]();




function taskRunner(tasks) {
    for (var i = 0; i < tasks.length; i++) {
      tasks[i]();
    }
  }
  
  function task1() {
    console.log("Task 1");
  }
  function task2() {
    console.log("Task 2");
  }
  function task3() {
    console.log("Task 3");
  }
  
  var arrOfTasks = [task1, task2, task3];
  taskRunner(arrOfTasks);

  
  




  




