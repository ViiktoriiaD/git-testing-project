https://codesandbox.io/s/red-cloud-uctdb

setTimeout(function() {
    console.log("Hello");
  }, 1000);

  setTimeout(function timeoutCallback() {
    console.log("Hello");
    setTimeout(timeoutCallback, 1000);
  }, 1000);



  var obj = Object.create(Object.prototype, {
    a: {
      enumerable: false,
      value: 2
    }
  });
  
  var obj2 = {
    a: 2
  };
  
  for (var key in obj) {
    console.log(key);
  }

  // первый
  var obj = Object.create(Object.prototype, {
    a: {
      enumerable: false,
      value: 2
    },
    b: {
      value: 3,
      enumerable: true
    }
  });
  // второй
  var obj2 = {
    a: 2
  };
  
  for (var key in obj) {
    console.log(key);
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
  


  var obj = {
    name: "MyFutureObject"
  };
  
  console.log(obj);

  
  var obj = {
    name: "MyFutureObject"
  };
  
  function MyFutureObject() {
      // {}  <- this
    this.name = "MyFutureObject";
  }
  
  console.log(obj, new MyFutureObject());



  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male"
  };
  
  var obj2 = {
    name: "MyFutureObject 2",
    age: 22,
    sex: "male"
  };
  
  function MyFutureObject(name) {
    // {} <- this.
    this.name = name;
  }
  
  console.log(obj, new MyFutureObject("MyFutureObject"));
  
// Дальше исп. ф-ции улучшает предыдущее


  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male"
  };
  
  var obj2 = {
    name: "MyFutureObject 2",
    age: 22,
    sex: "male"
  };
  
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  
  console.log(obj, new MyFutureObject("MyFutureObject", 24, "male"));
  
// еще пример для ф-ции
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  console.log(obj, new MyFutureObject("MyFutureObject", 24));



  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male"
  };
  
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  MyFutureObject.prototype.getAge = function() {
    console.log(this);
  };
  
  var myObject = new MyFutureObject("Hello", 24);
  
  // console.log(myObject);
  
  myObject.getAge();

  // Проверим
  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male"
  };
  
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  MyFutureObject.prototype.getAge = function() {
    return this.__proto__ === MyFutureObject.prototype;
  };
  
  var myObject = new MyFutureObject("Hello", 24);
  
  console.log(myObject.getAge());
// будет false



var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    }
  };
  
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  MyFutureObject.prototype.getAge = function() {
    return this.age;
  };
  
  var myObject = new MyFutureObject("Hello", 24);
  
  console.log(myObject.getAge(), obj.getAge());


  // объект со скопированными св-вами
  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    }
  };
  
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  MyFutureObject.prototype.getAge = function() {
    return this.age;
  };
  
  var myObject = new MyFutureObject("Hello", 24);
  
  console.log(myObject.getAge(), obj.getAge());
  
  var obj = {
    a: 2
  };
  
  console.log(Object.assign({}, obj));
  
  Object.myAssign = function(objToCopy) {
    var newObj = {};
    for (var key in objToCopy) {
      newObj[key] = objToCopy[key];
    }
  
    return newObj;
  };
  
  var n = Object.myAssign({
    b: 4
  });
  
  console.log(n);
// myAssign - полифил




var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function MyFutureObject(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  MyFutureObject.prototype.getAge = function() {
    return this.age;
  };
  
  var myObject = new MyFutureObject("Hello", 24);
  
  obj.incAge();
  obj.incAge();
  obj.incAge();
  obj.incAge();
  obj.incAge();
  obj.incAge();
  obj.incAge();
  
  console.log(obj.getAge());
  
  


  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function User(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  User.prototype.getAge = function() {
    return this.age;
  };
  // создает 5 пользователей
  var usersArray = [];
  
  for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i));
  }
  
  console.log(usersArray);

  // добавим пользователям возраст
  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function User(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
  }
  
  User.prototype.getAge = function() {
    return this.age;
  };
  
  var usersArray = [];
  
  for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i));
  }
  
  for (var i = 0; i < usersArray.length; i++) {
    usersArray[i].age++;
  }
  
  console.log(usersArray);

  
  // увеличим зарплату на 500
  var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function User(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
    this.salary = 500;
  }
  
  User.prototype.getAge = function() {
    return this.age;
  };
  
  var usersArray = [];
  
  for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i));
  }
  
  for (var i = 0; i < usersArray.length; i++) {
    usersArray[i].age++;
    usersArray[i].salary += 500;  // так неудобно для последующего изменения
  }
  
  console.log(usersArray);

  
// Лучше
var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function User(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
    this.salary = 500;
  }
  
  User.prototype.getAge = function() {
    return this.age;
  };
  
  User.prototype.incAge = function() {
    return this.age++;
  };
  
  User.prototype.incSalary = function() {       // здесь
    return (this.salary += 500);
  };
  
  var usersArray = [];
  
  for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i));
  }
  
  for (var i = 0; i < usersArray.length; i++) {
    usersArray[i].incAge();
    usersArray[i].incSalary();
  }
  
  console.log(usersArray);

  
// а если еще и добавлять бонусы
var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function User(name, age, sex) {
    // {} <- this.
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
    this.salary = 500;
  }
  
  User.prototype.getAge = function() {
    return this.age;
  };
  
  User.prototype.incAge = function() {
    return this.age++;
  };
  
  User.prototype.incSalary = function(bonusesAmount) {
    return (this.salary += 500 + (Number(bonusesAmount) || 0));
  };
  
  var usersArray = [];
  
  for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i));
  }
  
  for (var i = 0; i < usersArray.length; i++) {
    usersArray[i].incAge();
    usersArray[i].incSalary(200);  //добавили 200 бонусов
  }
  
  console.log(usersArray);
  

// добавим стаж
var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function() {
      return this.age;
    },
    incAge: function() {
      return this.age++;
    }
  };
  
  function User(name, age, exp, sex) {
    // {} <- this.
    this.exp = exp;
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
    this.salary = 500;
  }
  
  User.prototype.getAge = function() {
    return this.age;
  };
  
  User.prototype.incAge = function() {
    return this.age++;
  };
  
  User.prototype.incSalary = function(bonusesAmount) {
    var bonuses = Number(bonusesAmount) || 0;
    return (this.salary += 500 + bonuses + (this.exp / 100) * bonuses);
  };
  
  var usersArray = [];
  
  for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i, i + 1));
  }
  
  for (var i = 0; i < usersArray.length; i++) {
    usersArray[i].incAge();
    usersArray[i].incSalary(200);
  }
  
  console.log(usersArray);
  

  


